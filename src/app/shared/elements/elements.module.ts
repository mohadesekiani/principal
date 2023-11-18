import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { TableComponent } from "./component/table/table.component";
import { NgModule } from "@angular/core";

const COMPONENTS = [
    TableComponent
];

@NgModule({
    declarations: [
        COMPONENTS,
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
    exports: [COMPONENTS],
})
export class ElementsModule { }
