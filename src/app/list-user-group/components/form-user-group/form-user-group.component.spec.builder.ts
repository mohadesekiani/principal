import { BaseBuilder } from "src/app/core-test/base-unit-test/base-builder";
import { AbstractDataService } from "src/app/core/services/abstract-data-service";
import { IUserGroup } from "src/app/core/model/interface/user-group.interface";
import { FormUserGroupComponent } from "./form-user-group.component";

export class FormUserGroupFormBuilder extends BaseBuilder<FormUserGroupComponent>{
    constructor(private dataService:AbstractDataService<IUserGroup>){
        super()
    }

    override build(): FormUserGroupComponent{
        const sut = new FormUserGroupComponent(this.router, this.route, this.dataService)
        this.afterBuild(sut);

        return sut;
    }
}