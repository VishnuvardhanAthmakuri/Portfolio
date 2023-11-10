import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  experienceCount: number = 0;
  projectsCount: number = 0;
  awardsCount: number = 0;

  constructor() { }

  ngOnInit() {
    this.startCounters();
  }

  startCounters() {
    // Define target values for your counters
    const targetExperience = 12;
    const targetProjects = 45;
    const targetAwards = 20;

    // Define the increment speed (milliseconds per increment)
    const incrementSpeed = 100; // Adjust as needed

    // Increment the counters over time
    const experienceInterval = setInterval(() => {
      if (this.experienceCount < targetExperience) {
        this.experienceCount++;
      } else {
        clearInterval(experienceInterval);
      }
    }, incrementSpeed);

    const projectsInterval = setInterval(() => {
      if (this.projectsCount < targetProjects) {
        this.projectsCount += 10; // Increment by 10 at a time
      } else {
        clearInterval(projectsInterval);
      }
    }, incrementSpeed);

    const awardsInterval = setInterval(() => {
      if (this.awardsCount < targetAwards) {
        this.awardsCount++;
      } else {
        clearInterval(awardsInterval);
      }
    }, incrementSpeed);
  }
}