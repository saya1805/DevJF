import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../Service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newtopic',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './newtopic.component.html',
  styleUrl: './newtopic.component.css'
})
export class NewtopicComponent {
mddiv  = signal(false)
crsdiv = signal(true)
isLoading = signal(false)
errorMessage = signal("")
iserrortitle = signal(false)
iserrorduration = signal(false)
iserrorprice = signal(false)
iserrordescrp = signal(false)

selectedOption = signal('Crs')
apiservice = inject(ApiService)
fb = inject(FormBuilder)
crsinfoAdd!:FormGroup

crslistnew = toSignal(this.apiservice.getCrs() as Observable<any[]>, {initialValue: []})
  newcrsid: any;

  constructor(private toastr: ToastrService){
    this.crsinfoAdd = this.fb.group({
      "Title":"",
      "crsDurationInDays":"",
      "crsPrice":"",
      "Description":"",
      "Author":"Sayali Shelke",
      "VideoUrl":"",
      "crsId":"",
      "modules":this.fb.array([])
    })
    effect(() => {
      console.log('updated response rs list',this.crslistnew())
    })
  }

crsinfopendiv(){
  this.crsdiv.set(true)
  this.mddiv.set(false)
  
}

  selectedTab(tab:any){
    this.selectedOption.set(tab)
  }

mdinfopendiv(){
  this.crsdiv.set(false)
  this.mddiv.set(true)
 if (this.modules.length === 0) {
    const moduleGroup = this.fb.group({
      id:['0'],
      moduleName: [''],
      moduleDescription: ['']
    });
    this.modules.push(moduleGroup);
  }
}

get modules() {
  return this.crsinfoAdd.get('modules') as FormArray;
}

Crssubmit(){
 if(!this.crsinfoAdd.get('Title')?.value){
    // this.errorMessage.set('Please Enter fullname')
    this.iserrortitle.set(true)
    return;
  }

  if(!this.crsinfoAdd.get('crsDurationInDays')?.value){
    // this.errorMessage.set('Please Enter fullname')
    this.iserrorduration.set(true)
    return;
  }

  if(!this.crsinfoAdd.get('crsPrice')?.value){
    // this.errorMessage.set('Please Enter fullname')
    this.iserrorprice.set(true)
    return;
  }

  if(!this.crsinfoAdd.get('Description')?.value){
    // this.errorMessage.set('Please Enter fullname')
    this.iserrordescrp.set(true)
    return;
  }

  this.isLoading.set(true)
  const formValue = this.crsinfoAdd.value;
  const selectedCourse = formValue.Title;

  const finalPayload = {
    ...formValue,
    Title: selectedCourse?.name || "", 
    crsId: selectedCourse?.id || "", 
  };


  if (!finalPayload.Title || finalPayload.Title === "Select Course") {
    alert("Please Select Course");
    return;
  }

  this.apiservice.addcrsInfo(finalPayload).subscribe({
    next:(res => {
      setTimeout(() => {
        this.isLoading.set(false) // ३० सेकंदानी लोडर बंद होईल
        this.toastr.success('Course Added Successfully!', 'Success');
        // alert("Modules Added Successfully!");
      }, 1000);
      console.log(res)
    })
  })
}


addmodule(){
  this.isLoading.set(true)
  let selectedinfo = this.crsinfoAdd.value.Title
  console.log(selectedinfo )
  if(selectedinfo){
    this.newcrsid = selectedinfo.id
    // this.crsinfoAdd.patchValue({Title:selectedinfo.name})
    // this.crsinfoAdd.patchValue({crsId:selectedinfo.id})
  }
  const dataToSendModule = this.crsinfoAdd.get('modules')?.value;
  this.apiservice.addcrsmodelInfo(this.newcrsid,dataToSendModule).subscribe({
    next:(res => {
       setTimeout(() => {
        this.isLoading.set(false) // ३० सेकंदानी लोडर बंद होईल
        this.toastr.success('Modules Added Successfully!', 'Success');
        // alert("Modules Added Successfully!");
      }, 3000);
      console.log(res)
    })
})
  // this.m
}

}

function next(value: any): void {
  throw new Error('Function not implemented.');
}
