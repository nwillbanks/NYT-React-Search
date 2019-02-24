import React, { Component } from 'react';
import './App.css';
import Search from './Search';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            timeoutId: null
        }
    }

    handleSearchText = (e) => {
        this.setState({searchField: e.target.value });
    }

    handleSearch = (e) => {
        e.preventDefault()
        //console.log(e.target.value)
        const mySearch = encodeURIComponent(this.state.searchField);
        clearTimeout(this.state.timeoutId);
       
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + mySearch)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ books: data.items });
                console.log(this.state.books);
        });
    }

render() {
    const books = this.state.books;
    return (
    <div>
        <Search 
        handleSearchText = {e => this.handleSearchText(e)}
        handleSearch= {e => this.handleSearch(e)} 
        />
        <div>
        <ul>
          {books.map(book => (
            <li key={book.id}>
            {book.volumeInfo.title}
            {book.volumeInfo.authors}
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book thumbnail"/>
            </li>
          ))}
          </ul>
        </div>
    </div>
    );
}
}

export default Books;

