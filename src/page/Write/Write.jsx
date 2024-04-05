import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "link", "image"],
    [
      "blockquote",
      "code-block",
      { list: "ordered" },
      { list: "bullet" },
      { align: [] },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-control min-h-screen">
        <div className="w-full pt-16 h-72 sm:h-96 grid place-items-center border-4 border-dashed border-primary rounded-xl">
          <div className="flex flex-col items-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2 sm:gap-5 max-sm:flex-col text-5xl sm:text-8xl text-primary-content/40">
              <i className="fa-solid fa-images "></i>
              <span>เพิ่มรูปหน้าปก</span>
            </div>
            <label htmlFor="img" className="btn btn-primary max-sm:btn-sm">
              เลือกรูปภาพ
            </label>
            <input type="file" id="img" className="hidden" />
          </div>
        </div>
        <div className="container mx-auto space-y-5 py-5 px-5 lg:px-16 ">
          <div>
            <ReactQuill
              modules={module}
              theme="snow"
              placeholder="เขียนบทความ..."
              value={value}
              onChange={setValue}
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
