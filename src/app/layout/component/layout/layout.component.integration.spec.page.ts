import { BasePage } from "src/app/core-test/base-integration-test/base-page";
import { LayoutComponent } from "./layout.component";

export class LayoutComponentPage extends BasePage<LayoutComponent>{

    constructor(additionalConfig?: any) {
        super(LayoutComponent, additionalConfig);
    }
}