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

    handleSearch = (e) => {
        //console.log(e.target.value)
        this.setState({searchField: e.target.value });
        clearTimeout(this.state.timeoutId);
        const timeoutId = setTimeout(() => {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(this.state.searchField))
            .then(response => response.json())
            .then(data => {
                this.setState({ books: data.items });
                console.log(data.items);
            });
        }, 1000);
        this.setState({timeoutId: timeoutId});
    }

    render() {
        return (
        <div>
            <Search handleSearch={this.handleSearch} />
        </div>
        );
    }
}

export default Books;
