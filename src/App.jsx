import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page
import Layout from "./page/Layout";
import Home from "./page/Home";
import Category from "./page/Category";
import Blog from "./page/Blog";
import Write from "./page/Write";
import Author from "./page/Author";
import Search from "./page/Search";
import Error from "./page/Error";

// ScrollToTop component
import ScrollToTop from "./components/ScrollToTop";

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
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
};

export default App;
