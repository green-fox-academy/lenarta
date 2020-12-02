'use strict';

class Blogpost {

    private _authorname: string;
    private _title: string;
    private _publicationDate: string;
    private _content: string;

    constructor(authorname: string, title: string, publicationDate: string, content?: string) {
        this._authorname = authorname;
        this._title = title;
        this._publicationDate = publicationDate;
        this._content
    }

    public fill(authorname: string, title: string, publicationDate: string) {
        this._authorname = authorname;
        this._title = title;
        this._publicationDate = publicationDate;
    }

    public set content(content: string) {
        this._content = content;
    }
}
let lorem = new Blogpost('John Doe', 'Lorem Ipsum', '2000.05.04.');
lorem.content = 'Lorem ipsum dolor sit amet.';
console.log(lorem);


let wait = new Blogpost('Tim Urban', 'Wait but why', '2010.10.10.');
wait.content = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
console.log(wait);

let engineer = new Blogpost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28.');
engineer.content = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
console.log(engineer);

