<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /*
     * getThreeProject method
     * return three project list
     */
    public function getThreeProject(){
        $projects = Projects::limit(3)->get();
        return $projects;
    }

    /*
     * getAllProject method
     * return all project list
     */
    public function getAllProject(){
        $projects = Projects::all();
        return $projects;
    }

    /*
     * details method
     * return specific project details
     */
    public function details(Request $request){
        $id = $request->id;
        $projectDetails = Projects::where('id',$id)->first();
        return $projectDetails;
    }
}
