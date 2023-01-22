<?php

namespace App\Http\Controllers;

use App\Custom\Common;
use App\Models\Services;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ServicesController extends Controller
{
    /*
     * show method
     * return service info
     */
    function show(){
        $services = Services::all();
        return $services;
    }

    /*
     * store method
     * save/store service data
     */
    function store(Request $request){
        $data=$request->all();
        // validation
        $rule=[
            'name'  => 'required',
            'image' => 'image|mimes:jpg,png,jpeg|max:1000'
        ];
        $customMessage=[
            'name.required'  => 'Name is required',
            'image.image'    => 'Image must be an image!',
            'image.mimes'    => 'Please add a valid image format. Like- jpg/png/jpeg',
            'image.max'      => 'Maximum image size 1000kb',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }

        $imageUrl='';
        if (!empty($request->image))
        {
            $image = 'service_'.time().'.'.$request->image->extension();
            $request->image->move(public_path('images/'), $image);
            // full image path
            $imageUrl = Common::baseURL()."/images/".$image;
        }

        // save/store
        $result = Services::insert([
            'name'          => $data['name'],
            'description'   => $data['description'],
            'image'         => $imageUrl,
            'created_at'    => Carbon::now(),
        ]);

        return $result;
    }

    /*
     * edit method
     * return specific service data for edit
     */
    function edit(Request $request){
        $service = Services::select('id','name','description','image')->where('id',$request->id)->first();
        return $service;
    }

    /*
     * update method
     * update service info
     */
    function update(Request $request){
        $data=$request->all();
        // validation
        $rule=[
            'id'    => 'required',
            'name'  => 'required',
            'image' => 'image|mimes:jpg,png,jpeg|max:1000'
        ];
        $customMessage=[
            'id.required'    => 'Id required',
            'name.required'  => 'Name is required',
            'image.image'    => 'Image must be an image!',
            'image.mimes'    => 'Please add a valid image format. Like- jpg/png/jpeg',
            'image.max'      => 'Maximum image size 1000kb',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }

        # image
        $oldImage=Services::select('image')->where('id',$request->id)->first();
        if (!empty($request->image))
        {
            $image = 'service_'.date('YmdHims').'.'.$request->image->extension();
            $request->image->move(public_path('images/'), $image);
            # full image path
            $image = Common::baseURL()."/images/".$image;

            #delete old image
            $oldImage = explode('/',$oldImage->image)[4] ;
            if (File::exists(public_path('images/'.$oldImage))) {
                File::delete(public_path('images/'.$oldImage));
            }
        }
        else
            $image=$oldImage->image;

        # update
        $dataUpdate = [
            'name'          => $data['name'],
            'description'   => $data['description'],
            'image'         => $image,
            'updated_at'    => Carbon::now(),
        ];
        $result  = Services::where('id',$request->id)->update($dataUpdate);

        return $result;
    }

    /*
     * delete method
     * delete service record
     */
    function delete(Request $request){
        $service = Services::select('image')->where('id',$request->id)->first();
        if($service){
            $result = Services::where('id',$request->id)->delete();
            if($result){
                $oldImage = explode('/',$service->image)[4] ;
                #delete old image
                if (File::exists(public_path('images/'.$oldImage))) {
                    File::delete(public_path('images/'.$oldImage));
                }
                return true;
            }
            return false;
        }
        return false;
    }


    /* --------------------------------- API --------------------------------------- */
    /*
     * getAllService method
     * return all service list
     */
    public function getAllService(){
        $services = Services::select('id','name','description','image')->get();
        return $services;
    }
}
