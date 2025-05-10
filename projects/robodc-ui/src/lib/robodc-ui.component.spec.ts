import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobodcUiComponent } from './robodc-ui.component';

describe('RobodcUiComponent', () => {
  let component: RobodcUiComponent;
  let fixture: ComponentFixture<RobodcUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobodcUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobodcUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
