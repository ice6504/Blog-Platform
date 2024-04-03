import CardBlog from "../components/Card/CardBlog";

// data
import data_Blog from "../data/blog.json";

function Search() {
  return (
    <div className="min-h-screen container mx-auto space-y-5 pt-20 pb-5 px-5 lg:px-16">
      <main className="grid space-y-10 py-5">
        <label className="input input-lg input-primary input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <div>
          <h2 className="text-5xl font-medium text-primary">คุณอาจจะชื่นชอบ</h2>
          <div className="divider divider-primary"></div>
          <div className="flex gap-5 max-sm:flex-col">
            {data_Blog.blogs.slice(4, 7).map((data) => {
              return <CardBlog key={data.id} data={data} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Search;
