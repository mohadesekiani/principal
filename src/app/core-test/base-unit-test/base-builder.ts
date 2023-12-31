import { ActivatedRoute, Router } from "@angular/router";
import { BaseFormOprCU } from "src/app/core/base-classes/base-form-opr-c-u";

export abstract class BaseBuilder<Q extends BaseFormOprCU<any>> {
  router: jasmine.SpyObj<Router>;
  route: jasmine.SpyObj<ActivatedRoute>;

  formValue!: Partial<Q['entity']>;

  constructor() {
    this.router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    this.route = { params: jasmine.createSpyObj('params', ['subscribe']) } as jasmine.SpyObj<ActivatedRoute>;
  }

  with_data_for_form(value: Partial<Q['entity']>): this {
    this.formValue = value;
    return this;
  }

  with_some_valid_data_for_form(valueForm: Partial<Q['entity']>): this {
    this.with_data_for_form(valueForm)
    return this;
  }

  with_some_invalid_data_for_form(valueForm: Partial<Q['entity']>): this {
    this.with_data_for_form(valueForm)
    return this;
  }

  abstract build(): Q;

  afterBuild(sut: Q) {
    sut.ngOnInit();

    if (this.formValue) {
      sut.form.patchValue(this.formValue);
    }
  }
}
