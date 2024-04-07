import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardBlog(props) {
  const { data } = props;
  return (
    <div className="flex flex-col gap-y-2">
      <Link to="/blog">
        <figure className="h-full">
          <img
            className="h-72 object-cover size-full rounded-xl sm:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-300 ease-in-out"
            src={data.img}
            alt={data.title}
          />
        </figure>
      </Link>
      <Link
        to="/blog"
        className="text-2xl font-semibold text-primary transition-all duration-300 hover:text-secondary"
      >
        {data.title}
      </Link>
      <p>{data.content}</p>
      <div className="flex items-end justify-between pr-1">
        <div className="badge badge-md badge-outline py-4">{data.category}</div>
        <div className="text-sm">
          <i className="fa-solid fa-eye"></i> {data.views}
        </div>
      </div>
    </div>
  );
}

CardBlog.propTypes = { data: PropTypes.object.isRequired };

export default CardBlog;
