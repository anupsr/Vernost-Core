import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GroupSearch} from '../searchService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[GroupSearch]
})
export class LoginComponent implements OnInit {
  
  username:string='';
  password:string='';
  errormessage:string='';
  constructor(private router:Router, private groupsearch:GroupSearch) { }
   
  login(){
    if(this.username !="" && this.password !=""){
      this.groupsearch.getData({"username":this.username,"password":this.password}).subscribe((response)=>{
        if(response.status){
          console.log('res',response);
           localStorage.setItem("useralias",response.aliasname);
           console.log('as',response.aliasname)
           let un =localStorage.getItem('useralias');
           this.router.navigate(['/groupsearch',response.id]);
        }
        else{
          this.errormessage ="Invalid Credentials";
        }
      })
     
    }
    else{
      this.errormessage = "Enter username and password";
    }
  }
 

  ngOnInit() {
  }

}
