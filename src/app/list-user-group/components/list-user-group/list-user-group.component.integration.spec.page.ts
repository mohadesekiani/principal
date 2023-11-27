import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { ListUserGroupComponent } from "./list-user-group.component";
import { TestUtil } from "src/app/core-test/utils/test-util";

export class ListUserGroupComponentPage extends BasePage<ListUserGroupComponent>{
    constructor(additionalConfig?: any) {
        super(ListUserGroupComponent, additionalConfig);
        spyOn(this.component, 'addedItem');
        spyOn(this.component, 'editItem');
        spyOn(this.component, 'deletedItem');
    }

    get addEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#add')
    }
    get deleteEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#delete')
    }
    get editEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#edit')
    }
    get tdDescriptionWithId() {
        return TestUtil.debugElement(this.fixture, 'td[item-id="userGroup_26_t"]').nativeElement
    }
}