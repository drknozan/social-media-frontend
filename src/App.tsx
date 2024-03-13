import './styles/_base.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@layout/MainLayout';
import Feed from '@pages/Feed';
import User from '@pages/User';
import Community from '@pages/Community';
import Post from '@pages/Post';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Search from '@pages/Search';
import { AppDispatch } from '@store/store';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@store/slices/authSlice';
import Loading from '@components/Loading';
import CreatePost from '@pages/CreatePost';
import CreateCommunity from '@pages/CreateCommunity';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/users/:username',
        element: <User />,
      },
      {
        path: '/community/:communityName',
        element: <Community />,
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },
      {
        path: '/community/search',
        element: <Search />,
      },
      {
        path: '/post/create',
        element: <CreatePost />,
      },
      {
        path: '/community/create',
        element: <CreateCommunity />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getCurrentUser());
      setInitialized(true);
    })();
  }, [dispatch]);

  return initialized ? <RouterProvider router={router} /> : <Loading />;
}

export default App;
