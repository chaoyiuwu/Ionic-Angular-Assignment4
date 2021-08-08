import { Injectable } from '@angular/core';
import { DatabaseManagerService } from './database-manager.service';
import { BookJson } from './home/bookJson.model';
import { BookList } from './home/booklist.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {
  bookToAdd : BookJson;
  booklists: Array<BookList>;
  currentList : BookList;

  constructor(
    private dbManager: DatabaseManagerService
  ) {
    this.booklists = [];
  }

  getBookToAdd() : BookJson {
    return this.bookToAdd;
  }

  setBookToAdd(book : BookJson) : void {
    this.bookToAdd = book;
  }

  getCurrentList() : BookList {
    return this.currentList;
  }

  setCurrentList(list : BookList) : void {
    this.currentList = list;
  }

   public async GetAllLists() {
     this.booklists = await this.dbManager.getAll();
     return this.booklists;
   }

  public async addListAsync(newList: BookList) {
    newList.ID = uuid();

    this.booklists.push(newList);

    console.log(this.booklists);

    await this.dbManager.set(newList.ID, newList);
  }

  public async updateListAsync(updatedList : BookList){
    await this.dbManager.set(updatedList.ID, updatedList);
  }

  public async removeListAsync(key: string) {
    var index =  this.booklists.findIndex(x => x.ID == key);
    if (index > -1) {
      this.booklists.splice(index, 1);
    }

    await this.dbManager.remove(key);
  }
}
