import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { tuiNumberFormatProvider, TuiRoot } from '@taiga-ui/core';
import { tuiInputNumberOptionsProvider } from '@taiga-ui/kit';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, TuiRoot],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  providers: [
    tuiNumberFormatProvider({
      precision: 0,
    }),
    tuiInputNumberOptionsProvider({
      step: 1,
    }),
  ],
})
export class IndexPageComponent {}
