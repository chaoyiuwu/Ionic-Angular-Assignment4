import { BookJson } from "./bookJson.model";

export class Book {
    public key : string;
    public title : string;
    public authors : string;
    public coverUrl : string;

    constructor(jsonData : BookJson){
        this.key = jsonData.key;
        this.title =jsonData.title;
    }

}