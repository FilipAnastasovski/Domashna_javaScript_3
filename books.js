let books = {
   book1:{
    title:"Alice in wonderland",
    author:  " ‎Lewis Carroll	",
    readingStatus: true,
   },

   book2:{
    title: "the hitchhikers guide trough the galaxy" ,
    author: " Douglas Adams" ,
    readingStatus: true,
   },

   book3:{
    title: "Moby Dick",
    author: "Herman Melville" ,
    readingStatus: false,
   },
}




let request = prompt("read or unread");

function printData(data) {
    if(request === "read"){
        document.write(`Knigata ${data.book1.title},napishana od  ${data.book1.author} e prochitana <br/>`);
        document.write(`Knigata ${data.book2.title},napishana od  ${data.book2.author} e prochitana <br/>`);
    }else document.write(`Knigata ${data.book3.title},napishana od  ${data.book3.author} ne e prochitana <br/>`);


}

      
      
      printData(books);
