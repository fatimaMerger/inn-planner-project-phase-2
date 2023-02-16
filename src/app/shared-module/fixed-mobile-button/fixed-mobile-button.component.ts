import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-mobile-button',
  templateUrl: './fixed-mobile-button.component.html',
  styleUrls: ['./fixed-mobile-button.component.scss']
})
export class FixedMobileButtonComponent implements OnInit {
  isMobile = false;
  OffsetTop: number;
  event:any
  constructor() { }

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onEvent() {
    this.checkMobile();
  }
  
  checkMobile() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth;
    if (windowWidth < 480) {
      this.isMobile = true;
      this.OffsetTop = 900
    } else {
      this.isMobile = false;
      this.OffsetTop = 115

    }
  }
}
