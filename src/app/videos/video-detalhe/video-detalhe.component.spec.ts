import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetalheComponent } from './video-detalhe.component';

describe('VideoDetalheComponent', () => {
  let component: VideoDetalheComponent;
  let fixture: ComponentFixture<VideoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
