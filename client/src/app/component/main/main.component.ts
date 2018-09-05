import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Login } from '../../interfaces/login';
import { Router } from '@angular/router';
import { adminLogin } from '../../interfaces/adminLogin';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public userLoginFlag:boolean= false;
  public adminLoginFlag:boolean=false;
  public userSignUpFlag:boolean=false;
  public valuesignUp:boolean=true;
  public value:boolean=true;
  public model:any=[];
  public modellUserLogin:Login;
  public modellAdminLogin:adminLogin;
  public modellSignUp:Login;

  constructor(private loginDb:UserService,private _router: Router) {
    this.modellUserLogin ={
      emailid:"",
      password:""
    }
    this.modellSignUp ={
      emailid:"",
      password:""
    }
    this.modellAdminLogin ={
      name:"",
      password:""
    }
   }

  userLogin(){
    this.userLoginFlag = true;
    this.userSignUpFlag = false;
    this.adminLoginFlag = false;
  }
  userSignUp(){
    this.userSignUpFlag = true;
    this.userLoginFlag = false;
    this.adminLoginFlag = false;
  }


  adminLogin() {
    this.adminLoginFlag = true;
    this.userSignUpFlag = false;
    this.userLoginFlag = false;
  }

 
  display(){
    this.loginDb.getData().subscribe(array=>{
      this.model=array;
    })

  }
  validatedata()
  {
    for(var i=0;i<this.model.length; i++)
    {
      if(this.model[i].emailid === this.modellUserLogin.emailid)
      {
        if(this.model[i].password === this.modellUserLogin.password)
        {
        this.value=false;
        alert("login happened successfully");
        this._router.navigate(['/user']);
        this.userLoginFlag = false
        break;
      }
      }
    }
   if(this.value)
   {
     alert("you are not registered member");
   }
}

validatedataSignUp()
{
  for(var i=0;i<this.model.length; i++){
    if(this.model[i].emailid === this.modellSignUp.emailid)
    {
      this.valuesignUp=false;
      alert("Already this email is present");
      break;
    }
  }
  if(this.valuesignUp){
    this.addData();
}
  
}

addData()
{
  this.loginDb.postData(this.modellSignUp).subscribe(res=>{
    console.log(res)
    alert("Registration Happened Successfully")
  });
  }


  validateAdmin() {
    if(this.modellAdminLogin.name === "v") {
      if(this.modellAdminLogin.password === "v"){
        alert("logged In")
        this.adminLoginFlag = false
        this._router.navigate(['/admin']);
      }
      else
      alert("Invalid credentials")
    }
    else
    alert("Invalid credentials")
  }

  ngOnInit() {
    this.display();
  }

}
