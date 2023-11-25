import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { FormUserGroupComponent } from "./form-user-group.component";
import { TestUtil } from "src/app/core-test/utils/test-util";

export class FormUserGroupComponentPage extends BasePage<FormUserGroupComponent>{

    constructor(additionalConfig?: any) {
        super(FormUserGroupComponent,additionalConfig);
        spyOn(this.component, 'submit')
    }

    get formEl() {
        return TestUtil.formGroup(this.fixture, 'form');
    }
    get nameCtrl() {
        return TestUtil.formControl(this.fixture, '#name');
    }
    get descriptionCtrl() {
        return TestUtil.formControl(this.fixture, '#description')
    }
    get submitEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#submit')
    }

}