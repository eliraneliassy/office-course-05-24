import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@office/ui';
import { AuthStateService } from '@office/auth-state';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  authStateService = inject(AuthStateService);

  form = new FormGroup({
    email: new FormControl(null)
  })
  login() {
    this.authStateService
      .setUser({email: this.form.value.email ? this.form.value.email : ''})
  }
}
