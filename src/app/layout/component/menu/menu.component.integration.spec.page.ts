import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { TestUtil } from "src/app/core-test/utils/test-util";
import { MenuComponent } from "./menu.component";
import { RouterLink } from "@angular/router";

export class MenuComponentPage extends BasePage<MenuComponent>{

    constructor(additionalConfig?: any) {
        super(MenuComponent, additionalConfig);
        spyOn(this.matListItemUser, 'click');

    }

    get matListItemUser() {
        return TestUtil.debugElement(this.fixture, 'mat-list-item[item-id="user"]').nativeElement
    }
    get matListItemUserGroup() {
        return TestUtil.debugElement(this.fixture, 'mat-list-item[item-id="userGroup"]').nativeElement
    };
    get allRouterLinkDir() {
        return TestUtil.directiveAllElement(this.fixture, RouterLink)
    }
}