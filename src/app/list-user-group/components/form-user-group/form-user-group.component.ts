import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from 'src/app/core/model/interface/form-type.interface';
import { IUserGroup } from 'src/app/core/model/interface/user-group.interface';
import { AbstractDataService } from 'src/app/core/base-services/abstract-data-service';

@Component({
  selector: 'app-form-user-group',
  templateUrl: './form-user-group.component.html',
  styleUrls: ['./form-user-group.component.sass']
})
export class FormUserGroupComponent {
  form!: FormGroup<IForm<IUserGroup>>;
  isEditMode: boolean = false;
  itemId!: string;

  constructor(private fb: FormBuilder, private router: Router, private userGroupDataService: AbstractDataService<IUserGroup>, private route: ActivatedRoute
  ) {
    if (!fb) {
      throw 'FormBuilder is empty';
    }
    if (!router) {
      throw 'router is empty';
    }
    if (!userGroupDataService) {
      throw 'userGroupDataService is empty';
    }
    if (!route) {
      throw 'route is empty';
    }
  }
  ngOnInit(): void {
    this.form = this.createForm();
    this.loadFormData();
  }

  private createForm() {
    return this.fb.group<IForm<IUserGroup>>({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  private loadFormData() {
    this.route.params.subscribe(params => {
      if (!params['id']) { return; }
      this.isEditMode = true;
      this.itemId = params['id']
      this.userGroupDataService.getByID(this.itemId).subscribe(data => {
        this.form.patchValue(data);
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAllAsTouched();
      return;
    }

    this.router.navigate(['/user-group'])

    if (this.isEditMode) {
      this.editUserGroup()

    } else {
      this.addedUserGroup()
    }
  }

  private addedUserGroup() {
    this.form.patchValue({ id: this.userGroupId() })
    if (!this.form.valid) {
      return;
    }
    this.userGroupDataService.addedData(this.form.value as IUserGroup).subscribe({
      next: (res) => { }
    })

  }

  private editUserGroup() {
    if (!this.form.valid) {
      return;
    }
    this.userGroupDataService.editData(this.itemId, this.form.value as IUserGroup).subscribe({
      next: (res) => {
      }
    })
  }

  private userGroupId() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const timestamp = new Date().getTime();
    return `userGroup_${randomNumber}_${randomChar}_${timestamp}`;
  }
}
