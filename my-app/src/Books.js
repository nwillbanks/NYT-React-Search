import React, { Component } from 'react';
import './App.css';
import Search from './Search';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
        }
    }

    handleSearch = (e) => {
        //console.log(e.target.value)
        this.setState({searchField: e.target.value });
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then(response => response.json())
            .then(data => this.setState({ data }));
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