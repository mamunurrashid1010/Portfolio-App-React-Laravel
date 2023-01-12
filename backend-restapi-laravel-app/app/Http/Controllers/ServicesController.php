<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    /*
     * getAllService method
     * return all service list
     */
    public function getAllService(){
        $services = Services::select('id','name','description','images')->get();
        return $services;
    }
}
