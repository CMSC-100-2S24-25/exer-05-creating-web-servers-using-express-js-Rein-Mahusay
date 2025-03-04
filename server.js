import express from 'express';
import fs from 'fs';

//from the handout
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//start with the post method for adding books to the text file
app.post('/add-book', (req, res) => {
    //req.body = parser for reading the body of incoming requests
    //from the handout
    const { bkName, isbn, author, yearPub } = req.body;

    if (!bkName || !isbn || !author || !yearPub) {
        console.log("{success: false}");
        return res.send({ message: 'All required fields.' });
    }

    //simple format for the book information added
    //bookname,isbn,author,yearpub
    //last exer
    // let data = {
    //     bkName: bkName,
    //     isbn: isbn,
    //     author: author,
    //     yearPub: yearPub
    // };
    // const join = Object.values(data).join(", ");
    // const next = join + '\n';
    //like in the past exer, but shorter para straightforward (mismong laman na)

    const data = `${bkName},${isbn},${author},${yearPub}\n`;

    //file operations here
    //fs.readFileSync('books.txt', 'utf-8');
    //fs.appendFileSync('books.txt', data);
    //using same as the last exer
    if (fs.existsSync("books.txt")) {
        fs.appendFileSync("books.txt", data);
        console.log("{success:true}");
        return res.send({ data: data });
    } else {
        fs.writeFileSync("books.txt");
        fs.appendFileSync("books.txt", data);
        console.log("{success:true}");
        return res.send({ data: data });
    }

});

//get method for searching by isbn and author
app.get('/find-by-isbn-author', (req, res) => {
    //ung pinapalitan sa link sa end part
    const { isbn, author } = req.query;

    if (!isbn || !author) {
        console.log("{success: false}");
        return res.send({ message: 'No books with this author and isbn.' });
    }

    const bookExist = fs.readFileSync("books.txt", "utf-8").split('\n');

    //collect the book information
    const result = [];
    bookExist.forEach((book) => {
        const [bkName, isbnFile, authorFile, yearPub] = book.split('\n');

        if (isbnFile === isbn && authorFile === author) {
            result.push({
                bkName, isbn: isbnFile, author: authorFile, yearPub: yearPub
            });
        }
    });
    console.log("{success: true}");
    return res.send({ data: result });
});

app.get('/find-by-author', (req, res) => {
    const { author } = req.query;

    if (!author) {
        console.log("{success: false}");
        return res.send({ message: 'No books with this author.' });
    }

    const bookExist = fs.readFileSync("books.txt", "utf-8").split('\n');

    //collect the book information
    const result = [];
    bookExist.forEach((book) => {
        const [bkName, isbn, authorFile, yearPub] = book.split('\n');

        if (authorFile === author) {
            result.push({
                bkName, isbn, author: authorFile, yearPub: yearPub
            });
        }
    });
    console.log("{success: true}");
    return res.send({ data: result });
});

app.listen(3000, () => { console.log('Server started at port 3000.') });

// //sample from handout
// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.post('/submit-data', (req, res) => {
//     res.send('Received a POST request.');
// });