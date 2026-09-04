import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjetivoProfissional } from './objetivo-profissional';

describe('ObjetivoProfissional', () => {
  let component: ObjetivoProfissional;
  let fixture: ComponentFixture<ObjetivoProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivoProfissional],
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivoProfissional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
