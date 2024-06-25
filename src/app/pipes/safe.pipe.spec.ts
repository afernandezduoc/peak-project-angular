import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer]
    });
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });

});
