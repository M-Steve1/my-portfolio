import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [
    CommonModule
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() mode: string = "";
  projects: {
    name: string,
    techStacks: string[],
    description: string,
    image: string,
    url: string,
    gitHub: string
  }[] = [
    {
      name: "e-commerce app",
      techStacks: ["Angular", "Node.js", "PostgresSQL"],
      description: "An E-commerce Web Application.",
      image: "/assets/e-commerce-app.png",
      url: "https://stephenstore.vercel.app/",
      gitHub: "https://github.com/M-Steve1/stephen-store-frontend"
    },
    {
      name: "Hotel Reservation",
      techStacks: ["React", "Java", "MongoDB"],
      description: "A Hotel Reservation Application.",
      image: "/assets/hotel-reservation.png",
      url: "https://stephenhotel.vercel.app/",
      gitHub: "https://github.com/M-Steve1/hotel-reservation-UI"
    },
    {
      name: "Movie Review App",
      techStacks: ["React", "Java", "MongoDB"],
      description: "A Web App where you can watch and review movies.",
      image: "/assets/movie-review-app.png",
      url: "https://stephenmovieapp.vercel.app/",
      gitHub: "https://github.com/M-Steve1/Movie-Review-App-UI"
    },
    {
      name: "Home Security App",
      techStacks: ["Java"],
      description: "A home security application. This application tracks the status of sensors, monitors camera input, and changes the alarm state of the system based on inputs. Users can arm the system for when they’re home or away as well as disarm the system.",
      image: "/assets/home-security.png",
      url: "https://github.com/M-Steve1/Home-security-app",
      gitHub: "https://github.com/M-Steve1/Home-security-app"
    },
  ]
}
