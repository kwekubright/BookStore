import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addBook, addBookR } from '../redux/books/books';
import './form.css';

function Form(props) {
  const { className } = props;
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      data[key] = value;
    });
    dispatch(addBook(data)).then(() => {
      form.reset();
      dispatch(addBookR(data));
    });
  };

  return (
    <div className={`form ${className}`}>
      <form
        className="flex flex-justify-space-between"
        onSubmit={(e) => formHandler(e)}
      >
        <input type="hidden" name="item_id" value={uuid4()} />
        <input type="hidden" name="category" value="Tech" />
        <input
          type="text"
          placeholder="Book title"
          name="title"
          className="form-book-title grow-4"
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          className="grow-1"
          required
        />
        <button type="submit" className="grow-1">
          Add Book
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
};

Form.defualtProps = {
  className: '',
};

export default Form;
