<?php

namespace App\Http\Controllers;

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

        $image='';
        if (!empty($request->image))
        {
            $image = 'service_'.time().'.'.$request->image->extension();
            $request->image->move(public_path('images/'), $image);
        }

        // save/store
        $result = Services::insert([
            'name'          => $data['name'],
            'description'   => $data['description'],
            'image'         => $image,
            'created_at'    => Carbon::now(),
        ]);

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
                #delete old image
                if (File::exists(public_path('images/'.$service->image))) {
                    File::delete(public_path('images/'.$service->image));
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
        $services = Services::select('id','name','description','images')->get();
        return $services;
    }
}
