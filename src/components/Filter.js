import React, { Component } from  'react';




class Filter extends Component {

  handleSubmit (e) {
    e.preventDefault();      
   
     let q = e.target['search'].value;
     let printType = e.target['print-type'].value;
     let filter = e.target['book-type'].value;
     let key = 'AIzaSyBSNY2MPVpTYgFp-kS-tmfykXMoYrij0O4'

     let url =`https://www.googleapis.com/books/v1/volumes?q=${q}&${filter}&${printType}&key=${key}`;
    
    

    fetch(url)
    .then(res => {
      if(!res.ok){
        throw new Error('this is an error');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => this.props.updateList(data.items))
    .catch(console.log)
 
  }


  render() {
    return (
      <div className="filter">
        <form className="addbookmark__form" onSubmit = { e => this.handleSubmit(e)}>
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search"/>
          <button type='submit'>Search</button>
          <label>Print Type:</label>
          <select name = "print-type" id="print-type">
            <option value = 'all'>All</option>
            <option value = 'books'>Books</option>
            <option value = 'magazines'>Magazines</option>
          </select>
          <label>Book Type:</label>
          <select name = "book-type" id="book-type">
            <option value = 'partial'>Partial</option>
            <option value = 'full'>Full</option>
            <option value = 'free-Ebooks'>Free-Ebooks</option>
            <option value = 'paid-Ebooks'>Paid-Ebooks</option>
            <option value = 'ebooks'>Ebooks</option>
          </select>
        </form>      
      </div>
    );
  }
}

export default Filter;