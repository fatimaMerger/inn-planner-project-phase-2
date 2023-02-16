import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface DataItem {
  bodyText: string;
  callButton: number;
  emailButton: string;
}
@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {

  isVisible = false;
  isVisible2=false;
  updateContactForm: FormGroup;
  loading = false;
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
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      bodyText: 'Before you decide about engaging with us, you can have a no-obligation introductory call with us, to learn more about how we can help you',
      callButton:+918860000332,
      emailButton:' support@plnr.in'
    }
  ];
  listOfDisplayData = [...this.listOfData];

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
  
  validateForm() {
    if (!this. updateContactForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.updateContactForm.controls) {
      if (i) {
        this.updateContactForm.controls[i].markAsDirty();
        this.updateContactForm.controls[i].markAsTouched();
        this.updateContactForm.controls[i].setErrors({ newerror: true });
        this.updateContactForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }


}
