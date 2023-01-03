<?php

namespace App\Http\Controllers;

use App\Models\HomeCommon;
use Illuminate\Http\Request;

class HomeCommonController extends Controller
{
    /*
     * getTopBannerContent method
     * return top banner title and sub-title data
     */
    public function getTopBannerContent(){
        $data= HomeCommon::select('title','sub_title')->first();
        return $data;
    }

    /*
     * getTechnologyDescription method
     * return technology used description
     */
    public function getTechnologyDescription(){
        $techDes= HomeCommon::select('technology_description')->first();
        return $techDes;
    }

    /*
     * getCountingDetails method
     * return counting section data
     */
    public function getCountingDetails(){
        $countData = HomeCommon::select('total_project','total_client')->first();
        return $countData;
    }

    /*
     * getVideoInfo method
     * return home page video info
     */
    public function getVideoInfo(){
        $videos = HomeCommon::select('video_title','video_description','video_url')->first();
        return $videos;
    }


}
