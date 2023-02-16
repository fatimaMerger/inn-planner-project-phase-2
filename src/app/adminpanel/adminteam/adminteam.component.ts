import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
interface DataItem {
  name: string;
  age: number;
  address: string;
  qualification:string;
  designation:string
}
@Component({
  selector: 'app-adminteam',
  templateUrl: './adminteam.component.html',
  styleUrls: ['./adminteam.component.scss']
})
export class AdminteamComponent implements OnInit {
  isVisible = false;
  isVisible2=false;
  addTeamForm: FormGroup;
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
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      qualification:'15+ years of designation in personal financial planning space',
      designation:'Founder'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      qualification:'15+ years of designation in personal financial planning space',
      designation:'Co-Founder'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      qualification:'15+ years of designation in personal financial planning space',
      designation:'CFO'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      qualification:'15+ years of designation in personal financial planning space',
      designation:'CFO'
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
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
    if (!this. addTeamForm.valid) {
      this.handleFormError();
      return;
    }
    this.save();
  }

  handleFormError() {
    for (const i in this.addTeamForm.controls) {
      if (i) {
        this.addTeamForm.controls[i].markAsDirty();
        this.addTeamForm.controls[i].markAsTouched();
        this.addTeamForm.controls[i].setErrors({ newerror: true });
        this.addTeamForm.controls[i].updateValueAndValidity();
      }
    }
  }
  save() {
  }
}
