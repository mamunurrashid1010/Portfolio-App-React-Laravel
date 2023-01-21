<?php

namespace App\Http\Controllers;

use App\Models\ClientReview;
use Illuminate\Http\Request;

class ClientReviewController extends Controller
{
    /*
     * getAllClientReviews method
     * return all client reviews
     */
    public function getAllClientReviews(){
        $clientReviews = ClientReview::select('id','name','description','image')->get();
        return $clientReviews;
    }
}
