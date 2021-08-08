import { Injectable } from '@angular/core';
import { BookList } from './home/booklist.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseManagerService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: BookList) {
    return this._storage?.set(key, JSON.stringify(value));
  }

  public async remove(key: string) {
    return this._storage?.remove(key);
  }

  public async getAll(): Promise<Array<BookList>> {
    let booklists: Array<BookList> = [];

    if (!this._storage) {
      await this.init();
    }

    await this._storage?.forEach((value, key, index) => {
      let list: BookList = JSON.parse(value);
      booklists.push(list);
    });

    return booklists;
  }
}
