import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.interface';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() isGridView: boolean = true;
  @Input() product: Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
  };
}
