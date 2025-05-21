import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [
    CommonModule
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() mode: string = "";
  frontend: string[] = [
    "HTML",
    "CSS", 
    "angular",
    "React",
    "Tailwind",
  ]
  backend: string[] = [
    "Node.js", 
    "Express.js", 
    "Java",
    "Python"
  ]
  databases: string[] = [
    "PostgreSQL", 
    "MongoDB", 
    "MySQL"
  ]
  tools: string[] = [
    "Git/Github",
    "Vercel",
    "Render",
    "Postman", 
    "VS Code",
    "Supabase"
  ]
}
