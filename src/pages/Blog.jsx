import { IoIosArrowForward } from "react-icons/io";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";
function Blog() {
  return (
    <div>
        <Header/>
      <section className="banner w-full h-70 relative overflow-hidden">
        <img
          src="/pictures/Rectangle 1.png"
          alt="Banner"
          className="banner-img w-full h-full object-cover"
        />

        <div className="banner-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <img
            src="/pictures/Meubel House_Logos-05.png"
            alt="Logo"
            className="logo w-10 mb-2.5 ml-15"
          />
          <h1 className="text-[40px] mb-2.5">Blog</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Blog</span>
          </div>
        </div>
      </section>

      <div class="container w-300 my-10 mx-auto flex gap-12.5">
        <div class="blog flex-3">
          <div class="post mb-17.5">
            <img
              src="/pictures/blog 1.png"
              alt="Blog Image"
              className="w-full h-107.5 object-cover"
            />

            <div class="post-info flex gap-5 text-[#999] text-[14px] my-3.75 mx-0">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span>Design</span>
            </div>

            <h2 className="text-[30px] mb-3.75 font-medium ">
              Going all-in with millennial design
            </h2>

            <p className="text-[#777] leading-7 text-justify mb-6.25">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, exercitationem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <a
              className="text-black no-underline border-b-2 border-solid border-black pb-1.25 "
              href="#"
            >
              READ MORE
            </a>
          </div>

          <div class="post mb-17.5">
            <img
              src="/pictures/blog 2.png"
              alt="Blog Image"
              className="w-full h-107.5 object-cover"
            />

            <div class="post-info flex gap-5 text-[#999] text-[14px] my-3.75 mx-0">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span>Decorating</span>
            </div>

            <h2 className="text-[30px] mb-3.75 font-medium ">
              Exploring new ways of decorating
            </h2>

            <p className="text-[#777] leading-7 text-justify mb-6.25">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia voluptatibus laboriosam, voluptatem blanditiis.
            </p>

            <a
              className="text-black no-underline border-b-2 border-solid border-black pb-1.25 "
              href="#"
            >
              Read more
            </a>
          </div>

          <div class="post mb-17.5">
            <img
              src="/pictures/blog 3.png"
              alt="Blog Image"
              className="w-full h-107.5 object-cover"
            />

            <div class="post-info flex gap-5 text-[#999] text-[14px] my-3.75 mx-0">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span>Handmade</span>
            </div>

            <h2 className="text-[30px] mb-3.75 font-medium ">
              Handmade pieces that took time to make
            </h2>

            <p className="text-[#777] leading-7 text-justify mb-6.25">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              repellendus expedita molestiae.
            </p>

            <a
              className="text-black no-underline border-b-2 border-solid border-black pb-1.25 "
              href="#"
            >
              Read more
            </a>
          </div>

          <div className="pagination flex justify-center gap-3.75 my-12.5 mx-0">
            <a
              className=" w-11.25 h-11.25 bg-[#c89b3c] no-underline text-white flex justify-center items-center rounded-md    "
              href="#"
            >
              1
            </a>
            <a className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    " href="#">2</a>
            <a className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    " href="#">3</a>
            <a className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    " href="#">Next</a>
          </div>
        </div>

        <aside class="sidebar flex-1">
          <div class="search mb-11.25 ">
            <input
              className="w-full p-3 border border-solid border-[#ddd] outline-none"
              type="text"
              placeholder="Search"
            />
          </div>

          <div class="categories mb-15 ">
            <h3 className="mb-6.25">Categories</h3>

            <ul className="list-none">
              <li className="flex justify-between mb-5 text-[#777]">
                Craft <span>2</span>
              </li>
              <li className="flex justify-between mb-5 text-[#777]">
                Design <span>8</span>
              </li>
              <li className="flex justify-between mb-5 text-[#777]">
                Handmade <span>7</span>
              </li>
              <li className="flex justify-between mb-5 text-[#777]">
                Interior <span>1</span>
              </li>
              <li className="flex justify-between mb-5 text-[#777]">
                Wood <span>6</span>
              </li>
            </ul>
          </div>

          <div class="recent-posts">
            <h3 className="mb-7.5 text-[24px] ">Recent Posts</h3>

            <div className="recent flex gap-3.75 mb-6.25 align-center ">
              <img
                className="w-20 h-20 object-cover"
                src="/pictures/recent 1.png"
                alt=""
              />
              <div>
                <h4 className="text-[15px] font-medium mb-2">
                  Going all-in with millennial design
                </h4>
                <p className="text-[#999] text-[13px]">03 Aug 2022</p>
              </div>
            </div>

            <div className="recent flex gap-3.75 mb-6.25 items-center ">
              <img
                className="w-20 h-20 object-cover"
                src="/pictures/recent 2.png"
                alt=""
              />
              <div>
                <h4 className="text-[15px] font-medium mb-2">
                  Exploring new ways
                </h4>
                <p className="text-[#999] text-[13px]">03 Aug 2022</p>
              </div>
            </div>

            <div className="recent flex gap-3.75 mb-6.25 items-center ">
              <img
                className="w-20 h-20 object-cover"
                src="/pictures/recent 3.png"
                alt=""
              />
              <div>
                <h4 className="text-[15px] font-medium mb-2">
                  Handmade pieces
                </h4>
                <p className="text-[#999] text-[13px]">03 Aug 2022</p>
              </div>
            </div>

            <div className="recent flex gap-3.75 mb-6.25 items-center ">
              <img
                className="w-20 h-20 object-cover"
                src="/pictures/recent 4.png"
                alt=""
              />
              <div>
                <h4 className="text-[15px] font-medium mb-2">Modern home</h4>
                <p className="text-[#999] text-[13px]">03 Aug 2022</p>
              </div>
            </div>

            <div className="recent flex gap-3.75 mb-6.25 items-center ">
              <img
                className="w-20 h-20 object-cover"
                src="/pictures/recent 5.png"
                alt=""
              />
              <div>
                <h4 className="text-[15px] font-medium mb-2">DIY decor</h4>
                <p className="text-[#999] text-[13px]">03 Aug 2022</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Blog;
