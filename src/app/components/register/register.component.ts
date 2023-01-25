import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { LoginService } from "../shared/ervices/user/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frmGroup:FormGroup=new FormGroup({
    email:new FormControl(''),
    phone:new FormControl(''),
    userName:new FormControl(''),
    ConfirmPassword:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private _LoginService:LoginService) { }

  ngOnInit(): void {
  }
  submitMethod() {
    // console.log(this.frmGroup);
    // console.log(this.frmGroup.controls['email']?.errors?.['required']);
    // console.log(this.frmGroup.value); 

    this._LoginService.Register(this.frmGroup.value.userName,
      this.frmGroup.value.email, this.frmGroup.value.password)
      .subscribe((data)=>console.log(data),
      error=>console.log(error),
      ()=>console.log("done")) 

      }


}
