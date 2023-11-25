import { BaseFormOprCUBuilder } from "src/app/core-test/base-unit-test/base-form-opr-c-u-builder";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";
import { formUserConst } from "src/app/core/model/interface/form-user.spec.const";
import { IUser } from "src/app/core/model/interface/user.interface";
import { FormUserComponent } from "./form-user.component";



const sutConst = formUserConst;
export class FormUserFormBuilder extends BaseFormOprCUBuilder<FormUserComponent>{
    override get some_data(): Partial<IUser> {
        return sutConst.SomeValidFormUser;
    }
    override get expected_default_form_value(): Partial<IUser> {
        return sutConst.defaultFormUser;
    }

    constructor(private dataService: AbstractDataService<IUser>) {
        super()
    }

    override build(): FormUserComponent {
        const sut = new FormUserComponent(this.router, this.route, this.dataService);
        this.afterBuild(sut);

        return sut;
    }
}