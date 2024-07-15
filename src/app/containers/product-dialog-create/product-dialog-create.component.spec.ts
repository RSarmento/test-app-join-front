import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogCreateComponent } from './product-dialog-create.component';

describe('ProductDialogCreateComponent', () => {
  let component: ProductDialogCreateComponent;
  let fixture: ComponentFixture<ProductDialogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDialogCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
