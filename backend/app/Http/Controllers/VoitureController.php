<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Voiture;

class VoitureController extends Controller
{
    //
    public function liste_des_voitures(){
        $voiture = Voiture::find(1);
        return $voiture->get_model;
     }

     public function supprimer($id){
        Voiture::find($id)->delete();
        return "ok";
     }

     public function ajouter(){
        $v = new Voiture();
        $v->nom = "test";
        $v->description = "desc";
        $v->matricule = "123";
        $v->model_id = 1;
        $v->save();
     }
}
