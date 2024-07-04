import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../ui/loader/Loader'
import { useNavigate } from 'react-router-dom'
import Cart from '../cart/Cart'
import { cartData } from '../../constants/cartData'

const Main = () => {
  const {articles,isLoading} = useSelector(state => state.article)
  const navigate = useNavigate();
  return (
    <>
      {isLoading && <Loader/>}

      <div className="album py-5">
    <div className='container'>
       <div className='flex items-center justify-between'>
       {cartData.map((item,index) =>(
        <Cart key={index} title={item.title} number={item.number} icons={item.icons}/>
       ))}
       </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-16">
        {articles.map(item =>(
        <div className="col" key={item.id}>
          <div className="card h-100 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>{item.title}</title>
              <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <p className="card-text fw-bold m-0">{item.title}</p>
              <p className="card-text ">{item.description}</p>
            </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" onClick={() => navigate(`/article/${item.slug}`)} className="btn btn-sm btn-outline-success">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  <button type="button" className="btn btn-sm btn-outline-danger">Delet</button>
                </div>
                <small className="text-body-secondary fw-bold text-capitalize">{item.author.username}</small>
              </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default Main