import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment, serviceURL } from "src/environments/environment";
import { LoginService } from "../shared/ervices/user/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  frmGroup: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  constructor(private _LoginService:LoginService) {}

  ngOnInit(): void {}

  submitMethod() {
    // console.log(this.frmGroup);
    // console.log(this.frmGroup.controls["email"]?.errors?.["required"]);
    // console.log(this.frmGroup.value);

    this._LoginService.login(this.frmGroup.value.email,
      this.frmGroup.value.password)
      .subscribe((data)=>console.log(data),
      error=>console.log(error),
      ()=>console.log("dane") );
  }
}
