import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { FormUserComponent } from "./form-user.component";
import { TestUtil } from "src/app/core-test/utils/test-util";

export class FormUserComponentPage extends BasePage<FormUserComponent>{

    constructor() {
        super(FormUserComponent);
        spyOn(this.component, 'submit')
    }

    get formEl() {
        return TestUtil.formGroup(this.fixture, 'form');
    }
    get lastNameCtrl() {
        return TestUtil.formControl(this.fixture, '#lastName')
    }
    get firstNameCtrl() {
        return TestUtil.formControl(this.fixture, '#firstName')
    }
    get emailCtrl() {
        return TestUtil.formControl(this.fixture, '#email')
    }
    get nameCtrl() {
        return TestUtil.formControl(this.fixture, '#name')
    }
    get descriptionCtrl() {
        return TestUtil.formControl(this.fixture, '#description')
    }
    get emailEl(): HTMLInputElement {
        return TestUtil.nativeElement(this.fixture, '#email');
    }
    get submitEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#submit')
    }
}