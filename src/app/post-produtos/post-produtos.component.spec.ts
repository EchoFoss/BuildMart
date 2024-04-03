import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdutosComponent } from './post-produtos.component';

describe('PostProdutosComponent', () => {
  let component: PostProdutosComponent;
  let fixture: ComponentFixture<PostProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
