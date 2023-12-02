import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadComponent } from './down-load.component';

describe('DownLoadComponent', () => {
  let component: DownLoadComponent;
  let fixture: ComponentFixture<DownLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownLoadComponent]
    });
    fixture = TestBed.createComponent(DownLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
