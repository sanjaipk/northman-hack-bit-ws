import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhSecondaryButtonComponent } from './bh-secondary-button.component';
import { BhSecondaryButtonModule } from './bh-secondary-button.module';

describe('BhSecondaryButtonComponent', () => {
  let component: BhSecondaryButtonComponent;
  let fixture: ComponentFixture<BhSecondaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BhSecondaryButtonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhSecondaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
