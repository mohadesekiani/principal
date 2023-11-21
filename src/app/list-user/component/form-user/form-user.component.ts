import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from 'src/app/core/model/interface/form-type.interface';
import { IUser } from 'src/app/core/model/interface/user.interface';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.sass']
})
export class FormUserComponent {
  form!: FormGroup<IForm<IUser>>;
  isEditMode: boolean = false;
  itemId!: string;

  constructor(private fb: FormBuilder, private router: Router, private userDataService: AbstractUserDataService, private route: ActivatedRoute
  ) {
    if (!fb) {
      throw 'FormBuilder is empty';
    }
    if (!router) {
      throw 'router is empty';
    }
    if (!userDataService) {
      throw 'userDataService is empty';
    }
    if (!route) {
      throw 'route is empty';
    }
  }

  ngOnInit(): void {
    this.form = this.createForm();
    this.loadFormData()
  }

  private createForm() {
    return this.fb.group<IForm<IUser>>({
      id: [null],
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  private loadFormData() {
    this.route.params.subscribe(params => {
      if (!params['id']) { return; }
      this.isEditMode = true;
      this.itemId = params['id']
      this.userDataService.getByID(this.itemId).subscribe(data => {
        this.form.patchValue(data);
      });
    });
  }

  private userId() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const timestamp = new Date().getTime();
    return `user_${randomNumber}_${randomChar}_${timestamp}`;
  }

  submit() {
    if (this.isEditMode) {
      this.editUser()

    } else {
      this.addedUser()
    }
  }

  private addedUser() {
    this.form.patchValue({ id: this.userId() })
    if (!this.form.valid) {
      return;
    }
    this.userDataService.addedUserData(this.form.value as IUser).subscribe({
      next: (res) => { }
    })
    this.router.navigate(['/user'])

  }

  private editUser() {
    if (!this.form.valid) {
      return;
    }
    this.userDataService.editUserData(this.itemId, this.form.value as IUser).subscribe({
      next: (res) => {
      }
    })
    this.router.navigate(['/user'])
  }
}
