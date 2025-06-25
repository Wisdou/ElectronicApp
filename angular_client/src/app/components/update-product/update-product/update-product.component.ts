import { Component } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext, TuiTextfield } from '@taiga-ui/core';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputNumberModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { ProductsDto } from '../../../services/products/products.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  public readonly context =
    injectContext<TuiDialogContext<FormData, ProductsDto>>();

  price: number | undefined = undefined;
  quantity: number | undefined = undefined;

  error: string = '';

  ngOnInit(): void {
    if (this.context.data) {
      (document.getElementById("name-input") as any).value = this.context.data.name;
      (document.getElementById("modal-categories-select") as any).value = this.context.data.category;
      this.quantity = this.context.data.quantity;
      this.price = this.context.data.price;
      (document.getElementById("description-input") as any).value = this.context.data.description;
    }
  }

  onSubmit() {
    this.error = '';
    try {
      const name = (document.getElementById("name-input") as any).value;
      if (_.isEmpty(name)) {
        this.error = 'У товара должно быть название';
        return;
      }

      const category = (document.getElementById("modal-categories-select") as any).value;
      if (_.isEmpty(category)) {
        this.error = 'У товара должна быть категория';
        return;
      }

      if (_.isNaN(this.price)) {
        this.error = 'У товара должна быть цена';
        return;
      }

      if (_.isNaN(this.quantity)) {
        this.error = 'У товара должно быть число';
        return;
      }

      const jsonPart = JSON.stringify({
        name: name,
        description: (document.getElementById("description-input") as any).value,
        category: category,
        price: this.price,
        quantity: this.quantity,
      });

      const imagePart = (document.getElementById("image-input") as any).files[0];

      const formData = new FormData();
      formData.append("Image", imagePart);
      formData.append("JsonPart", jsonPart);

      this.context.completeWith(formData);
    }
    catch (e) {
      console.error(e);
    }
  }
}
