import needle from "needle";

//got from the handout

/*
{
    bkName: "Harry Potter and the Chamber of Secrets",
    isbn: "0-7475-3849-2",
    author: "J.K Rowling",
    yearPub: "1998"
}

{
    bkName: "The Little Prince",
    isbn: "978-0156012195",
    author: "Antoine Saint-Exupery",
    yearPub: "1943"
}
*/

//sample
needle.post(
    'http://localhost:3000/add-book',
    {
        bkName: "Harry Potter and the Philosopher's Stone",
        isbn: "978-0-7475-3269-9",
        author: "J.K Rowling",
        yearPub: "1997"
    }, (err, res) => {
        console.log(res.body);
    }
);

needle.get(
    'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K Rowling',
    (err, res) => {
        console.log(res.body);
    }
);

needle.get(
    'http://localhost:3000/find-by-author?author=J.K Rowling',
    (err, res) => {
        console.log(res.body);
    }
);