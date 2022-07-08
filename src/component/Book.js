import React from "react";
import '../index.css';
import './book.css';


class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"flex flex-justify-space-between flex-align-start container book-container " + this.props.className} >
        <div className="flex flex-column flex-justify-space-between">
          <div className="flex flex-column">
            <h4>{this.props.category}</h4>
            <div className="book-info">
              <h2>{this.props.title}</h2>
              <p className="color-primary">{this.props.author}</p>
            </div>
          </div>
          <br></br>
          <div className="actions flex">
            <ul className="flex">
              <li className="color-primary">Comments | </li>
              <li className="color-primary"> Remove |</li>
              <li className="color-primary"> Edit</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-justify-start book-details flex-gap-5 width-40p">
          <div className="progress flex flex-column flex-justify-center ">
            <div className="progress-bar">
              <div className="progress-bar-inner" style={{ width: "50%" }} />
            </div>
            <div className="flex flex-column flex-justify-center">
              <span className="prog-number">50%</span>
              <span>Completed</span>
            </div>
          </div>
          <div className="book-actions flex flex-column flex-justify-space-between">
            <div>
            <p>CURRENT CHAPTER</p>
            <p>Chapter 1</p>
            </div>
            <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;