import React, { useState, useEffect } from 'react';
import '../stylings/PictureList.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

const PictureList = () => {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [picturesPerPage] = useState(10); // Number of images per page

  useEffect(() => {
    setPictures(Object.keys(images).map(key => ({
      id: key,
      src: images[key]
    })));
  }, []);

  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="picture-list-container">
      <div className="picture-list">
        {currentPictures.map((picture) => (
          <div key={picture.id} className="picture-card">
            <img src={picture.src} alt={picture.id} />
            <h3>{picture.id}</h3>
          </div>
        ))}
      </div>
      <div style={{marginTop:'5px'}}>
      <Pagination
        currentPage={currentPage}
        picturesPerPage={picturesPerPage}
        totalPictures={pictures.length}
        paginate={paginate}
      />
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, picturesPerPage, totalPictures, paginate }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 5;
  const totalPageCount = Math.ceil(totalPictures / picturesPerPage);

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  let endPage = Math.min(totalPageCount, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a onClick={() => paginate(1)} href="!#" className="page-link">
            &laquo;
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={() => paginate(totalPageCount)} href="!#" className="page-link">
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PictureList;
