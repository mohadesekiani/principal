import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material/material.module";
import { NgModule } from "@angular/core";
import { ListItemComponent } from "../../list-item/list-item.component";

const COMPONENTS = [
    ListItemComponent
];

@NgModule({
    declarations: [
        COMPONENTS,
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
    exports: [COMPONENTS],
})
export class ElementsModule { }
