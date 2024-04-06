import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardTrending(props) {
  const { data, index } = props;
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <span className="text-neutral-content/90 text-2xl">0{index}</span>
        </div>
        <div className="space-y-2">
          <Link to="/blog">
            <img
              className="object-cover object-center w-full h-40 rounded-md sm:hover:object-top transition-all duration-500"
              src={data.img}
            />
          </Link>
          <div>
            <Link
              to="/blog"
              className="text-primary text-xl font-medium sm:hover:text-secondary transition-all"
            >
              {data.title}
            </Link>
            <p className="line-clamp-2 ">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardTrending.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardTrending;
