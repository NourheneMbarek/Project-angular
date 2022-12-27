import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  add_user(nom , prenom){
    let body = {'n' : nom , 'p' : prenom};

    return this.http.post('http://localhost:8000/api/ajouter_candidat' , body, this.httpOptions);
  }
  getAll(){
    return this.http.get('http://localhost:8000/candidats');
  }

  delete(id){
    return this.http.get('http://localhost:8000/supprimer_candidat/'+id);
  }
  
}
