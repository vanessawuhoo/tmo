import { Component, OnInit } from '@angular/core';
import { ColorBlockComponent } from '../color-block/color-block.component';
import * as sccolor from 'sc-color';

@Component({
  selector: 'app-picked-colors',
  templateUrl: './picked-colors.component.html',
  styleUrls: ['./picked-colors.component.css']
})
export class PickedColorsComponent implements OnInit {
  private pickedColors;
  public sortedColors;
  private originColor;

  constructor() { }

  ngOnInit() {
    this.pickedColors = new Set([]);
    this.originColor = '';
  }

  addColorToList(hex) {
    this.pickedColors.push(hex);

    //finding an origin color
    var value = Number.POSITIVE_INFINITY;
    for (let color of this.pickedColors) {
      let distance = this.colorDistanceFormula(color, '#FFFFFF');
      if (distance < value) {
        value = distance;
        this.originColor = color;
      }
    }

    this.sortedColors = []
    this.sortPickedColors(this.originColor, this.sortedColors, this.pickedColors.slice());
  }

  sortPickedColors(origin, sorted, unsorted) {
    if (unsorted.length === 1) {
      sorted.push(unsorted[0]);
      return;
    } 

    //remove the origin from the unsorted list
    unsorted.splice(unsorted.indexOf(origin), 1);
    sorted.push(origin);

    //iterate through array to find the distances from origin to all other points
    var distances = {}
    for (let color of unsorted) {
      distances[color] = this.colorDistanceFormula(origin, color);
    }

    //find the shortest color and distance
    var key = ""
    var value = Number.POSITIVE_INFINITY;
    for (let d in distances) {
      if (distances[d] < value) {
        value = distances[d];
        key = d;
      }
    }

    this.sortPickedColors(key, sorted, unsorted);
  }

  colorDistanceFormula(hexA, hexB) {
    let a = sccolor(hexA),
        b = sccolor(hexB);
    var red = a.red() - b.red(),
        green = a.green() - b.green(),
        blue = a.blue() - b.blue();
    return Math.sqrt(red*red + green*green + blue*blue);
  }

  clear() {
    this.pickedColors = [];
    this.sortedColors = [];
  }
}
