function Book(BookId,BookName,BookAuthor)
{
    this.BookId=BookId;
    this.BookName=BookName;
    this.BookAuthor=BookAuthor;
    this.displayDetails=function(){
        return "Book Id"+this.BookId+"</br>"+"Book Name"+this.BookName+"</br>"+"Book Author"+this.BookAuthor;
    }
}
const Book1=new Book(101,"MRITUNJAY","Shivaji Sawant");
const result=document.getElementById("result");
result.innerHTML=Book1.displayDetails();