import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private service: ProductsService) {

  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.products = response;
    })
  }

  change() {
    console.log('Produkt ändern noch implemenieren')
  }
}
