import CardBlog from "../components/Card/CardBlog";

import data_Blog from "../data/blog.json";

function Author() {
  return (
    <>
      <div className="min-h-screen">
        <header>
          <img
            className="w-full h-96 sm:h-[30rem] object-cover"
            src="https://images.pexels.com/photos/248350/pexels-photo-248350.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </header>
        <main className="pt-5 sm:pt-8 pb-5 container mx-auto px-5 sm:px-10 space-y-5">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="avatar">
              <div className="w-24 ring-4 ring-primary rounded-full">
                <img src="https://images.pexels.com/photos/1576193/pexels-photo-1576193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </div>
            </div>
            <div className="text-primary font-semibold text-3xl sm:text-5xl">
              <h1>Author Name</h1>
            </div>
            <div className="flex items-center gap-3 sm:text-xl">
              <a
                href="#"
                className="tooltip tooltip-bottom"
                data-tip="Facebook"
              >
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
              <a
                href="#"
                className="tooltip tooltip-bottom"
                data-tip="X Twitter"
              >
                <i className="fa-brands fa-x-twitter fa-2xl"></i>
              </a>
              <a
                href="#"
                className="tooltip tooltip-bottom"
                data-tip="Instagram"
              >
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-medium text-secondary">
            Lastest Blog
          </h3>
          <div className="divider divider-secondary"></div>
          <div className="grid sm:grid-cols-3 gap-3">
            {data_Blog.blogs.slice(4, 7).map((data) => {
              return <CardBlog key={data.id} data={data} />;
            })}
            {/* <CardBlog />
            <CardBlog />
            <CardBlog /> */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Author;
