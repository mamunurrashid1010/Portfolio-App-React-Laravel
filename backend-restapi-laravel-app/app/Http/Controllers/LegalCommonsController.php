<?php

namespace App\Http\Controllers;

use App\Models\LegalCommons;
use Illuminate\Http\Request;

class LegalCommonsController extends Controller
{
    /*
     * getLegalContent method
     * return all legal common information
     */
    public function getLegalContent(){
        $legals = LegalCommons::all();
        return $legals;
    }
}
