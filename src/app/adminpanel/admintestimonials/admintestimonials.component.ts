import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admintestimonials',
  templateUrl: './admintestimonials.component.html',
  styleUrls: ['./admintestimonials.component.scss']
})
export class AdmintestimonialsComponent implements OnInit {
  isVisible = false;
  isVisible2=false;
  loading = false;
  addFaqForm: FormGroup;
  constructor() { }


  ngOnInit(): void {
    this.hideNavAndFooter();
  }

  hideNavAndFooter(){
    let headerStyle: any = document.querySelector('app-top-nav-bar');
    console.log('yo',headerStyle)
    headerStyle.style.display = "none"
    let footerStyle:any = document.querySelector('app-footer');
    footerStyle.style.display = "none"
  }
  showEditModal(): void {
    this.isVisible2 = true;
  }
  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  validateForm() {
    if (!this. addFaqForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.addFaqForm.controls) {
      if (i) {
        this.addFaqForm.controls[i].markAsDirty();
        this.addFaqForm.controls[i].markAsTouched();
        this.addFaqForm.controls[i].setErrors({ newerror: true });
        this.addFaqForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }
}
