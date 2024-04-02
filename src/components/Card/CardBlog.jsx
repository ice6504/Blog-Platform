import { Link } from "react-router-dom";

function CardBlog() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link to="/Blog">
        <figure className="h-full">
          <img
            className="object-cover size-full rounded-xl sm:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-300 ease-in-out"
            src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </figure>
      </Link>
      <Link
        to="/Blog"
        className="text-2xl font-semibold text-primary transition-all duration-300 hover:text-secondary"
      >
        Topic
      </Link>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, velit.
      </p>
      <div className="flex gap-2">
        <div className="badge badge-lg badge-outline py-4">Lasted</div>
        <div className="badge badge-lg badge-outline py-4">Education</div>
      </div>
    </div>
  );
}

export default CardBlog;
