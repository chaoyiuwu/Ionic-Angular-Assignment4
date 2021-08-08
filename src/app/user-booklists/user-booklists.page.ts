import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppManagerService } from '../app-manager.service';
import { BookList } from '../home/booklist.model';

@Component({
  selector: 'app-user-booklists',
  templateUrl: './user-booklists.page.html',
  styleUrls: ['./user-booklists.page.scss'],
})
export class UserBooklistsPage {

  public booklists : BookList[];
  newListName : string;
  constructor(private service: AppManagerService, private alertController : AlertController, private router : Router) { this.booklists = []; }

  async ionViewWillEnter() {
    this.booklists = await this.service.GetAllLists();
    console.log(this.booklists);
  }

  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      cssClass: 'alertClass',
      header: 'Notice',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async addNewList(){
    if (!this.newListName){
      await this.presentAlert('The name is empty.');
    }
    else {
      let newList = new BookList();
      newList.name = this.newListName;
      this.newListName = "";
      await this.service.addListAsync(newList);
    }
  }

  deleteBookList(list : BookList){
    this.service.removeListAsync(list.ID);
  }

  async addBookToList(list : BookList){
    if (this.service.bookToAdd) {
      list.books.push(this.service.bookToAdd);
      await this.service.updateListAsync(list);
      await this.presentAlert(this.service.bookToAdd.title + " is added to list " + list.name);
      this.service.setBookToAdd(null);
      
    }
    else {
      await this.presentAlert("no books selected");
    }
  }

  viewListDetail(list : BookList){
    this.service.setCurrentList(list);
    this.router.navigateByUrl('list-detail');
  }

}
