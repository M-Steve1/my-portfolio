import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { IntroComponent } from "./components/intro/intro.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectComponent } from "./components/project/project.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ModeSwitchComponent } from "./components/mode-switch/mode-switch.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,
    ModeSwitchComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'stephen-portfolio';
  mode: string = ""

  changeMode(value: string): void {
    this.mode = value;
  }
}
