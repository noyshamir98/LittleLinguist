import { TestBed } from '@angular/core/testing';
import { appComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [appComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'LittleLinguist' title`, () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LittleLinguist');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(appComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, LittleLinguist');
  });
});
