import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BookJson } from './bookJson.model';
import { ApiManagerService } from '../api-manager.service';
import { SearchResultJson } from './searchResultJson.model';
import { AppManagerService } from '../app-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public books : BookJson[];
  constructor(private apiService : ApiManagerService, private appSerivce : AppManagerService, private router : Router) {}

  ngOnInit(){
      this.apiService.getSearchResults("search.json?subject=fantasy")
                  .subscribe(r =>  {
         const result = r as SearchResultJson;
        this.books = result.docs;
                });
      console.log(this.books);
  }

  addBookToList(book : BookJson){
    this.appSerivce.setBookToAdd(book);
    this.router.navigateByUrl('user-booklists');
  }

//   loadData(event) {
//     setTimeout(() => {
//       console.log('Done');
//       event.target.complete();
//
//       // App logic to determine if all data is loaded
//       // and disable the infinite scroll
//       if (this.books.length == 200) {
//         event.target.disabled = true;
//       }
//       else {
//         this.serivce.getSearchResults("search.json?subject='science fiction'")
//         .subscribe(r =>  {
//             const result = r as SearchResultJson;
//             r.docs.forEach(e => {
//                 this.books.push(e);
//             });
//         });
//         console.log(this.books);
//       }
//     }, 2000);
//   }
//
//   toggleInfiniteScroll() {
//     this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
//   }
}
