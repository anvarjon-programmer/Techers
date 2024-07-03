import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/main/Main'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Navbar from './components/navbar/Navbar'
import AuthService from './service/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'
import ArticleService from './service/article'
import { getArticleSuccess, getArticlesStart } from './slice/article'
import ArticleDetail from './components/article-detail/ArticleDetail'
function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
      try{
        const response = await AuthService.getUser();
        dispatch(signUserSuccess(response.user))
      }catch(error){
        console.log(error);
      }
  }

  const getArticles = async () =>{
    dispatch(getArticlesStart())
    try{
      const response = await ArticleService.getArticles()
      console.log(response);
      dispatch(getArticleSuccess(response.articles))
    }catch(error){
      console.log(error);
    }
  }


  useEffect(() =>{
    const token = getItem('token')
    if(token){
      getUser()
      getArticles()
    }
  },[])

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/article/:id' element={<ArticleDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
