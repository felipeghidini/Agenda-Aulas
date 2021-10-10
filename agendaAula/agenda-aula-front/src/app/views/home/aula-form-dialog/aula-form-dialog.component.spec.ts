import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaFormDialogComponent } from './aula-form-dialog.component';

describe('AulaFormDialogComponent', () => {
  let component: AulaFormDialogComponent;
  let fixture: ComponentFixture<AulaFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
