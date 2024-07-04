import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../ui/loader/Loader';
import { useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import { cartData } from '../../constants/cartData';
import { FaRegUser } from "react-icons/fa";

const Main = () => {
  const { articles, isLoading } = useSelector(state => state.article);
  console.log(articles);
  // const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles based on search query
  const filteredArticles = articles.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current articles for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading && <Loader />}

      <div className="album py-5">
        <div className='container'>
          <div className='flex items-center justify-between'>
            {cartData.map((item, index) => (
              <Cart key={index} title={item.title} number={item.number} icons={item.icons} />
            ))}
          </div>

          <div className="row mb-3">
            <div className="col">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search by title..." 
                value={searchQuery} 
                onChange={handleSearch} 
              />
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-16">
            {currentArticles.map((item,index ) => (
              // <div className="col" key={item.id}>
              //   <div className="card h-100 shadow-sm">
              //     <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              //       <title>{item.title}</title>
              //       <rect width="100%" height="100%" fill="#55595c"></rect>
              //       <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              //     </svg>
              //     <div className="card-body">
              //       <p className="card-text fw-bold m-0">{item.title}</p>
              //       <p className="card-text ">{item.description}</p>
              //     </div>
              //     <div className="card-footer d-flex justify-content-between align-items-center">
              //       <div className="btn-group">
              //         <button type="button" onClick={() => navigate(`/article/${item.slug}`)} className="btn btn-sm btn-outline-success">View</button>
              //         <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              //         <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
              //       </div>
              //       <small className="text-body-secondary fw-bold text-capitalize">{item.author.username}</small>
              //     </div>
              //   </div>
              // </div>
              
              <table className="table" key={item.id}>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='flex items-center gap-2'>
                      <span className='flex items-center gap-2'>
                      {index +1}
                       <FaRegUser className='text-xl'/>
                       {item.title.slice(1,8)}
                      </span>
                    </th>
                    <th scope="col">
                      fdf
                    </th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr> */}
                </tbody>
              </table>

            ))}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <li 
                    key={pageNumber} 
                    className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePagination(pageNumber)}
                  >
                    <button className="page-link">{pageNumber}</button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
