import { NgModule } from "@angular/core";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "src/app/pipes/filter-bikes.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [IfNullOrEmpty, FilterBikesPipe],
  imports: [FormsModule, ReactiveFormsModule],

  exports: [IfNullOrEmpty, FilterBikesPipe,  FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
