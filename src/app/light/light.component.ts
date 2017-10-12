import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-light',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})

export class LightComponent implements OnInit {
  canvasWidth = 600;
  canvasHeight = 600;
  circleRadius = 50;
  colors = ['red', 'yellow', 'green'];
  currentColor = 'red';
  previousColor = '';
  // currentColoxIndex = 0;

  // constructor(private ref: ChangeDetectorRef) {
  /* let colours = this.colors,
      currentColoxIndex = this.currentColoxIndex; 
  setInterval(function(){
    if(colours.length > currentColoxIndex){
        currentColoxIndex ++;
        this.currentColor = colours[currentColoxIndex];
        // this.drawCircle(this.canvasWidth / 2, this.canvasHeight / 5 + this.circleRadius, this.circleRadius, 'rgba(255, 0, 0, 0.1)')
    }else{
      colours  = colours.reverse()
      currentColoxIndex  = 0;
    }
  },1000); */


  // setInterval(() => {
  //   this.changeTrafficLight();

  //   this.ref.markForCheck();
  // }, 5000);

  // }

  constructor() {
    setInterval(() => {
      this.changeTrafficLight();
    }, 4000)
  }

  ngOnInit() {

  }

  changeTrafficLight() {
    console.log();
    if (this.currentColor === this.colors[0]) {
      this.previousColor = this.currentColor;
      this.currentColor = this.colors[1];
    }
    else if (this.currentColor === this.colors[1] && this.previousColor === this.colors[0]) {
      this.previousColor = this.currentColor;
      this.currentColor = this.colors[2];
    }
    else if (this.currentColor === this.colors[1] && this.previousColor === this.colors[2]) {
      this.previousColor = this.currentColor;
      this.currentColor = this.colors[0];
    }
    else {
      this.previousColor = this.currentColor;
      this.currentColor = this.colors[1];
    }
  }

  drawCircle(xCenter, yCenter, radius, color) {
    // debugger;

    var c = <HTMLCanvasElement>document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, radius,
      0, 2 * Math.PI);
    if (color === this.currentColor) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.fillStyle = 'white';
      ctx.fill();
    }
    ctx.stroke();
  }

}
