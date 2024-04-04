import { useRef } from "react";

function Write() {
  const containerRef = useRef(null);

  const AddTitle = () => {
    const postTitle = document.createElement("textarea");
    postTitle.placeholder = "หัวข้อ";
    postTitle.className =
      "textarea textarea-lg w-full text-2xl sm:text-4xl textarea-primary";
    containerRef.current.appendChild(postTitle);
  };
  const AddParagraph = () => {
    const postParagraph = document.createElement("textarea");
    postParagraph.placeholder = "ข้อความ";
    postParagraph.className =
      "textarea w-full text-lg sm:text-xl textarea-primary";
    postParagraph.rows = "7";
    containerRef.current.appendChild(postParagraph);
  };

  const AddImage = (e) => {
    const postImage = document.createElement("img");
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    postImage.src = fileUrl;
    postImage.className = "w-full h-96 object-cover";
    containerRef.current.appendChild(postImage);
  };
  return (
    <>
      <form className="min-h-screen">
        <div className="w-full pt-16 h-72 sm:h-96 grid place-items-center border-4 border-dashed border-primary rounded-xl">
          <div className="flex flex-col items-center gap-12">
            <div className="text-5xl sm:text-8xl text-primary-content/40">
              <i className="fa-solid fa-images "></i> <span>เพิ่มรูปภาพ</span>
            </div>
            <label htmlFor="img" className="btn btn-primary">
              เลือกรูปภาพ
            </label>
            <input type="file" id="img" className="hidden" />
          </div>
        </div>
        <div className="container mx-auto py-5 px-5 lg:px-16 ">
          <div ref={containerRef} className="space-y-5">
            <textarea
              type="text"
              placeholder="หัวข้อ"
              className="textarea textarea-lg w-full text-2xl sm:text-4xl textarea-primary textarea-bordered"
            ></textarea>
            <textarea
              type="text"
              placeholder="ข้อความ"
              className="textarea w-full text-lg sm:text-xl textarea-primary textarea-bordered"
              rows="7"
            ></textarea>
          </div>
          <div className="flex gap-2 py-5">
            <button
              className="btn btn-primary btn-sm"
              onClick={(event) => {
                event.preventDefault();
                AddTitle();
              }}
            >
              เพิ่มหัวข้อ
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={(event) => {
                event.preventDefault();
                AddParagraph();
              }}
            >
              เพิ่มข้อความ
            </button>
            <label htmlFor="img02" className="btn btn-primary btn-sm">
              เพิ่มรูปภาพ
            </label>
            <input
              name="image"
              type="file"
              id="img02"
              className="hidden"
              onChange={AddImage}
              accept="image/*"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="summit"
              className="btn btn-secondary btn-lg text-white text-3xl"
            >
              สร้าง
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Write;
