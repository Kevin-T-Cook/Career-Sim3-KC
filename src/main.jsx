import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { postsApi } from './reducers/posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';
import Nav from './components/Nav'
import CreateNewPost from './pages/CreateNewPost';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Nav/>
      <ApiProvider api={postsApi}>
      <Routes>
        <Route path="/" element={<PostsPage />}/>
        <Route path="/posts/:id" element={<SinglePostPage />}/>
        <Route path="/createnew" element={<CreateNewPost />}/>
      </Routes>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
