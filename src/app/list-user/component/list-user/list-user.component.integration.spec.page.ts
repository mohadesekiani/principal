import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { TestUtil } from "src/app/core-test/utils/test-util";
import { ListUserComponent } from "./list-user.component";

export class ListUserComponentPage extends BasePage<ListUserComponent>{

    constructor(additionalConfig?: any) {
        super(ListUserComponent, additionalConfig);
        // spyOn(this.component, 'addedItem');
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
        return TestUtil.debugElement(this.fixture, 'td[item-id="315768d5"]').nativeElement
    }


}