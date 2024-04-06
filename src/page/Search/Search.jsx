import { useState } from "react";
import CardBlog from "../../components/Card/CardBlog";
// data
import data_Blog from "../../data/blog.json";

function Search() {
  const [keyword, setKeyword] = useState("");

  const searchBlogs = (keyword, data_Blog) => {
    if (keyword && keyword.trim().length > 0) {
      const search = data_Blog.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(keyword.toLowerCase())
      );
      return search.length > 0 ? search : [];
    }
    return null;
  };
  const result = searchBlogs(keyword, data_Blog);

  return (
    <div className="min-h-screen container mx-auto space-y-5 pt-20 pb-5 px-5 lg:px-16">
      <main className="grid space-y-10 py-5">
        <label className="input input-lg input-primary input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="ค้นหา"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        {result && result.length === 0 && keyword && (
          <h2 className="text-3xl sm:text-4xl font-medium text-primary mb-5">
            ไม่พบสิ่งที่ค้นหา
          </h2>
        )}
        {result && result.length > 0 ? (
          <>
            <h2 className="text-4xl sm:text-5xl font-medium text-primary mb-5">
              ผลการค้นหา
            </h2>
            <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
              {result.map((blog) => {
                return <CardBlog key={blog.id} data={blog} />;
              })}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-4xl sm:text-5xl font-medium text-primary">
              คุณอาจจะชื่นชอบ
            </h2>
            <div className="divider divider-primary"></div>
            <div className="flex gap-5 max-sm:flex-col">
              {data_Blog.blogs.slice(4, 7).map((data) => {
                return <CardBlog key={data.id} data={data} />;
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Search;
