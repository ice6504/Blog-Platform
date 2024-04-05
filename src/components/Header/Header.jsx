import Logo from "/src/assets/Logo.png";

function Header() {
  return (
    <div
      className="hero min-h-[90svh] xl:pt-10"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl space-y-5">
          <div className="flex justify-center items-center h-fit flex-col">
            <img className="w-44" rel="preload" src={Logo} alt="Logo" />
            <h1 className="text-6xl  sm:text-8xl lg:text-9xl font-bold text-center text-primary-content first-letter:text-secondary">
              Meaw Blog
            </h1>
          </div>
          <button className="btn btn-primary sm:btn-lg">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
