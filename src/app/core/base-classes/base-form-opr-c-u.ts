import { Directive } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseForm } from "./base-form";
import { AbstractDataService } from "../base-services/abstract-data-service";
@Directive()
export abstract class BaseFormOprCU<T> extends BaseForm<T>{
    isEditMode = false
    itemId!: string;
    protected resultUrl!: string;

    constructor(router: Router, protected route: ActivatedRoute, protected dataService: AbstractDataService<T>) {
        super(router);
        if (!route) { throw 'route is null'; }
        if (!dataService) { throw 'dataService is null'; }
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.loadFormData()
    }
    override submit(): void {
        super.submit();
        this.manageComponent()
        this.router.navigate([this.resultUrl]);
    }
    loadFormData() {
        this.route.params.subscribe(params => {
            if (!params['id']) { return; }
            this.isEditMode = true;
            this.itemId = params['id']
            this.dataService.getByID(this.itemId).subscribe(data => {
                this.form.patchValue(data);
            });
        });
    }

    manageComponent() {
        if (this.isEditMode) {
            this.editItem()

        } else {
            this.addedItem()
        }
    }

    addedItem() {
        if (!this.form.valid) {
            return;
        }
        this.dataService.addedData(this.form.value as T).subscribe({
            next: (res) => { }
        })

    }

    editItem() {
        if (!this.form.valid) {
            return;
        }
        console.log('kkk',this.form.value);
        
        this.dataService.editData(this.itemId, this.form.value as T).subscribe({
            next: (res) => {
                console.log('res',res);
                
            }
        })
    }

}