import Logo from "/src/assets/Logo.png";

// components
import CardBlog from "../components/Card/CardBlog";
import CardTop from "../components/Card/CardTop";
import CardSide from "../components/Card/CardSide";
import CardTrending from "../components/Card/CardTrending";

//data
import blog_Data from "../data/blog.json";

function Home() {
  let i = 0;
  return (
    <>
      <div className="min-h-screen container mx-auto space-y-7 pt-24   sm:pt-20 pb-5 px-5 lg:px-16">
        <header className="flex justify-center items-center gap-5 h-60 max-sm:flex-col">
          <img className="h-3/4" src={Logo} alt="Logo" />
          <h1 className="text-6xl  sm:text-8xl lg:text-9xl font-bold text-center text-primary first-letter:text-secondary">
            Meaw Blog
          </h1>
        </header>
        <div className="space-y-5">
          <div className="border-b-2 border-primary">
            <h2 className="bg-primary w-fit p-2 text-xl font-medium text-white">
              Trending
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {blog_Data.blogs.map((data) => {
              if (data.Trending) {
                i++;
                return <CardTrending key={data.id} data={data} index={i} />;
              }
            })}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-4">
          <div className="sm:col-span-3">
            <CardTop />
          </div>
          <div className="flex sm:flex-col gap-5">
            <CardSide />
            <CardSide />
            <CardSide />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {blog_Data.blogs.slice(6, 12).map((data) => {
            return <CardBlog key={data.id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
