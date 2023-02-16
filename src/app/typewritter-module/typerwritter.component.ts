import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-typerwritter',
  templateUrl: './typerwritter.component.html',
  styleUrls: ['./typerwritter.component.scss']
})
export class TyperwritterComponent implements OnInit {

  @Input() StringList: Array<string>;
  @Output() listEnded = new EventEmitter<any>();

  @Input() speed:any;
  writeText= ''; loopNumber= 0; isDeleting= false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.writeLine(), 500); 
  }

  writeLine() {
    let i = this.loopNumber % this.StringList.length;
    let fullTxt = this.StringList[i];

    if (this.isDeleting) {
       this.writeText= fullTxt.substring(0, this.writeText.length - 1)
    } else {
      this.writeText= fullTxt.substring(0, this.writeText.length + 1)
    }

    let delTime = 90;
    if (this.isDeleting) { delTime /= 2; }
    if (!this.isDeleting && this.writeText === fullTxt) {
      delTime = this.speed || 700;
      this.isDeleting= true
    } else if (this.isDeleting && this.writeText === '') {
      this.isDeleting = false, this.loopNumber++
      if (this.StringList.length == this.loopNumber) {
        this.listEnded.emit();
        // this.speed = 5500000000;
      }
      delTime = this.speed || 700;
    }
    setTimeout(async () => await this.writeLine(), delTime);
  }

}
