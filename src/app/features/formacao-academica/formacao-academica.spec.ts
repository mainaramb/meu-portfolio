import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormacaoAcademica } from './formacao-academica';

describe('FormacaoAcademica', () => {
  let component: FormacaoAcademica;
  let fixture: ComponentFixture<FormacaoAcademica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacaoAcademica],
    }).compileComponents();

    fixture = TestBed.createComponent(FormacaoAcademica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
