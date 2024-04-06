import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardTop(props) {
  const {data} = props
  return (
    <div className="card h-[26rem] sm:h-[33rem] bg-secondary shadow-md image-full">
      <figure>
        <img
          className="w-full"
          src={data.img}
          alt={data.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl lg:text-5xl text-secondary">{data.title}</h2>
        <p className="py-5">
          {data.content}
        </p>
        <div className="card-actions justify-end">
          <Link
            to="/Blog"
            className="btn btn-primary sm:btn-lg text-lg sm:text-xl"
          >
            อ่านเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
  );
}

CardTop.propTypes = { data: PropTypes.object.isRequired };

export default CardTop;
