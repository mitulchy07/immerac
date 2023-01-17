import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import CreateRoom from '../../Pages/CreateRoom/CreateRoom';
import Home from '../../Pages/HomePage/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/createroom',
        element: <CreateRoom></CreateRoom>,
      },
    ],
  },
]);

export default router;
