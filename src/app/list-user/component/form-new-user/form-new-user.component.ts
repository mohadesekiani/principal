import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IForm } from 'src/app/core/model/interface/form-type.interface';
import { IUser } from 'src/app/core/model/interface/user.interface';
import { AbstractUserDataService } from '../../services/abstract-user-data.service';
@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.sass']
})
export class FormNewUserComponent {
  form!: FormGroup<IForm<IUser>>;


  constructor(private fb: FormBuilder, private router: Router, private userDataService: AbstractUserDataService) {
    if (!fb) {
      throw 'FormBuilder is empty';
    }
    if (!router) {
      throw 'router is empty';
    }
    if (!userDataService) {
      throw 'userDataService is empty';
    }
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm() {
    return this.fb.group<IForm<IUser>>({
      id: [null, Validators.required],
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  private userId() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const timestamp = new Date().getTime();
    return `user_${randomNumber}_${randomChar}_${timestamp}`;
  }

  submit() {
    this.form.patchValue({ id: this.userId() })
    if (!this.form.valid) {
      return;
    }
    this.userDataService.addedUserData(this.form.value as IUser).subscribe({
      next: (res) => { }
    })
    this.router.navigate(['/user'])
  }

}
