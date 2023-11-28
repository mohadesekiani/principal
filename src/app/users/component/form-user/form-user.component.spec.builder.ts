import { BaseBuilder } from "src/app/core-test/base-unit-test/base-builder";
import { AbstractDataService } from "src/app/core/services/abstract-data-service";
import { FormUserComponent } from "./form-user.component";


export class FormUserFormBuilder extends BaseBuilder<FormUserComponent>{

    constructor(private dataService: AbstractDataService) {
        super()
    }

    override build(): FormUserComponent {
        const sut = new FormUserComponent(this.router, this.route, this.dataService);
        this.afterBuild(sut);

        return sut;
    }
}