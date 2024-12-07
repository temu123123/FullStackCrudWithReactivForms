import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-user',
  imports: [CommonModule, RouterLink],
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.css'

})
export class AllUserComponent {

  users:any = [];

  constructor(private userService:UserService){}

  ngOnInit(){
      this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      console.log(res);
      this.users = res;
    })
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.getAllUsers();
    })
  }

}
