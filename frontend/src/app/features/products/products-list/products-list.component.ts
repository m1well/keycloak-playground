import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private service: ProductsService) {

  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(response => {
      this.products = response;
    })
  }

}
