import Stat from "./Stat";
import data from "../../data/blog.json";

function Statistics() {
  return (
    <>
      <div className="stats border-2 border-primary-content/20 shadow-md sm:h-36 max-sm:stats-vertical w-full">
        {data.statistics.map((data, index) => {
          return <Stat key={index} data={data} />;
        })}
      </div>
    </>
  );
}

export default Statistics;
