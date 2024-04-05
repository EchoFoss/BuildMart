import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByIdComponent } from './get-product-by-id.component';

describe('GetProductByIdComponent', () => {
  let component: GetProductByIdComponent;
  let fixture: ComponentFixture<GetProductByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProductByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
