import React from 'react';
import Book from '../component/Book';
import Header from '../component/Header';
import '../index.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Book  title="Introduction to HTML" author="James Garry" category="Fiction" className="margin-top-100"/>
        <Book  title="C# fundamentals" author="James Garry" category="Fiction"/>
        <Book title="How to stay motivated" author="James Garry" category="Fiction" />
        <hr className="container" />
      </>

    );
  }
}

export default HomePage;