import { AppComponent } from "src/app/app.component";
import { BasePage } from "src/app/core-test/base-integration-test/base-page";


export class AppComponentPage extends BasePage<AppComponent>{

    constructor(additionalConfig?: any) {
        super(AppComponent, additionalConfig);
    }
}