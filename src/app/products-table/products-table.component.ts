import { Products } from './../models/products';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'products-table-content',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public products: Products[] = [];
  
  /**
   * init products array with group of ready records
   */
  public allProducts(): void {
    for (let index = 1; index <= 50; index++) {
      this.products.push({
        id: index,
        name: `product ${index}`,
        price: index + 30,
        stock: index
      })
    }
  }

  ngOnInit(): void {
    this.allProducts();

  }

}
