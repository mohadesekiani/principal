import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormOprCU } from 'src/app/core/base-classes/base-form-opr-c-u';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { IForm } from 'src/app/core/model/interface/form-type.interface';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';
import { ItemTypeEnum } from 'src/app/core/model/enum/itemType';

@Component({
  selector: 'app-form-user-group',
  templateUrl: './form-user-group.component.html',
  styleUrls: ['./form-user-group.component.sass'],
})
export class FormUserGroupComponent extends BaseFormOprCU<IUserGroup> {
  protected override resultUrl = '/user-group';
  override formConfig: IForm<IUserGroup> = {
    id: [null],
    name: [null, Validators.required],
    description: [null, Validators.required],
    type:[ItemTypeEnum.UserGroup]
  };

  constructor(
    router: Router,
    route: ActivatedRoute,
    dataService: AbstractDataService
  ) {
    super(router, route, dataService);
  }

  override addItem(): void {
    this.form.patchValue({ id: this.dataService.setId() });
    super.addItem();
  }
}
