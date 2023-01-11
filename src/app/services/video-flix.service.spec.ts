import { TestBed } from '@angular/core/testing';

import { VideoFlixService } from './video-flix.service';

describe('VideoFlixService', () => {
  let service: VideoFlixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFlixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
