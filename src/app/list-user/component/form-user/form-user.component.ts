import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormOprCU } from 'src/app/core/base-classes/base-form-opr-c-u';
import { IForm } from 'src/app/core/model/interface/form-type.interface';
import { IItem } from 'src/app/core/model/interface/user.interface';
import { AbstractDataService } from 'src/app/core/services/abstract-data-service';
import { UserDataService } from '../../../core/services/user-data.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.sass'],
  providers: [
    {
      provide: AbstractDataService,
      useExisting: UserDataService,
    },
  ],
})
export class FormUserComponent extends BaseFormOprCU<IItem> {
  protected override resultUrl = '/user';
  override formConfig: IForm<IItem> = {
    id: [null],
    lastName: [null, Validators.required],
    firstName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    name: [null, Validators.required],
    description: [null, Validators.required],
  };

  constructor(
    router: Router,
    route: ActivatedRoute,
    dataService: AbstractDataService
  ) {
    super(router, route, dataService);
  }

  override addedItem(): void {
    this.form.patchValue({ id: this.dataService.setId() });
    super.addedItem();
  }
}
