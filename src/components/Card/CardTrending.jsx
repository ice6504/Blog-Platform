import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardTrending(props) {
  const { data, index } = props;
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <span className="text-black/40 text-2xl">0{index}</span>
        </div>
        <div className="space-y-2">
          <Link to="/blog">
            <img
              className="object-cover w-full h-28 rounded-md sm:hover:object-top transition-all duration-500"
              src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
