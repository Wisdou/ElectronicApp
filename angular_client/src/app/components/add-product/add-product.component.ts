import { Component } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext, TuiTextfield } from '@taiga-ui/core';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputNumberModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  public readonly context =
    injectContext<TuiDialogContext<FormData, undefined>>();

  price: number = 0;
  quantity: number = 0;

  error: string = '';

  onSubmit() {
    this.error = '';
    try {
      const name = (document.getElementById("name-input") as any).value;
      if (_.isEmpty(name)){
        this.error = 'У товара должно быть название';
        return;
      }

      const category = (document.getElementById("modal-categories-select") as any).value;
      if (_.isEmpty(category)) {
        this.error = 'У товара должна быть категория';
        return;
      }

      const price = parseFloat((document.getElementById("price-input") as any).value);
      if (_.isNaN(price) || this.price <= 0) {
        this.error = 'Цена товара должна быть больше 0';
        return;
      }

      const quantity = parseInt((document.getElementById("quantity-input") as any).value);
      if (_.isNaN(quantity) || this.quantity <= 0) {
        this.error = 'Число товаров должно быть больше 0';
        return;
      }

      const jsonPart = JSON.stringify({
        name: name,
        description: (document.getElementById("description-input") as any).value,
        category: category,
        price: price,
        quantity: quantity,
      });

      const imagePart = (document.getElementById("image-input") as any).files[0];
      if (_.isNil(imagePart)){
        this.error = 'У товара должно быть изображение';
        return;
      }

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
