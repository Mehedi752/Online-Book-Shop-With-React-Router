import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root.jsx'
import ErrorPage from './Components/ErrorPage.jsx';
import ListedBooks from './Components/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead.jsx';
import Home from './Components/Home.jsx';
import BookDetails from './Components/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../../data/booksData.json')
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../../data/booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
