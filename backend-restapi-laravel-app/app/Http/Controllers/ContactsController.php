<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactsController extends Controller
{
    /*
     * show method
     * return contact info
     */
    function show(){
        $contacts = Contacts::all();
        return $contacts;
    }

    /*
     * delete method
     * delete contact info
     */
    function delete(Request $request){
        $result = Contacts::where('id',$request->id)->delete();
        return $result;
    }

    /* --------------------------------- API --------------------------------------- */
    /*
     * store method
     * store/save user contact details to db
     */
    public function store(Request $request){
        $data=$request->all();
        // validation
        $rule=[
            'name'      => 'required',
            'email'     => 'required|email',
            'message'   => 'required',
        ];
        $customMessage=[
            'name.required'     => 'Name is required',
            'email.required'    => 'Email is required',
            'email.email'       => 'Email must be a valid mail',
            'message.required'  => 'Message is required',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }
        // save contact info
        $result = Contacts::insert([
            'name'      => $data['name'],
            'email'     => $data['email'],
            'message'   => $data['message'],
            'created_at'=> Carbon::now(),
        ]);
        $message="Contact info sent Successfully";
        if($result == true){
            return response()->json(['message'=>$message],201);
        }
        else{
            return response()->json(['message'=>'Fail!'],424);
        }
    }

}
