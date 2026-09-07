import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";

const Shop = () => {
  return (
    <div>
      <Header />
      <section className="banner w-full h-70 relative overflow-hidden">
        <img
          src="/public/pictures/Rectangle 1.png"
          alt="Banner"
          className="banner-img w-full h-full object-cover"
        />

        <div className="banner-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <img
            src="/public/pictures/Meubel House_Logos-05.png"
            alt="Logo"
            className="logo w-10 mb-2.5 ml-15"
          />
          <h1 className="text-[40px] mb-2.5">Shop</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Shop</span>
          </div>
        </div>
      </section>

      <section className="filter-bar bg-[#F9F1E7] flex justify-between items-center py-7 px-17.5 flex-wrap">
        <div className="filter-left flex items-center gap-6.25 ">
          <div class="filter-item flex items-center gap-2.5">
            <img className="w-5" src="images/filter-icon.png" alt="Filter" />
            <span className="text-[18px]">Filter</span>
          </div>

          <img
            src="images/grid-icon.png"
            alt="Grid"
            className="icon w-5 cursor-pointer"
          />

          <img
            src="images/list-icon.png"
            alt="List"
            className="icon w-5 cursor-pointer"
          />

          <div className="divider w-0.5 h-8.75 bg-[#CFCFCF]"></div>

          <p className="text-[16px] text-[#333]">Showing 1–16 of 32 results</p>
        </div>

        <div class="filter-right flex items-center gap-8.75">
          <div className="show-box flex items-center gap-3.75">
            <span className="text-[18px]">Show</span>
            <input
              className="w-13.75 h-13.75 border-none bg-white text-center text-[18px] text-[#999] focus:outline-none"
              type="text"
              value="16"
            />
          </div>

          <div className="sort-box flex items-center gap-3.75">
            <span className="text-[18px]">Short by</span>
            <input
              className="w-45 h-13.75 border-none bg-white pl-4.5 text-[18px] text-[#999] focus:outline-none"
              type="text"
              value="Default"
            />
          </div>
        </div>
      </section>

      <section className="related-products w-300 text-center my-15 mx-auto">
        <h2 className="text-[28px] font-semibold mb-10 text-[#222]">
          Related Products
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
        <div className="pagination flex justify-center gap-3.75 my-12.5 mx-0">
          <a
            className=" w-11.25 h-11.25 bg-[#c89b3c] no-underline text-white flex justify-center items-center rounded-md    "
            href="#"
          >
            1
          </a>
          <a
            className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    "
            href="#"
          >
            2
          </a>
          <a
            className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    "
            href="#"
          >
            3
          </a>
          <a
            className="w-11.25 h-11.25 bg-[#f5f5f5] no-underline text-black flex justify-center items-center rounded-md    "
            href="#"
          >
            Next
          </a>
        </div>
      </section>
      <Features />
      <Footer />
    </div>
  );
};

export default Shop;
