import { Component } from '@angular/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext, TuiTextfield } from '@taiga-ui/core';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputNumberModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-add-to-basket',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
  templateUrl: './add-to-basket.component.html',
  styleUrl: './add-to-basket.component.scss'
})
export class AddToBasketComponent {
  public readonly context =
    injectContext<TuiDialogContext<number, number>>();

  min: number = 1;
  max: number = 1;

  quantity: number = 0;

  ngOnInit(): void {
    if (this.context.data) {
      this.max = this.context.data;
    }
  }

  onSubmit() {
    this.context.completeWith(this.quantity);
  }
}
