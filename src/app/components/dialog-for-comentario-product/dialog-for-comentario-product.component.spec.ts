import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForComentarioProductComponent } from './dialog-for-comentario-product.component';

describe('DialogForComentarioProductComponent', () => {
  let component: DialogForComentarioProductComponent;
  let fixture: ComponentFixture<DialogForComentarioProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForComentarioProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForComentarioProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
