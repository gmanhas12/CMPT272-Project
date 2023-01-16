import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePigComponent } from './delete-pig.component';

describe('DeletePigComponent', () => {
  let component: DeletePigComponent;
  let fixture: ComponentFixture<DeletePigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
