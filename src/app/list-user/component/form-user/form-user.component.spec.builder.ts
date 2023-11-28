import { AbstractDataService } from "src/app/core/services/abstract-data-service";
import { IUser } from "src/app/core/model/interface/user.interface";
import { FormUserComponent } from "./form-user.component";
import { BaseBuilder } from "src/app/core-test/base-unit-test/base-builder";


export class FormUserFormBuilder extends BaseBuilder<FormUserComponent>{

    constructor(private dataService: AbstractDataService<IUser>) {
        super()
    }

    override build(): FormUserComponent {
        const sut = new FormUserComponent(this.router, this.route, this.dataService);
        this.afterBuild(sut);

        return sut;
    }
}