import { Link } from "react-router-dom";

function CardTop() {
  return (
    <div className="card h-[26rem] sm:h-[33rem] bg-secondary shadow-md image-full">
      <figure>
        <img
          className="w-full"
          src="https://images.pexels.com/photos/804475/pexels-photo-804475.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Topic"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl lg:text-5xl text-secondary">Topic</h2>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ad
          earum possimus ducimus eos facilis, molestiae aperiam, repudiandae
          odio repellat doloremque? Dicta vero placeat ex quam quasi, minus eius
          nihil?
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

export default CardTop;
