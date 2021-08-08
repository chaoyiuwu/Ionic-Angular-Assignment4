import { BookJson } from "./bookJson.model";

export class BookList {
    public ID : string;
    public name: string;
    public books : BookJson[]; 

    constructor(){
        this.ID = "";
        this.name = "";
        this.books = [];
    }
}