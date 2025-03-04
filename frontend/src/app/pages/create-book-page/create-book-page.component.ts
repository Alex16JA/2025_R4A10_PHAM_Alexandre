import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  @Output() bookCreationEventEmitter = new EventEmitter<Book>();

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(35),]),
    author: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(50),]),
    description: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(255),]),
  });

  constructor(
    private bookService: BooksInMemoryService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value as Omit<Book, 'id' | 'coverUrl'>;
      const bookId = this.bookService.createBook(newBook);
      this.bookCreationEventEmitter.emit({ ...newBook, id: bookId, coverUrl: 'https://placehold.co/150x200' });
      this.router.navigate(['/book', bookId]);
    }
  }
}
