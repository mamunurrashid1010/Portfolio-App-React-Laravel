<?php

namespace App\Http\Controllers;

use App\Models\Chart;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    /*
     * getAllTechnologies method
     * return technologies list
     */
    public function getAllTechnologies(){
        $technologies = Chart::select('id','technology','projects')->get();
        return $technologies;
    }
}
