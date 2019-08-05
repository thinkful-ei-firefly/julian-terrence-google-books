import React, { Component } from  'react';


class Filter extends Component {
  render() {
    return (
      <div className="filter">
       
        <form className="addbookmark__form">
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search"/>
          <button type='submit'>Search</button>
          <label>Print Type:</label>
          <select id="print-type">
            <option value = '1'>All</option>
            <option value = '2'>Books</option>
            <option value = '3'>Magazines</option>
          </select>
          <label>Book Type:</label>
          <select id="print-type">
            <option value = '1'>Partial</option>
            <option value = '2'>Full</option>
            <option value = '3'>Free-Ebooks</option>
            <option value = '4'>Paid-Ebooks</option>
            <option value = '5'>Ebooks</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filter;