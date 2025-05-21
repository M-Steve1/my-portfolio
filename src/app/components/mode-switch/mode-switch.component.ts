import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-mode-switch',
  imports: [
    CommonModule
  ],
  templateUrl: './mode-switch.component.html',
  styleUrl: './mode-switch.component.css'
})
export class ModeSwitchComponent implements OnInit{
  mode: string = "light";
  @Output() emitMode: EventEmitter<string> = new EventEmitter<string>()

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.mode = localStorage.getItem("stephen_app_mode") || "light"
      this.emitMode.emit(this.mode);
    }
  }

  changeMode(mode: string): void {
    this.mode = mode;
    this.emitMode.emit(this.mode)
    localStorage.setItem("stephen_app_mode", this.mode);
  }
}
