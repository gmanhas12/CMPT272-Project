import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPigFormComponent } from './edit-pig-form.component';

describe('EditPigFormComponent', () => {
  let component: EditPigFormComponent;
  let fixture: ComponentFixture<EditPigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPigFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
