import { BaseFormOprCUBuilder } from "src/app/core-test/base-unit-test/base-form-opr-c-u-builder";
import { FormUserGroupComponent } from "./form-user-group.component";
import { AbstractDataService } from "src/app/core/base-services/abstract-data-service";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";

export class FormUserGroupFormBuilder extends BaseFormOprCUBuilder<FormUserGroupComponent>{
    constructor(private dataService:AbstractDataService<IUserGroup>){
        super()
    }

    override build(): FormUserGroupComponent{
        const sut = new FormUserGroupComponent(this.router, this.route, this.dataService)
        this.afterBuild(sut);

        return sut;
    }
}