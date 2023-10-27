import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTagsComponent } from './browse-tags.component';

describe('BrowseTagsComponent', () => {
  let component: BrowseTagsComponent;
  let fixture: ComponentFixture<BrowseTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowseTagsComponent],
    });
    fixture = TestBed.createComponent(BrowseTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
