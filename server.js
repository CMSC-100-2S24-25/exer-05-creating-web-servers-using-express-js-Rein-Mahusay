import express from "express";

//from the handout
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//start with the post method for adding books to the text file
app.post('/add-book', (req, res) => {
    //req.body = parser for reading the body of incoming requests
    //from the handout
    const { bkName, isbn, author, yearPub } = req.body;

    if (!bkName && !isbn && !author && !yearPub) {
        return res.send('All fields must be a non-empty string.');
    }

    //simple format for the book information added
    //bookname,isbn,author,yearpub
    //like in the past exer, but shorter para straightforward (mismong laman na)
    const data = '${bkName},${isbn},${author},${yearPub}\n';

    //file operations here

});

// //sample from handout
// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.listen(3000, () => { console.log('Server started at port 3000.') });

// app.post('/submit-data', (req, res) => {
//     res.send('Received a POST request.');
// });