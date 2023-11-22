import { FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import { IForm } from "../model/interface/form-type.interface";
import { Directive } from "@angular/core";
import { Router } from "@angular/router";


@Directive()
export abstract class BaseForm<T>{
    form!: FormGroup<IForm<T>>;
    protected path!: string
    protected formConfig!: IForm<T>
    protected fb = new FormBuilder();

    constructor(protected router: Router) {
        if (!router) { throw 'router is null'; }
    }

    ngOnInit() {
        this.createForm(this.formConfig);
    }

    createForm(
        baseFormConfig?: IForm<T>,
        validators?: ValidatorFn | ValidatorFn[] | null
    ) {
        this.form = this.fb.group(baseFormConfig as IForm<T>, {
            validators,
        });
    }

    submit() {
        if (this.form.invalid) {
            this.form.markAsDirty();
            this.form.markAllAsTouched();
            return;
        }
    }
}