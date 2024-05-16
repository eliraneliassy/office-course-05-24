import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@office/ui';
import { AuthStateService } from '@office/auth-state';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  authStateService = inject(AuthStateService);
  login() {
    this.authStateService.setUser({email: 'eliran@e-square.io'})
  }
}
