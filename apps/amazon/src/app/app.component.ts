import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {


  counter = signal(0);
  name = signal('Eliran');

  isEven = computed(() =>
    this.counter() % 2 === 0
  );

  constructor() {
    effect(() => console.log('Counter Changed: ', this.counter(), this.name()));
  }

  changeNamge() {
    this.name.set('Moshe');
  }
  plus(){



    this.counter.set(this.counter() + 1);
    // this.counter.update((value) => value + 1)
  }


}
