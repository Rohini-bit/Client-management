import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmeetingManagementComponent } from './clientmeeting-management.component';

describe('ClientmeetingManagementComponent', () => {
  let component: ClientmeetingManagementComponent;
  let fixture: ComponentFixture<ClientmeetingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmeetingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmeetingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
