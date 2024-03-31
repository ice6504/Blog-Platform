import CardBlog from "../components/Card/CardBlog";

function Author() {
  return (
    <>
      <div className="min-h-screen">
        <header>
          <img
            className="w-full h-96 sm:h-[30rem] object-cover"
            src="https://loremflickr.com/cache/resized/65535_52843600629_ea5a429d0b_z_640_480_nofilter.jpg"
            alt=""
          />
        </header>
        <main className="pt-5 sm:pt-8 pb-5 container mx-auto px-5 sm:px-10 space-y-5">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="avatar">
              <div className="w-24 ring-4 ring-primary rounded-full">
                <img src="https://loremflickr.com/cache/resized/65535_53453809970_07bb2ddf87_c_640_480_nofilter.jpg" />
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
          <h3 className="text-2xl sm:text-3xl font-medium">Lastest Blog</h3>
          <div className="divider divider-neutral"></div>
          <div className="grid sm:grid-cols-3 gap-3">
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        </main>
      </div>
    </>
  );
}

export default Author;
