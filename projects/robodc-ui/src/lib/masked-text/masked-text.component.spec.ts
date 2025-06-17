import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedTextComponent } from './masked-text.component';

describe('MaskedTextComponent', () => {
  let component: MaskedTextComponent;
  let fixture: ComponentFixture<MaskedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskedTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
