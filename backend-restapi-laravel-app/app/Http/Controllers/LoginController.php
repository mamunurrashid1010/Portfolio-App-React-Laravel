<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    function onLogin(Request $request){
        $data=$request->all();
        // validation
        $rule=[
            'email'     => 'required',
            'password'  => 'required',
        ];
        $customMessage=[
            'email.required'     => 'Email required',
            'password.required'  => 'Password required',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }
        $user=User::where('email',$data['email'])->where('password',$data['password'])->count();
        if($user){
            session()->put('email',$data['email']);
            return "1";
        }
        else{
            return "0";
        }

    }

    function logout(Request $request){
        $request->session()->flush();
        return redirect('/');
    }
}
