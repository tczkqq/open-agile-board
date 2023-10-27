import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBoardComponent } from './add-edit-board.component';

describe('AddEditBoardComponent', () => {
  let component: AddEditBoardComponent;
  let fixture: ComponentFixture<AddEditBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditBoardComponent],
    });
    fixture = TestBed.createComponent(AddEditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
