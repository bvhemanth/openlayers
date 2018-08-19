import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	myform: FormGroup;
  	constructor(private router: Router) { }

  	ngOnInit() {


  		let check=localStorage.getItem('uname');
  		if(check)
  		{
  			this.router.navigate(['map']);	
  		}
  		this.myform = new FormGroup({
        	username: new FormControl("",Validators.required),
        	password: new FormControl("",Validators.required)
    	});
  	}
	


  	onSubmit(e)
  	{
  		
  		
  		let uName=this.myform.controls.username.value;
  		let Password=this.myform.controls.password.value
  		if((uName="hemanth")&&(Password=="P@ssw0rd"))
  		{
  			localStorage.setItem('uname', uName);

  			this.router.navigate(['map']);
  		} 
  	}


}
