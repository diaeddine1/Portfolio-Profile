import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoveredImageComponent } from './hovered-image.component';

describe('HoveredImageComponent', () => {
  let component: HoveredImageComponent;
  let fixture: ComponentFixture<HoveredImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoveredImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoveredImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
