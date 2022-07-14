import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../index.css';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const clickHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container">
      <div className="cat-center">
        <h3>{status}</h3>
        <button
          type="button"
          onClick={() => clickHandler()}
          className="btn btn-primary"
        >
          Check status
        </button>
      </div>
    </div>
  );
}

export default Categories;
