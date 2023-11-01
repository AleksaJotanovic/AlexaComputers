import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfInvoiceComponent } from './pdf-invoice.component';

describe('PdfInvoiceComponent', () => {
  let component: PdfInvoiceComponent;
  let fixture: ComponentFixture<PdfInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfInvoiceComponent]
    });
    fixture = TestBed.createComponent(PdfInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
