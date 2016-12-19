import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  returnList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.returnList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything that is returned to this function will end up as props
// on the booklist container
function mapDispatchToProps(dispatch) {
  // When selectBook is called, result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from component to a container - it needs to know
// about this new dispatch method, selectBook. Make it avail as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
