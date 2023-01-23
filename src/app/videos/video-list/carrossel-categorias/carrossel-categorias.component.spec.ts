import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselCategoriasComponent } from './carrossel-categorias.component';

describe('CarrosselCategoriasComponent', () => {
  let component: CarrosselCategoriasComponent;
  let fixture: ComponentFixture<CarrosselCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosselCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
