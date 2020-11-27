import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpListComponent } from "..//emp-list/emp-list.component";
import { EmployeeDetailsComponent } from "..//employee-details/employee-details.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EmpListComponent,
      },
      {
        path: "details",
        component: EmployeeDetailsComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [EmpListComponent, EmployeeDetailsComponent],
})
export class EmployeeModule {}
