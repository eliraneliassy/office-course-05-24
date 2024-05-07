import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { BookComponent, BooksService } from '@office/books';

@Component({
  selector: 'lib-feed',
  standalone: true,
  imports: [NgFor, AsyncPipe, BookComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  booksService = inject(BooksService);

  books$ = this.booksService.getBooks('Angular');
}
