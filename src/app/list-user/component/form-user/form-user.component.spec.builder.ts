import { BaseFormOprCUBuilder } from "src/app/core-test/base-unit-test/base-form-opr-c-u-builder";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";
import { formUserConst } from "src/app/core/model/interface/form-user.spec.const";
import { IUser } from "src/app/core/model/interface/user.interface";
import { FormUserComponent } from "./form-user.component";


export class FormUserFormBuilder extends BaseFormOprCUBuilder<FormUserComponent>{

    constructor(private dataService: AbstractDataService<IUser>) {
        super()
    }

    override build(): FormUserComponent {
        const sut = new FormUserComponent(this.router, this.route, this.dataService);
        this.afterBuild(sut);

        return sut;
    }
}