// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Post from './components/post/Post';
import Sidebar from './components/sidebar/Sidebar';
import SinglePost from "./components/singlePost/SinglePost"

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/singlepost" element={<SinglePost />} />
         
       </Routes>
    </>
 );
};

export default App;