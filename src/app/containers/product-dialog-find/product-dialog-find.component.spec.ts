import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogFindComponent } from './product-dialog-find.component';

describe('ProductDialogFindComponent', () => {
  let component: ProductDialogFindComponent;
  let fixture: ComponentFixture<ProductDialogFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDialogFindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDialogFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
