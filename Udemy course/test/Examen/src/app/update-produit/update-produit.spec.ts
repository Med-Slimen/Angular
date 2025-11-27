import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduit } from './update-produit';

describe('UpdateProduit', () => {
  let component: UpdateProduit;
  let fixture: ComponentFixture<UpdateProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
