import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRandomComponent } from './post-random.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

describe('PostRandomComponent', () => {
  let component: PostRandomComponent;
  let fixture: ComponentFixture<PostRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PostRandomComponent],
    });
    fixture = TestBed.createComponent(PostRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
