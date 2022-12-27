<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Moniteur;

class MoniteurController extends Controller
{
    
    public function liste_des_moniteurs(){

       // return Moniteur::find(1);
       $moniteurs =Moniteur::where('nom' , 'med')->orWhere('prenom' , 'ali')->get();
       return $moniteurs;
    }


}
