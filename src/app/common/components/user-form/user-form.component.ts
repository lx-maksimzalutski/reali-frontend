import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserInput } from '../../../features/user/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User | null = null;

  @Output() userSubmit = new EventEmitter<UserInput>();

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.createForm();
  }

  ngOnInit(): void {
    debugger;
    const initialData = this.user || {
      username: '',
      name: '',
      email: '',
      address: {
        street: '',
        city: '',
      },
    };

    this.updateFormValues(initialData);
  }

  public onSubmit(): void {
    if (this.userForm.valid && this.userForm.dirty) {
      this.userSubmit.emit(this.userForm.value);
    }
  }

  public cancel(): void {
    this.router.navigate(['/users']);
  }

  private updateFormValues(user: UserInput): void {
    this.userForm.patchValue({
      username: user.username,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        city: user.address.city,
      },
    });
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
  }
}
