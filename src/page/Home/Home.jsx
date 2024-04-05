// components
import CardBlog from "../../components/Card/CardBlog";
import CardTop from "../../components/Card/CardTop";
import CardSide from "../../components/Card/CardSide";
import CardTrending from "../../components/Card/CardTrending";
import Header from "../../components/Header/Header";
import Section from "../../components/Section";
import Statistics from "../../components/Stat/Statistics";

//data
import blog_Data from "../../data/blog.json";

function Home() {
  let i = 0;
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-7 py-5 px-5 lg:px-16">
        <div className="space-y-5">
          <Section title="กำลังมาแรง" icon="fa-solid fa-chart-line" />
          {/* Trending */}
          <div className="grid gap-5 sm:grid-cols-3">
            {blog_Data.blogs.map((data) => {
              if (data.Trending) {
                i++;
                return <CardTrending key={data.id} data={data} index={i} />;
              }
            })}
          </div>
        </div>
        <div className="space-y-5">
          <Section title="แนะนำ" icon="fa-solid fa-thumbs-up" />
          {/* Recommend */}
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
        </div>
        <Statistics />
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
