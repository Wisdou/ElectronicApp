import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import _ from 'lodash';
import { HttpCustomService } from '../../services/http/http-service.service';
import { lastValueFrom, Observable, of } from 'rxjs';
import { ProductsDto, ProductsService } from '../../services/products/products.service';
import { tuiDialog, TuiDialogService } from '@taiga-ui/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { TuiInputNumberModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TUI_CONFIRM, TuiConfirmData } from '@taiga-ui/kit';
import { UpdateProductComponent } from '../update-product/update-product/update-product.component';
import { GenerateReportService } from '../../services/generate-report/generate-report.service';
import { ViewProductComponent } from '../view-product/view-product.component';
import { AddToBasketComponent } from '../add-to-basket/add-to-basket.component';
import { BasketService } from '../../services/basket/basket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, AsyncPipe, TuiInputNumberModule, TuiTextfieldControllerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ElectronicApp';
  isLoggedIn: boolean = false;
  roleId: number = -1;
  userEmail: string = '';
  isAddModalOpen: boolean = false;
  isUpdateModalOpen: boolean = false;
  isAddToBasketModalOpen: boolean = false;
  isBuyProductModal: boolean = false;
  products$: Observable<ProductsDto[]> = of([]);

  private readonly dialogs = inject(TuiDialogService);

  private readonly addDialog = tuiDialog(AddProductComponent, {
    dismissible: true,
    label: '',
    size: 'auto',
  });

  private readonly viewDialog = tuiDialog(ViewProductComponent, {
    dismissible: true,
    label: '',
    size: 'auto',
  });

  private readonly updateDialog = tuiDialog(UpdateProductComponent, {
    dismissible: true,
    label: '',
    size: 'auto',
  });

  private readonly addToBasketDialog = tuiDialog(AddToBasketComponent, {
    dismissible: true,
    label: '',
    size: 'auto',
  });

  error: string = '';

  isAdmin: boolean = false;

  filterText: string = '';
  selectedCategory: string = '';

  constructor(private authService: AuthService,
    private httpService: HttpCustomService,
    private productService: ProductsService,
    private reportService: GenerateReportService,
    private basketService: BasketService
  ) {
    const user = this.authService.getUserInfo();
    if (!_.isNil(user)) {
      this.isLoggedIn = true;
      this.isAdmin = user.role === 0;
      this.userEmail = user.userLogin ?? '';
      this.roleId = user.role ?? -1;
    }
    else {
      this.isLoggedIn = false;
    }
    this.products$ = this.productService.getProducts();
  }

  viewInfo(product: ProductsDto){
    this.viewDialog(product).subscribe(x => {});
  }

  addToBasket(product: ProductsDto, event: any){
    event.stopImmediatePropagation();
    this.addToBasketDialog(product.quantity).subscribe(x => {
      this.basketService.addToBasket(product.id, x).subscribe(y => {
        alert('Товар добавлен в корзину');
      }, err => {
        alert('Ошибка: ' + err);
      })
    });
  }

  createSellReport(){
    this.reportService.getReport(0).subscribe(x => {
      var downloadURL = window.URL.createObjectURL(x);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "ElectronicsStore.WebApi.ШаблонОтчетаПоПродажам.xlsx";
      link.click();
    });
  }

  createRemainingReport(){
    this.reportService.getReport(1).subscribe(x => {
      var downloadURL = window.URL.createObjectURL(x);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "ElectronicsStore.WebApi.ШаблонОтчетаПоОстаткам.xlsx";
      link.click();
    });
  }

  onCategoryChange($event: any) {
    this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
  }

  importProducts(){
    const elem = document.getElementById("excel-input") as any;
    elem.addEventListener("change", async (e: any) => {
      e.preventDefault();

      if (elem.files.length > 0) {
        const formData = new FormData();
        formData.append("sheet", elem.files[0]);
        elem.value = '';
        this.productService.importFromExcel(formData).subscribe(x => {
          alert('Импорт успешен');
          
          this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
        }, err => {
          alert("Ошибка при импорте: " + err);
        });
      }
    });
  }

  onFilterTextChange($event: any) {
    this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
  }

  onEditProduct(product: ProductsDto, event: any) {
    event.stopImmediatePropagation();
    this.updateDialog(product).subscribe(x => {
      this.productService.updateProduct(product.id, x).subscribe(x => {
        alert('Товар обновлен');
        this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
      },
        err => {
          alert(this.error);
        });
    });
  }

  onDeleteProduct(id: string, event: any) {
    event.stopImmediatePropagation();
    const data: TuiConfirmData = {
      yes: 'Ок',
      no: 'Отмена'
    };
    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Вы уверены что хотите удалить товар?',
        size: 's',
        data,
      })
      .subscribe((x) => {
        if (x) {
          this.productService.deleteProduct(id).subscribe(() => {
            alert('Товар удален');
            this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
          })
        }
      });
  }

  onOpenModalWindow(val: string) {
    if (val === 'add-product-modal') {
      this.isAddModalOpen = true;
    }
    else if (val === 'update-product-modal') {
      this.isUpdateModalOpen = true;
    }
    else if (val === 'add-to-basket-modal') {
      this.isAddToBasketModalOpen = true;
    }
    else if (val === 'buy-product-modal') {
      this.isBuyProductModal = true;
    }
  }

  onCloseModalWindow(val: string) {
    if (val === 'add-product-modal') {
      this.isAddModalOpen = false;
    }
    else if (val === 'update-product-modal') {
      this.isUpdateModalOpen = false;
    }
    else if (val === 'add-to-basket-modal') {
      this.isAddToBasketModalOpen = false;
    }
    else if (val === 'buy-product-modal') {
      this.isBuyProductModal = false;
    }
  }

  logOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userEmail = '';
  }

  onAddProduct() {
    this.addDialog(undefined).subscribe(formData => {
      const request = this.productService.addProduct(formData).subscribe(
        x => {
          alert('Товар добавлен');
          this.products$ = this.productService.getProducts(this.selectedCategory, this.filterText);
        },
        err => {
          alert(this.error);
        }
      )
    });
  }
}
