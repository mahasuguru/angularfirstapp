import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../interfaces/product.interface";

@Pipe({
  name: "filterPile",
  pure: true,
})
export class FilterBikesPipe implements PipeTransform {
  private counter: number = 0;
  transform(bikes: IProduct[], searchText: string): any {
    this.counter++;
    console.log("Inside PIPE", this.counter);
    if (searchText) {
      return bikes.filter((x) =>
        x.productName.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return bikes;
    }
  }
}
