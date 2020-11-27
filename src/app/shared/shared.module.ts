import { NgModule } from "@angular/core";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "src/app/pipes/filter-bikes.pipe";

@NgModule({
  declarations: [IfNullOrEmpty, FilterBikesPipe],
  exports: [IfNullOrEmpty, FilterBikesPipe],
})
export class SharedModule {}
