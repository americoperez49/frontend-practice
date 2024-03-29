import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubCardComponent } from './email-sub-card.component';

describe('EmailSubCardComponent', () => {
  let component: EmailSubCardComponent;
  let fixture: ComponentFixture<EmailSubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSubCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
