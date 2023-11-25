import { ActivatedRoute, Router } from "@angular/router";
import { BaseFormOprCU } from "src/app/core/base-classes/base-form-opr-c-u";

export abstract class BaseFormOprCUBuilder<Q extends BaseFormOprCU<any>> {
  router: jasmine.SpyObj<Router>;
  route: jasmine.SpyObj<ActivatedRoute>;
  // dataService:

  formValue!: Partial<Q['entity']>;
  abstract get some_data(): Partial<Q['entity']>;
  abstract get expected_default_form_value(): Partial<Q['entity']>;

  constructor() {
    this.router = jasmine.createSpyObj<Router>('Router', ['navigate']) as any;
    this.route = { params: jasmine.createSpyObj('params', ['subscribe']) } as jasmine.SpyObj<ActivatedRoute>;
  }

  with_some_valid_data_for_form(value: Partial<Q['entity']>): this {
    this.formValue = value;
    return this;
  }

  with_some_invalid_data_for_form(value: Partial<Q['entity']>): this {
    this.formValue = value;
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
