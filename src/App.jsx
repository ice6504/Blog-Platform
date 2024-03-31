import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Layout from "./page/Layout";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Write from "./page/Write";
import Author from "./page/Author";
import Search from "./page/Search";
import Error from "./page/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="write" element={<Write />} />
            <Route path="author" element={<Author />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
