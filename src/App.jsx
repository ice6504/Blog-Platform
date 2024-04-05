import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page
import Layout from "./layouts/Layout";
import Home from "./page/Home/Home";
import Category from "./page/Categoly/Category";
import Blog from "./page/Categoly/Blog";
import Write from "./page/Write/Write";
import Author from "./page/Author/Author";
import Search from "./page/Search/Search";
import Error from "./page/PageNotFound/Error";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "blog", element: <Blog /> },
      { path: "write", element: <Write /> },
      { path: "author", element: <Author /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <Error /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
