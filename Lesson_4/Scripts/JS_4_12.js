'use strict';

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighLighted = function () {
    this.highlighted = true;
}
//-------------------------------------------------//
class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit(text) {
        this.text = text;
    }
}

class AttachedPost1 extends Post1 {
    highlighted = false;
    constructor(author, text, date) {
        super(author, text, date);
    }

    makeTextHighLighted() {
        this.highlighted = true;
    }
}