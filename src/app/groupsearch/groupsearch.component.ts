import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GroupSearch} from '../searchService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groupsearch',
  templateUrl: './groupsearch.component.html',
  styleUrls: ['./groupsearch.component.css'],
  providers:[GroupSearch]
})
export class GroupsearchComponent implements OnInit {

  searchgroup:any={
    groupname:'',
    fromdate:'',
    todate:'',
  };
   group_name:string="";
   from_date:string="";
   to_date:string="";
   un:string="";

  searchresult:any=[];
  constructor(private groupService:GroupSearch, private router:Router) { } 
  
  groupSearch(){
  
   this.group_name = ((document.getElementById('group_nameid')as HTMLInputElement).value);
   this.from_date = ((document.getElementById('from_dateid')as HTMLInputElement).value);
   this.to_date = ((document.getElementById('to_dateid')as HTMLInputElement).value);
   this.searchgroup.groupname=this.group_name;
   this.searchgroup.from_date=this.from_date;
   this.searchgroup.to_date=this.to_date;
   this.groupService.getsearchResult(this.searchgroup)
  .subscribe(
    (list:any)=>{
      // console.log(list);
    this.searchresult = list;
    console.log('sera',this.searchresult);
    }
  );
  }
  reset(){
    this.group_name='';
    this.from_date='';
    this.to_date='';
    this.searchresult='';
    this.test();
  }
 
  test(){
    console.log("hello from test")
    if(this.group_name=="" && this.from_date=="" && this.to_date==""){
      console.log("hello from true");
      ((document.getElementById('search_btn') as HTMLInputElement).disabled)=true;
    }
    else{
      console.log("hello from false");
      ((document.getElementById('search_btn') as HTMLInputElement).disabled)=false;
    }
  }

  logout(){
    localStorage.removeItem('useralias');
    this.router.navigate(['\login']);
  }

  ngOnInit() {
   this.test();
   this.un =localStorage.getItem('useralias');

  }
}
