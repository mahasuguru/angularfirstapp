import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  EventEmitter,
  Output,
} from "@angular/core";
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from "src/app/services/product.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  @Input() product: IProduct;
  @Input() canShowImage: boolean;
  @Output() onProductDeleted: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  onStatusChanged: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  private counter: number = 0;

  ngOnInit(): void {
  //  console.log("Inside ProductComponent - ngOnInit()");
  }
  ngOnChanges(changes: SimpleChanges): void {
   // console.log("Inside ngOnChanges of Product Component", changes);
  }

  getPriceStyles(product: IProduct) {
    if (product.price == 200) {
      return {
        color: "red",
        "font-weight": "bold",
      };
    } else {
      return {};
    }
  }
  changeStatus(id: number, status: string) {
    console.log("Inside Change Status", status);
    this.productService.changeStatus(id, status).subscribe(
      (data: IProduct) => {
        console.log("Status Changed", data);
        this.onStatusChanged.emit(data);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
  deleteProduct() {
   // console.log("Deleting product ", this.productToBeRendered.productName);

    //HTTP call to the server. Or your complex logic.
    this.onProductDeleted.emit(this.product.productName);
  }
}
