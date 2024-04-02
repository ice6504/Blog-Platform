import { Link } from "react-router-dom";

function CardSide() {
  return (
    <Link
      to="/blog"
      className="relative w-full h-32 sm:h-1/3 bg-black bg-center bg-[url('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover rounded-2xl shadow-[inset_0px_-30px_25px_0px_#000000] transition-all duration-200 ease-in-out sm:hover:scale-95"
    >
      <div className="absolute inset-x-0 bottom-3">
        <h3 className="font-medium text-center text-white sm:text-2xl">
          Topic
        </h3>
      </div>
    </Link>
  );
}

export default CardSide;
