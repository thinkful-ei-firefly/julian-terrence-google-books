import React, { Component } from  'react';



class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      List: [],
     };
  }
  render() {
    return (
      <div className="filter">
       
        <form className="addbookmark__form">
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search"/>
          <button type='submit'>Search</button>
          <label>Print Type:</label>
          <select id="print-type">
            <option value = 'All'>All</option>
            <option value = 'Books'>Books</option>
            <option value = 'Magazines'>Magazines</option>
          </select>
          <label>Book Type:</label>
          <select id="book-type">
            <option value = 'Partial'>Partial</option>
            <option value = 'Full'>Full</option>
            <option value = 'Free-Ebooks'>Free-Ebooks</option>
            <option value = 'Paid-Ebooks'>Paid-Ebooks</option>
            <option value = 'Ebooks'>Ebooks</option>
          </select>
        </form>      
      </div>
    );
  }
}

export default Filter;