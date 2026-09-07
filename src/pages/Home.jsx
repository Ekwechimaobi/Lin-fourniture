import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Header />

      <div className=" ">
        <div className=" w-full relative min-h-screen bg-[url('/pictures/herosec.png')] bg-cover bg-center bg-no-repeat">
          <div className=" absolute p-8  w-1/3 top-98 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff3e3]  rounded-b-lg">
            <small className="tracking-3px font-bold">New Arrival1</small>

            <h1 className="text-[44px] text-[#B88E2F] mt-6 mb-5 leading-16 font-bold">
              Discover Our <br />
              New Collection
            </h1>

            <p className="text-[#555] leading- mb-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus,
              <br /> luctus nec ullamcorper mattis.
            </p>
            <Link>
              <button className="bg-[#B88E2F] text-white hover:bg-[#9d7725] p-2 mt-4 rounded-md  no-underline inline-block font-bold ">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="browse  my- mx-auto text-center">
        <h2 className="text-[34px] mb-2.5">Browse The Range</h2>

        <p className="text-[#777] mb-11.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="cards flex justify-center gap-10">
          <div className="card">
            <img
              className="w-full h-112.5 object-cover rounded-[10px] "
              src="/public/pictures/image 100.png"
              alt="Dining"
            />
            <h3 className="mt-4.5 text-[24px] ">Dining</h3>
          </div>

          <div className="card">
            <img
              className="w-full h-112.5 object-cover rounded-[10px] "
              src="/public/pictures/image 101.png"
              alt="Living"
            />
            <h3 className="mt-4.5 text-[24px] ">Living</h3>
          </div>

          <div className="card">
            <img
              className="w-full h-112.5 object-cover rounded-[10px] "
              src="/public/pictures/image 102.png"
            />
            <h3 className="mt-4.5 text-[24px] ">Bedroom</h3>
          </div>
        </div>
      </div>

      <section className="related-products w-300 text-center my-15 mx-auto">
        <h2 className="text-[28px] font-bold mb-10 text-[#222]">
          Our Products
        </h2>

        <div className="products flex justify-between gap-6.25">
          <div className="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div className="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 1 (1).png"
                alt="Syltherine"
                className="w-full h-75 object-cover block "
              />
              <span className="badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#e97171]">
                -30%
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Syltherine</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Stylish cafe chair
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 2.500.000
                </span>
                <span className="old-price text-[#b0b0b0] line-through text-[14px]">
                  Rp 3.500.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 2 (1).png"
                alt="Leviosa"
                className="w-full h-75 object-cover block "
              />
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Leviosa</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Stylish cafe chair
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 2.500.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 3 (1).png"
                alt="Lolito"
                className="w-full h-75 object-cover block "
              />
              <span class="badge sale badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#e97171]">
                -50%
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Lolito</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Luxury big sofa
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 7.000.000
                </span>
                <span className="old-price text-[#b0b0b0] line-through text-[14px]">
                  Rp 14.000.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 4 (1).png"
                alt="Respira"
                className="w-full h-75 object-cover block "
              />
              <span class="badge new badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#2ec1ac]">
                New
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Respira</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Outdoor bar table and stool
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 500.000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="products flex justify-between gap-6.25 mt-9">
          <div className="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div className="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 1 (1).png"
                alt="Syltherine"
                className="w-full h-75 object-cover block "
              />
              <span className="badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#e97171]">
                -30%
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Syltherine</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Stylish cafe chair
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 2.500.000
                </span>
                <span className="old-price text-[#b0b0b0] line-through text-[14px]">
                  Rp 3.500.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 2 (1).png"
                alt="Leviosa"
                className="w-full h-75 object-cover block "
              />
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Leviosa</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Stylish cafe chair
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 2.500.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 3 (1).png"
                alt="Lolito"
                className="w-full h-75 object-cover block "
              />
              <span class="badge sale badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#e97171]">
                -50%
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Lolito</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Luxury big sofa
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 7.000.000
                </span>
                <span className="old-price text-[#b0b0b0] line-through text-[14px]">
                  Rp 14.000.000
                </span>
              </div>
            </div>
          </div>

          <div class="product-card w-67.5 bg-[#f4f5f7] text-left">
            <div class="product-image relative overflow-hidden">
              <img
                src="/public/pictures/image 4 (1).png"
                alt="Respira"
                className="w-full h-75 object-cover block "
              />
              <span class="badge new badge sale absolute top-3.75 right-3.75 w-11.25 h-11.25 rounded-[50%] text-white text-[13px] flex justify-center items-center font-bold bg-[#2ec1ac]">
                New
              </span>
            </div>

            <div className="product-info p-4.5">
              <h3 className="text-[24px] text-[#3a3a3a] mb-1.5">Respira</h3>
              <p className="category text-[#898989] text-[14px] mb-3">
                Outdoor bar table and stool
              </p>

              <div className="price flex items-center gap-3 ">
                <span className="new-price text-[20px] font-bold text-[#3a3a3a]">
                  Rp 500.000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="button-area mt-10">
          <button className="w-61.25 h-12 bg-white text-[#B88E2F] font-semibold cursor-pointer border border-[#B88E2F] transition duration-300 hover:bg-[#B88E2F] hover:text-white ">
            Show More
          </button>
        </div>
      </section>

      <section className="inspiration w-full h-125 bg-[#fcf8f3] flex items-center pl-22.5 relative overflow-hidden">
        <div className="inspiration-text w-[320px] shrink-0 pl-6.25">
          <h2 className="text-[28px] leading-[1.1] text-[#333333] font-bold mb-3">
            50+ Beautiful rooms
            <br />
            inspiration
          </h2>

          <p className="w-62.5 text-[10px] leading-normal text-[#666666] mb-5">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you.
          </p>

          <button className="w-31.25 h-9.5 border-none bg-[#b88e2f] text-white text-[11px] font-semibold cursor-pointer hover:bg-[#9d7825]">
            Explore More
          </button>
        </div>
        <div className="room-card w-82.5 h-105 relative shrink-0 overflow-hidden ">
          <img
            className="w-full h-full block object-cover"
            src="/public/pictures/inspiration1.png"
            alt="Beautiful bedroom"
          />

          <div class="room-info absolute left-0 bottom-0 w-52.5 h-26.25 bg-white py-6.25 px-5 ">
            <span className="text-[#777777] text-[11px]">
              01 &nbsp; — &nbsp; Bed Room
            </span>
            <h3 className="mt-1.75 text-[18px] text-[#333333]">Inner Peace</h3>
          </div>

          <button className="arrow-button absolute left-52.5 bottom-0 w-11.25 h-11.25 border-none bg-[#b88e2f] text-white text-[20px] cursor-pointer hover:bg-[#9d7825]">
            →
          </button>
        </div>

        <div className="room-card second-room w-82.5 ml-3  h-105 relative shrink-0 overflow-hidden">
          <img
            className="w-full h-full block object-cover"
            src="/public/pictures/inspriation 2.png"
            alt="Beautiful dining room"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
