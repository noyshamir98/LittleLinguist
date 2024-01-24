import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footercomponent } from './footer.component';

describe('FooterComponent', () => {
  let component: Footercomponent;
  let fixture: ComponentFixture<Footercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footercomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Footercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
