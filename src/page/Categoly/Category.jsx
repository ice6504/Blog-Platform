import { useState } from "react";
import Blog_data from "../../data/blog.json";

import CardBlog from "../../components/Card/CardBlog";

function Category() {
  const [select, setSelect] = useState("All");

  console.log(select);

  return (
    <div className="pt-24 sm:pt-28 pb-5 container mx-auto space-y-6 px-5 sm:px-16">
      <select
        className="select select-primary w-full sm:select-lg"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option disabled selected>
          เลือกประเภทที่คุณชื่นชอบ
        </option>
        <option value="All">ทั้งหมด</option>
        <option value="Pixiebob">Pixiebob</option>
        <option value="American Curl">American Curl</option>
        <option value="Nebelung">Nebelung</option>
        <option value="LaPerm">LaPerm</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Blog_data.blogs.map((data) => {
          if (select === "All" || data.category === select) {
            return <CardBlog key={data.id} data={data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Category;
