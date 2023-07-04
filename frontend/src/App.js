import './App.css';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import About from './components/About';
import Blog from './components/Blog';
import Article from './components/Article';
import Halo from './components/Halo';
import Footer from './components/Footer';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/halo" element={<Halo />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blog/article:id" element={<Article />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

const Root = () => {
  return <>
    <Header />

    <div>
      <Outlet />
      </div>

      <Footer />
  </>


}

export default App;
