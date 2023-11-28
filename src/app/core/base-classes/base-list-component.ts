import { Directive } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractDataService } from "../services/abstract-data-service";


@Directive()
export abstract class BaseListComponent<T>{
    loading = false
    allData: T[] = []
    protected resultUrlUpdateUserGroup!: string;
    protected resultUrlUpdateUser!: string;


    constructor(protected router: Router, protected dataService: AbstractDataService) {
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
            }
        })
    }

    deleteItem(itemId: string) {
        this.loading = true;
        this.dataService.deleteData(itemId).subscribe({
            next: () => {
                this.receivedAllData();
            },
        });
    }

    editItem(itemId: string, itemType: string) {
        if (itemType === 'user_group') {
            this.navigatePath(this.resultUrlUpdateUserGroup, itemId)
        }
        if (itemType === 'user') {
            this.navigatePath(this.resultUrlUpdateUser, itemId)
        }
    }

    navigatePath(path: string, itemId?: string) {
        itemId ? this.router.navigate([path, itemId]) : this.router.navigate([path]);
    }

    // has data
    hasData() {
        return this.allData.length > 0
    }
}