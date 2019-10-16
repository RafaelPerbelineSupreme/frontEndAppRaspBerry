import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoVagaPage } from './veiculo-vaga.page';

describe('VeiculoVagaPage', () => {
  let component: VeiculoVagaPage;
  let fixture: ComponentFixture<VeiculoVagaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoVagaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoVagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
