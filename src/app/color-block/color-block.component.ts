import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.css']
})
export class ColorBlockComponent implements OnInit {
  @Input() hex;
  // @ViewChild(HTMLCanvasElement) canvas: HTMLCanvasElement;
  private canvas:HTMLCanvasElement;

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.canvas = this.elRef.nativeElement.querySelector('canvas');
    this.canvas.style.background = this.hex;
  }

  setHexColor(hex) {
    this.canvas.getContext('2d').fillStyle = hex;
    this.canvas.getContext('2d').fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

}
