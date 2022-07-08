import React from 'react';
import Book from '../component/Book';
import Form from '../component/Form';
import '../index.css';

function HomePage() {
  return (
    <>
      <Book title="Introduction to HTML" author="James Garry" category="Fiction" className="margin-top-100" />
      <Book title="C# fundamentals" author="James Garry" category="Fiction" />
      <Book title="How to stay motivated" author="James Garry" category="Fiction" />
      <hr className="container" />
      <div className="container">
        <h3>ADD NEW BOOK</h3>
      </div>
      <Form className="container" />
    </>
  );
}

export default HomePage;
