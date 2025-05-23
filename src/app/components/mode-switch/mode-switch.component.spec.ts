import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSwitchComponent } from './mode-switch.component';

describe('ModeSwitchComponent', () => {
  let component: ModeSwitchComponent;
  let fixture: ComponentFixture<ModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
