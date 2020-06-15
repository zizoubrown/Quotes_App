export class Quote {
    showAuthor:boolean;
    constructor(public id:number,public name:string,public author:string,public postedDate:Date, public yourName:string, public upvotes:number, public downvotes:number){
        this.showAuthor=false;
    }
}
