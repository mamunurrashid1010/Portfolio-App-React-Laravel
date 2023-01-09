<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    /*
     * getFourCourse method
     * return four courses list
     */
    public function getFourCourse(){
        $courses = Courses::limit(4)->get();
        return $courses;
    }

    /*
     * getAllCourse method
     * return all courses list
     */
    public function getAllCourse(){
        $courses = Courses::all();
        return $courses;
    }

    /*
     * details method
     * return specific course details
     */
    public function details(Request $request){
        $id = $request->id;
        $courseDetails = Courses::where('id',$id)->first();
        return $courseDetails;
    }
}
