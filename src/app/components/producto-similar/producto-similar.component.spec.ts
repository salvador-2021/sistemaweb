import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSimilarComponent } from './producto-similar.component';

describe('ProductoSimilarComponent', () => {
  let component: ProductoSimilarComponent;
  let fixture: ComponentFixture<ProductoSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoSimilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
