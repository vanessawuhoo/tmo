import { Component, ViewChild, NgModule } from '@angular/core';
import { ConfirmModuleComponent } from '../confirm-module/confirm-module.component';
import { PickedColorsComponent } from '../picked-colors/picked-colors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(ConfirmModuleComponent) confirmModule : ConfirmModuleComponent;
  @ViewChild(PickedColorsComponent) pickedColors : PickedColorsComponent;
  private inputContents;
  private pictureUrl;
  private canvas:HTMLCanvasElement;
  private hiddenImage:HTMLImageElement;
  private fileInput:HTMLInputElement;
  private context;
  private widthMultiplier;
  private heightMultiplier;
  public hex;
  private spacingOffset;
  private lastClick;

  constructor() {
    this.inputContents = '';
    this.pictureUrl = '';
    this.widthMultiplier = 1;
    this.heightMultiplier = 1;
    this.hex = '#000000';
    this.lastClick = {'x': 0, 'y': 0};
  }

  ngOnInit() {
    this.fileInput = <HTMLInputElement> document.getElementById('myInput');
    this.canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    this.canvas.height = 650;
    this.canvas.width = 650;
    this.hiddenImage = <HTMLImageElement> document.getElementById('hiddenImage');
    this.confirmModule.disableButton();
    this.canvas.addEventListener('click', (e) => {
      this.getColor((e.pageX - this.canvas.offsetLeft)*this.widthMultiplier, (e.pageY - this.canvas.offsetTop)*this.heightMultiplier);
      this.lastClick.x = (e.pageX - this.canvas.offsetLeft)*this.widthMultiplier;
      this.lastClick.y = (e.pageY - this.canvas.offsetTop)*this.heightMultiplier;
      this.confirmModule.enableButton();
    });
    this.fileInput.addEventListener('change', (e) => {
      this.getPicture();
    });
    this.context = this.canvas.getContext('2d');
  }

  getPicture(){
    var selectedFile = this.fileInput.files[0];
    var reader = new FileReader();
    var loading = true;
    reader.addEventListener("load", (e) => {
      this.setSource(reader.result);
      this.hiddenImage.addEventListener('load', (e) => {
        this.drawCanvas();
      })
    });

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  }

  setSource(result) {
    this.hiddenImage.src = result;
  }

  drawCanvas() {
    this.pickedColors.clear();
    this.canvas.width = 650;
    this.canvas.height = 650;
    if (this.hiddenImage.height >= this.hiddenImage.width) {
      this.hiddenImage.style.height = '650px';
      this.hiddenImage.style.width = 'auto';
      this.context.drawImage(this.hiddenImage, (650 - this.hiddenImage.width)/2, 0, this.hiddenImage.width, this.hiddenImage.height);
    } else {
      this.hiddenImage.style.width = '650px';
      this.hiddenImage.style.height = 'auto';
      this.context.drawImage(this.hiddenImage, 0, 0, this.hiddenImage.width, this.hiddenImage.height);
    }
  }

  getColor(x, y) {
    var data = this.context.getImageData(x, y, 1, 1).data;
    var hex = '#' + this.rgbToHex(data[0]) + this.rgbToHex(data[1]) + this.rgbToHex(data[2]);
    this.confirmModule.setHexColor(hex);
  }

  rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  addColorToList(hex) {
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.arc(this.lastClick.x, this.lastClick.y, 3, 0, 2 * Math.PI);
    this.context.fill();
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(this.lastClick.x, this.lastClick.y, 2, 0, 2 * Math.PI);
    this.context.fill();
    this.pickedColors.addColorToList(hex);
    this.confirmModule.disableButton();
  }
}
