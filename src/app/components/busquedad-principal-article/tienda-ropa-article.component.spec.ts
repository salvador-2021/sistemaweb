import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaRopaArticleComponent } from './tienda-ropa-article.component';

describe('TiendaRopaArticleComponent', () => {
  let component: TiendaRopaArticleComponent;
  let fixture: ComponentFixture<TiendaRopaArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaRopaArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaRopaArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
