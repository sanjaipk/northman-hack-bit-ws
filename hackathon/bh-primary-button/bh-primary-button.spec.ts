import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhPrimaryButtonComponent } from './bh-primary-button.component';
import { BhPrimaryButtonModule } from './bh-primary-button.module';

describe('BhPrimaryButtonComponent', () => {
  let component: BhPrimaryButtonComponent;
  let fixture: ComponentFixture<BhPrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BhPrimaryButtonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
