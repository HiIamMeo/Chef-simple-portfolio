import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/Home/HomePage';
import ResumePage from '../pages/Resume/ResumePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);