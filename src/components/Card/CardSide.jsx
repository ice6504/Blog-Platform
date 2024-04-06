import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardSide(props) {
  const {data} =props
  return (
    <Link
      to="/blog"
      className="relative w-full h-32 sm:h-1/3 bg-black bg-center bg-cover rounded-2xl shadow-[inset_0px_-30px_25px_0px_#000000] transition-all duration-200 ease-in-out sm:hover:scale-95 text-white sm:hover:text-secondary"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      <div className="absolute inset-x-0 bottom-3">
        <h3 className="font-medium text-center  sm:text-2xl">
          {data.title}
        </h3>
      </div>
    </Link>
  );
}

CardSide.propTypes = { data: PropTypes.object.isRequired };

export default CardSide;
