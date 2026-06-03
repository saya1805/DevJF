import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,RouterModule,LucideAngularModule,RouterLink,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private apiservice = inject(ApiService)
  public fb= inject(FormBuilder)
  private router = inject(Router)
  profilePicUrl = "/user.jpg"
  randomValue = Math.random();

  signinform:FormGroup = this.fb.group({
      "fullname":"",
      "username":"",
      "mailid":"",
      "Password":"",
      "ProfilePictureUrl":""
    })

  OtpForm:FormGroup = this.fb.group({
    "otpmail":"",
    "otp":""
  })

  isLoading = signal(false);
  errorMessage = signal('');
  iserrorpass = signal(false);
  iserrorfulln = signal(false);
  iserrorusername = signal(false);
  iserrormail = signal(false);
  iserrormailotp = signal(false);
  enterOtp = signal(false)
  otpverify = signal('')
  
  constructor(){}

SubmitForm(){
    this.isLoading.set(true)
  if(!this.signinform.get('fullname')?.value){
    this.errorMessage.set('Please Enter fullname')
    this.iserrorfulln.set(true)
    this.isLoading.set(false)
    return;
  }

  if(!this.signinform.get('username')?.value){
    this.errorMessage.set('Please Enter username')
    this.iserrorusername.set(true)
    this.isLoading.set(false)
    return;
  }
  
  if(!this.signinform.get('mailid')?.value){
    this.errorMessage.set('Please Enter mailid')
    this.iserrormail.set(true)
    this.isLoading.set(false)
    return;
  }
  
  if(!this.signinform.get('Password')?.value){
    this.errorMessage.set('Please Enter Password')
    this.iserrorpass.set(true)
    this.isLoading.set(false)
    return;
  }

  if(!this.OtpForm.get('otp')?.value){
    alert("OTP verification is required before proceeding.")
    this.isLoading.set(false)
    return;
  }

  if(this.otpverify() == ""){
    this.sendotp()
  }
  // else if(!this.signinform.get('Password')?.value){
  //   this.errorMessage.set('Please Enter Password')
  //   this.iserror.set(true)
  // }
  if(this.otpverify() == "Sucess"){
  this.errorMessage.set('')

  this.apiservice.resgister(this.signinform.value).subscribe({
   next: (res) => {
    alert("sucess")
        console.log('registration sucess response', res);
        this.isLoading.set(false);
        this.router.navigate(["/action/logIn"])
        this.isLoading.set(false)
      },
      error: (err) => {
        this.errorMessage.set(err);
        this.isLoading.set(false);
      }
    });
  }else{
    alert('OTP verification is required before proceeding.')
  }

 
  
  this.signinform.value
  console.log(this.signinform.value)
  // return true
}

  sendotp(){
    const sendemail = this.signinform.get('mailid')?.value
    this.apiservice.sendOtp(sendemail).subscribe({
      next:(res:any) => {
        console.log(res.message)
        this.enterOtp.set(true)
      },error:(err) => {
        console.log(err)
        this.enterOtp.set(false)
      }
    })
  }

  verifyotp(){
     if(!this.OtpForm.get('otp')?.value){
    this.errorMessage.set('Please Enter Otp')
    this.iserrormailotp.set(true)
    this.isLoading.set(false)
    return;
  }

    const sendemail = this.signinform.get('mailid')?.value
    const otpNumber = this.OtpForm.get('otp')?.value
      this.apiservice.verifyOtp(sendemail,otpNumber).subscribe({
        next:(res:any) => {
          console.log(res)
          this.otpverify.set("Sucess")
        },error:(err) => {
          console.log(err)
          this.otpverify.set("Failed")
        }
      })
  }

  onFileSelected(event: any) {
  const file = event.target.files[0];
  console.log(file);

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.profilePicUrl = reader.result as string; 
    };
    reader.readAsDataURL(file);

    this.apiservice.userprofileurl(file).subscribe({
      next: (res: any) => {
        const fileName = res.path.replace(/\s+/g, '');
        const profileurl = res.path.replace("uploads/", "");
        this.signinform.patchValue({ ProfilePictureUrl: profileurl });
        this.randomValue = Math.random();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}

}
