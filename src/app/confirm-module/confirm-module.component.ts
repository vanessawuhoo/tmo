import { Component, ViewChild, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { ColorBlockComponent } from '../color-block/color-block.component';


@Component({
  selector: 'app-confirm-module',
  templateUrl: './confirm-module.component.html',
  styleUrls: ['./confirm-module.component.scss']
})
export class ConfirmModuleComponent implements OnInit {
  @Input() hex;
  @Output() addColor: EventEmitter<any> = new EventEmitter();
  @ViewChild(ColorBlockComponent) colorBlock: ColorBlockComponent;
  

  constructor() { }

  ngOnInit() {
  }

  setHexColor(hex) {
    this.hex = hex.toUpperCase();
    this.colorBlock.setHexColor(hex);
  }

  disableButton() {
    (<HTMLInputElement> document.getElementById("addButton")).disabled = true;
  }

  enableButton() {
    (<HTMLInputElement> document.getElementById("addButton")).disabled = false;
  }

  addColorToList() {
    this.addColor.emit(this.hex);
  }
}
