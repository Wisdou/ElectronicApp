import { Component } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext, TuiTextfield } from '@taiga-ui/core';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputNumberModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { ProductsDto } from '../../services/products/products.service';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {
  public readonly context =
    injectContext<TuiDialogContext<void, ProductsDto>>();

  price: number | undefined = undefined;
  quantity: number | undefined = undefined;
  imageUrl!: string;

  ngOnInit(): void {
    if (this.context.data) {
      (document.getElementById("name-input") as any).value = this.context.data.name;
      (document.getElementById("modal-categories-select") as any).value = this.context.data.category;
      this.imageUrl = this.context.data.imageUrl;
      this.quantity = this.context.data.quantity;
      this.price = this.context.data.price;
      (document.getElementById("description-input") as any).value = this.context.data.description;
    }
  }
}
