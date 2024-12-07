import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-user',
  imports: [ReactiveFormsModule],
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.css'
})
export class PostUserComponent {

  validateForm!:FormGroup;

  constructor(private userService:UserService, private fb:FormBuilder){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]]
    })
  }
  
  postUser() {
    this.userService.postUser(this.validateForm.value).subscribe(res => {
      console.log(res)
    })
  }

}
