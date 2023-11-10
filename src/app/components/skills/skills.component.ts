import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  htmlCount: number = 0;
  cssCount: number = 0;
  bootstrapCount: number = 0;
  tailwindCount: number = 0;
  jsCount: number = 0;
  angularCount: number = 0;

  constructor() { }

  ngOnInit() {
    this.skillCounters();
  }
  skillCounters() {
   // Define target values for your counters
   const targetHtml = 95;
   const targetCss = 85;
   const targetBootstrap = 80;
   const targetTailwind = 80;
   const targetJs = 90;
   const targetAngular=90;

   // Define the increment speed (milliseconds per increment)
   const incrementSpeed = 10; // Adjust as needed

   // Increment the counters over time
   const htmlInterval = setInterval(() => {
     if (this.htmlCount < targetHtml) {
       this.htmlCount++;
     } else {
       clearInterval(htmlInterval);
     }
   }, incrementSpeed);

   const cssInterval = setInterval(() => {
    if (this.cssCount < targetCss) {
      this.cssCount++;
    } else {
      clearInterval(cssInterval);
    }
  }, incrementSpeed);

  const bootstrapInterval = setInterval(() => {
    if (this.bootstrapCount < targetBootstrap) {
      this.bootstrapCount++;
    } else {
      clearInterval(bootstrapInterval);
    }
  }, incrementSpeed);

  const tailwindInterval = setInterval(() => {
    if (this.tailwindCount < targetTailwind) {
      this.tailwindCount++;
    } else {
      clearInterval(tailwindInterval);
    }
  }, incrementSpeed);

  const jsInterval = setInterval(() => {
    if (this.jsCount < targetJs) {
      this.jsCount++;
    } else {
      clearInterval(jsInterval);
    }
  }, incrementSpeed);

  const angularInterval = setInterval(() => {
    if (this.angularCount < targetAngular) {
      this.angularCount++;
    } else {
      clearInterval(angularInterval);
    }
  }, incrementSpeed);

}
}
