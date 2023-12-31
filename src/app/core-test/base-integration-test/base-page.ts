import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AbstractDataService } from "src/app/core/services/abstract-data-service";
import { SharedModule } from "src/app/shared/shared.module";

export abstract class BasePage<T>{
    fixture!: ComponentFixture<T>;
    component!: T;

    constructor(componentType: any, additionalConfig: any = {}) {
        this.init(componentType, additionalConfig);
    }

    init(componentType: any, additionalConfig: any) {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule, SharedModule, BrowserModule, RouterTestingModule,
                ...additionalConfig.imports || [],
            ],
            declarations: [componentType],
            providers: [AbstractDataService, ...additionalConfig.providers || [],],
            schemas: [NO_ERRORS_SCHEMA],
        })
        this.fixture = TestBed.createComponent(componentType);
        this.component = this.fixture.componentInstance;
        this.fixture.detectChanges();
    }

    detectChanges() {
        this.fixture.detectChanges();
        return this;
    }
}