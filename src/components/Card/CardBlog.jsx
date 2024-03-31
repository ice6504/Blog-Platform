import { Link } from "react-router-dom";

function CardBlog() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link to="/Blog">
        <figure className="h-full sm:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <img
            className="object-cover size-full rounded-xl"
            src="https://loremflickr.com/cache/resized/65535_53431558497_80642664bc_z_640_480_nofilter.jpg"
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
