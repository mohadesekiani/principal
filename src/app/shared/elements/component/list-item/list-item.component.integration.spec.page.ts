import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { ListItemComponent } from "./list-item.component";
import { TestUtil } from "src/app/core-test/utils/test-util";
import { MatMenu } from "@angular/material/menu";


export class ListItemComponentPage extends BasePage<ListItemComponent>{

    constructor(additionalConfig?: any) {
        super(ListItemComponent, additionalConfig);
        spyOn(this.component, 'navigatePath');
        spyOn(this.component, 'editItem');
        spyOn(this.component, 'deletedItem');
    }

    get addButtonEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#add')
    }
    get menuElement() {
        return TestUtil.directiveElement(this.fixture, MatMenu)
    }
    get userButtonEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#user')
    }
    get userGroupButtonEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#user-group')
    }
    get deleteEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#delete')
    }
    get editEl(): HTMLButtonElement {
        return TestUtil.nativeElement(this.fixture, '#edit')
    }

}