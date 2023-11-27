import { Directive } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractDataService } from "../base-services/abstract-data-service";


@Directive()
export abstract class BaseFormOprRD<T>{
    loading = false
    allData: T[] = []
    protected resultUrlNewItem!: string;
    protected resultUrlUpdateItem!: string;


    constructor(protected router: Router, protected dataService: AbstractDataService<T>) {
        if (!router) { throw new Error('router is null'); }
        if (!dataService) { throw new Error('dataService is null'); }
    }


    ngOnInit(): void {
        this.receivedAllData()
    }

    private receivedAllData() {
        this.loading = true;
        this.dataService.getAllData().subscribe({
            next: (res) => {
                this.allData = res
                this.loading = false
            },
            error: (err) => {
                this.loading = false
            }
        })
    }

    deletedItem(itemId: string) {
        this.loading = true;
        this.dataService.deleteData(itemId).subscribe({
            next: () => {
                this.receivedAllData();
            },
            error: (err) => {
                this.loading = false;
            },
        });
    }

    editItem(itemId: string) {
        this.router.navigate([this.resultUrlUpdateItem, itemId]);
    }

    addedItem() {
        this.router.navigate([this.resultUrlNewItem]);
    }
// has data
    isAllData() {
        return this.allData.length > 0
    }
}