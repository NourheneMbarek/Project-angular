<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Condidat;
class CandidatController extends Controller
{
    //
    public function liste_des_candidats(){

        return Condidat::all();
    }

    public function supprimer($id){
        Condidat::find($id)->delete();
        return ['rep' => 'ok'];
    }
    public function ajouter(Request $request){
        $candidat = new Condidat();
        $candidat->nom = $request->input('n');
        $candidat->prenom = $request->input('p');
        $candidat->type="b";
        $candidat->code_valide = 22;
        $candidat->nb_heures = 20;
        $candidat->save();
        return ['ok'=>'ok'];
       
    }
}
