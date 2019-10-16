import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVagasPage } from './info-vagas.page';

describe('InfoVagasPage', () => {
  let component: InfoVagasPage;
  let fixture: ComponentFixture<InfoVagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVagasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
