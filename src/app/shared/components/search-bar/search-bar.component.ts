import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../types/product.interface';
import { ProductComponent } from '../product/product.component';
import { AppNavigatorComponent } from '../../../core/components/app-navigator/app-navigator.component';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, ProductComponent, AppNavigatorComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchQuery: string = '';
  searchResults: Product[] = [];
  isGridView: boolean = true;

  onSearchQueryChanged(event: any): void {
    this.searchQuery = event.target.value;
    console.log('Search query:', this.searchQuery);
  }

  onSearch(): void {
    let newSearchResults: Product[] = [];
    for (let index = 0; index < this.searchQuery.length; index++) {
      let product = {
        id: index,
        name: 'Product ' + index,
        price: 100 * index,
        description: "This is description of Product " + index
      }
      newSearchResults.push(product);
    }
    this.searchResults = newSearchResults;
  }

  changeView() {
    this.isGridView = !this.isGridView
  }
}
