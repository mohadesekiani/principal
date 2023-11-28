import { Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseForm } from './base-form';
import { AbstractDataService } from '../services/abstract-data-service';
import { IItem } from '../model/interface/user.interface';
@Directive()
export abstract class BaseFormOprCU<T> extends BaseForm<T> {
  isEditMode = false;
  itemId!: string;
  protected resultUrl!: string;
  entity?: T;

  constructor(
    router: Router,
    protected route: ActivatedRoute,
    protected dataService: AbstractDataService
  ) {
    super(router);
    if (!route) {
      throw new Error('route is null');
    }
    if (!dataService) {
      throw new Error('dataService is null');
    }
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadFormData();
  }
  override submit(): void {
    super.submit();
    if (!this.form.valid) {
      return;
    }
    this.manageComponent();
    this.router.navigate([this.resultUrl]);
  }
  loadFormData() {
    this.route.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this.isEditMode = true;
      this.itemId = params['id'];
      this.dataService.getByID(this.itemId).subscribe((data) => {
        this.form.patchValue(data);
      });
    });
  }

  manageComponent() {
    if (this.isEditMode) {
      this.editItem();
    } else {
      this.addItem();
    }
  }

  addItem() {
    if (!this.form.valid) {
      return;
    }
    this.dataService.addedData(this.form.value as IItem).subscribe({
      next: (res) => {},
    });
  }

  editItem() {
    if (!this.form.valid) {
      return;
    }
    this.dataService.editData(this.itemId, this.form.value as IItem).subscribe({
      next: (res) => {
      },
    });
  }
}
