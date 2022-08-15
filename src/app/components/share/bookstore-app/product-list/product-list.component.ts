import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BooksService } from './product-list.component.service';


@Component({
  selector: 'DAEC-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  booksService: BooksService;

  constructor(  booksService: BooksService) {

    this.booksService = booksService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.booksService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))

  }


}


