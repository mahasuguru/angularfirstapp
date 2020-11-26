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
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService,  private utilityService: UtilityService) {}
  @Input() product: IProduct;
  @Input() canShowImage: boolean;
  @Output() onProductDeleted: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  onStatusChanged: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  private counter: number = 0;

  ngOnInit(): void {
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
        this.utilityService.showError(
          `${data.productName} is ${
            status == "deactivate" ? "de activated" : "re activated"
          }`
        );
        this.onStatusChanged.emit(data);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (data: IProduct) => {
        console.log("Deleted", data);
        this.utilityService.showError(
          `${data.productName} is deleted successfully`
        );
        this.onProductDeleted.emit(data.productName);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
}
