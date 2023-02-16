import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer,SafeHtml  } from '@angular/platform-browser';

@Component({
  selector: 'app-start-here',
  templateUrl: './start-here.component.html',
  styleUrls: ['./start-here.component.scss']
})
export class StartHereComponent implements OnInit {
  showVideoModal: boolean=false;
  constructor() { 
    this.checkMobile();

  }
  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onEvent(event:any) {
    this.checkMobile();
  }
  isMobile: boolean = false;
  isTab: boolean = false;
  source:string;
  ngOnInit(): void {
  }
  resize(){
    this.checkMobile();
  }

  checkMobile() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth;
    if (windowWidth < 480) {
      this.isMobile = true;
    } else if (windowWidth <= 1024 && windowWidth > 480) {
      this.isTab = true;
    } else {
      this.isMobile = false;
    }
  }
  routeTo(address: string,newTab:boolean = true) {
    // window.location.href = address;
    var a = document.createElement('a');
   a.href = address;
   if (newTab) {
      a.setAttribute('target', '_blank');
   }
   a.click();
  }
  showYtVideoModal(source:string) {
   this.source=source;
    this.showVideoModal = true;
  }
  
  handleOkTop() {
    this.showVideoModal = false;
  }

  handleCancelTop() {
    this.showVideoModal = false;
  }

}
