import { Component } from '@angular/core';
import { AppManagerService } from '../app-manager.service';
import { BookJson } from '../home/bookJson.model';
import { BookList } from '../home/booklist.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrls: ['./list-detail.page.scss'],
})
export class ListDetailPage  {
  list :BookList;
  constructor(private serive : AppManagerService) { }

  ionViewWillEnter(){
    this.list = this.serive.getCurrentList();
  }

  deleteBook(book :BookJson) {
    const index = this.list.books.indexOf(book, 0);
    if (index >-1){
        this.list.books.splice(index, 1);
        this.serive.updateListAsync(this.list);
        this.serive.setCurrentList(this.list);
    }
  }
}
