import PropTypes from 'prop-types';
import './form.css';

function Form(props) {
  const { className } = props;
  return (
    <div className={`form ${className}`}>
      <form className="flex flex-justify-space-between">
        <input type="text" placeholder="Book title" className="form-book-title grow-4" />
        <input type="text" placeholder="Author" className="grow-1" />
        <button type="submit" className="grow-1">Add Book</button>
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
