import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/viewModels/user';
import Swal from 'sweetalert2';
import { CandidatsService } from 'src/app/candidats.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private candidatsService : CandidatsService) { }
  nom ; prenom ; 
  users ;
  /* = [
    new User("enom1" , "email1@domaine.com"),
    new User("rnom2" , "email2@domaine.com"),
    new User("anom3" , "email3@domaine.com"),
  ];*/
  users2;
  ngOnInit() {
    this.candidatsService.getAll()
    .subscribe(res=>{
        console.log(res);
        this.users = res;
    });

   



    this.users2 = this.users;
    
  }

  ajouter(){
    this.candidatsService.add_user(this.nom , this.prenom)
    .subscribe(res=>{
      console.log(res);
    })
  }
  search(val){
    console.log(val);
   this.users = this.users2;
    let aux : User[] = [];
    for(let u of this.users){
      if((u.name.indexOf(val)>=0)||(u.email.indexOf(val)>=0)){
        aux.push(u);
      }
    }
    this.users = aux;
  }

  sort(){
    (this.users || []).sort((a : User , b:User)=> a.name <b.name ? -1 : 1);
  }

  delete(u){
    Swal.fire(
      {
        title : "Are you sure ?",
        text : "you will not be able to recover " + u.name,
        type : "warning" , 
        showCancelButton : true,
        confirmButtonText : 'Yes',
        cancelButtonText : 'No , keep it'
      }
    ).then(
      (result)=>{
        if(result.value){
          //supression
          this.candidatsService.delete(u.id)
          .subscribe(res=>{
            this.ngOnInit()
          });

          Swal.fire('deleted' , '' , 'success')
        }else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Cancel' , '' , 'error');
        }
      }
    );
  }
}
