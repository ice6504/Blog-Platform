import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="h-screen container mx-auto px-5 lg:px-16">
        <div className="h-full grid place-items-center ">
          <div className="space-y-5 text-center">
            <h1 className="max-[380px]:text-8xl text-9xl font-bold">404</h1>
            <h3 className="text-3xl max-[380px]:text-2xl">
              ไม่พบหน้าที่คุณขอลองทำการตรวจสอบลิงค์ URL อีกครั้ง
            </h3>
            <Link
              to="/"
              className="btn btn-primary sm:btn-lg text-xl sm:text-2xl"
            >
              กลับไปยังหน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
