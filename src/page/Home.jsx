import Logo from "/src/assets/Logo.png";
import CardBlog from "../components/Card/CardBlog";
import CardTop from "../components/Card/CardTop";
import CardSide from "../components/Card/CardSide";

function Home() {
  return (
    <>
      <div className="min-h-screen container mx-auto space-y-5 pt-20 pb-5 px-5 lg:px-16">
        <header className="flex justify-center items-center gap-5 h-60 max-sm:flex-col">
          <img className="h-3/4" src={Logo} alt="Logo" />
          <h1 className="text-6xl  sm:text-8xl lg:text-9xl font-bold text-center text-primary first-letter:text-secondary">
            Meaw Blog
          </h1>
        </header>
        <section className="grid gap-5 sm:grid-cols-4">
          <div className="sm:col-span-3">
            <CardTop />
          </div>
          <div className="flex sm:flex-col gap-5">
            <CardSide />
            <CardSide />
            <CardSide />
          </div>
        </section>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </>
  );
}

export default Home;
