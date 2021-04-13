import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})

export class RestComponent implements OnInit {
  users: Users[] = [];
  firstName: any;
  p: number = 1;

  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })
    console.log("test");
  }

  search(){
    if(this.firstName === ""){
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return (
        res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) || 
        res.lastName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) ||
        res.email?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) ||
        res.mobile?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) ||
        res.salary?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase()) 
        );
      })
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
