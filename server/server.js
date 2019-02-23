const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/BooksDB', {useNewUrlParser: true});

const Books = mongoose.model('Books', {
	name: String
});

app.get('/', (req, res) => {
	book.find().then(data => {
		res.json(data);
	});
})

app.post('/', (req, res) => {
	const book = new Book({ name: '1984' });
	book.save().then(() => console.log('book saved'));
	res.send('Saved');
})

app.delete('/', (req, res) => res.send(''))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))