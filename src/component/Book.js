import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, removeBookR } from '../redux/books/books';
import '../index.css';
import './book.css';
import 'react-circular-progressbar/dist/styles.css';

function Book(props) {
  const { bookId, title, author, category, className } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(bookId)).then(() => {
      dispatch(removeBookR(bookId));
    });
  };

  return (
    <div
      id={bookId}
      className={`flex flex-justify-space-between flex-align-start container book-container ${className}`}
    >
      <div className="flex flex-column flex-justify-space-between">
        <div className="flex flex-column">
          <h4>{category}</h4>
          <div className="book-info">
            <h2>{title}</h2>
            <p className="color-primary">{author}</p>
          </div>
        </div>
        <br />
        <div className="actions flex">
          <ul className="flex">
            <li className="color-primary">
              <button type="button" className="button-texty">
                Comments | &nbsp;
              </button>
            </li>
            <li className="color-primary">
              <button
                type="button"
                className="button-texty"
                onClick={() => handleClick()}
              >
                Remove | &nbsp;
              </button>
            </li>
            <li className="color-primary ">
              <button type="button" className="button-texty">
                Edit
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-justify-start book-details flex-gap-5 width-40p  flex-justify-start">
        <div className="flex flex-justify-center flex-align-start flex-align-center pr-4">
          <div className="prog-bar">
            <CircularProgressbar value={50} />
          </div>
          <div className="progress flex flex-column flex-justify-center ">
            <div className="progress-bar" />
            <div className="flex flex-column flex-justify-center">
              <span className="prog-number">50%</span>
              <span>Completed</span>
            </div>
          </div>
        </div>
        <div className="book-actions flex flex-column flex-justify-space-between">
          <div>
            <p>CURRENT CHAPTER</p>
            <p>Chapter 1</p>
          </div>
          <button type="button" className="btn btn-primary">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
  bookId: PropTypes.string.isRequired,
};

Book.defaultProps = {
  className: '',
};

export default Book;
