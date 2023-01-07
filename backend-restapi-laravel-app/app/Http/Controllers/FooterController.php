<?php

namespace App\Http\Controllers;

use App\Models\Footer;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    /*
     * getFooterContent method
     * return all footer content
     */
    public function getFooterContent(){
        $footers = Footer::first();
        return $footers;
    }
}
