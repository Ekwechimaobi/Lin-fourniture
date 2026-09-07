import Header from "../components/Header";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TiStarHalf } from "react-icons/ti";
import Footer from "../components/Footer";
import { Link } from "react-router";

function Sofa() {
  return (
    <div>
      <Header />
      <section className="breadcrumb bg-[#F9F1E7] py-5 px-0 flex items-center gap-3.75 text-[14px]">
        <div class="container w-300 m-auto flex items-center gap-3.75 text-[14px]">
          <span className="text-[#9F9F9F]">Home</span>
          <span className="text-[#9F9F9F]">&gt;</span>
          <span className="text-[#9F9F9F]">Shop</span>
          <span className="text-[#9F9F9F]">&gt;</span>
          <strong className="text-black font-medium">Asgaard sofa</strong>
        </div>
      </section>

      <section className="product-section py-10 px-0">
        <div class="container product-container flex gap-15 ">
          <div class="gallery flex gap-6.25">
            <div class="thumbs flex flex-col gap-5 ">
              <img
                className="w-18.75 h-18.75 object-cover bg-[#f9f9f9] rounded-[10px] cursor-pointer p-2"
                src="/pictures/Outdoor sofa  1 (1).png"
                alt=""
              />
              <img
                className="w-18.75 h-18.75 object-cover bg-[#f9f9f9] rounded-[10px] cursor-pointer p-2"
                src="/pictures/stuart sofa 1 (3).png"
                alt=""
              />
              <img
                className="w-18.75 h-18.75 object-cover bg-[#f9f9f9] rounded-[10px] cursor-pointer p-2"
                src="/pictures/Stuart sofa 1 (2).png"
                alt=""
              />
              <img
                className="w-18.75 h-18.75 object-cover bg-[#f9f9f9] rounded-[10px] cursor-pointer p-2"
                src="/pictures/Stuart sofa 1 (1).png"
                alt=""
              />
            </div>

            <div class="main-image w-125 h-125 bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">
              <img
                className="w-[90%] h-auto"
                src="/pictures/Outdoor sofa  1 (2).png"
                alt=""
              />
            </div>
          </div>

          <div className="details w-125">
            <h1 className="text-[42px] font-medium mb-2.5">Asgaard sofa</h1>

            <h3 className="text-[24px] text-[#9f9f9f] mb-3.75   ">
              Rs. 250,000.00
            </h3>

            <div class="rating text-[#FFC700] text-[18px] mb-5 ">
              <div className="flex ">
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <TiStarHalf className="text-amber-300" />
              </div>
              <span className="text-[#9f9f9f] text-[14px] ml-2.5 ">
                | 5 Customer Review
              </span>
            </div>

            <p className="description text-[#555] leading-[1.7] mb-6.25  ">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <h4 className="text-[#9f9f9f] font-medium mt-5 mb-2.5 mx-0">
              Size
            </h4>

            <div class="sizes flex gap-3">
              <button className="active w-10 h-10 border-none rounded-[5px] cursor-pointer bg-[#B88E2F] text-white">
                L
              </button>
              <button className=" w-10 h-10 border-none bg-[#f9f1e7] rounded-[5px] cursor-pointer">
                XL
              </button>
              <button className=" w-10 h-10 border-none bg-[#f9f1e7] rounded-[5px] cursor-pointer">
                XS
              </button>
            </div>

            <h4 className="text-[#9f9f9f] font-medium mt-5 mb-2.5 mx-0">
              Color
            </h4>

            <div class="colors flex gap-3.75 mb-7.5">
              <span className="purple w-7.5 h-7.5 rounded-[50%] block cursor-pointer bg-[#816DFA]"></span>
              <span className="black w-7.5 h-7.5 rounded-[50%] block cursor-pointer bg-black"></span>
              <span className="gold w-7.5 h-7.5 rounded-[50%] block cursor-pointer bg-[#B88E2F]"></span>
            </div>

            <div class="buttons flex gap-3.75 items-center mb-7.5">
              <div class="quantity w-30 h-13.75 items-center justify-around flex rounded-[10px] border border-[#ccc]">
                <button className="border-none bg-none text-[20px] cursor-pointer">
                  -
                </button>
                <span>1</span>
                <button className="border-none bg-none text-[20px] cursor-pointer">
                  +
                </button>
              </div>
              <Link to="/cart">
                <button className="cart h-13.75 bg-white rounded-[10px] cursor-pointer text-[16px] border border-black py-0 px-8.75 hover:bg-[#b88e2f] hover:text-white hover:border-[#b88e2f]">
                  Add To Cart
                </button>
              </Link>

              <button className="compare h-13.75 bg-white rounded-[10px] cursor-pointer text-[16px] border border-black py-0 px-8.75 hover:bg-[#b88e2f] hover:text-white hover:border-[#b88e2f]">
                + Compare
              </button>
            </div>

            <hr className="border-none my-7.5 mx-0 border-t border-[#ddd]" />

            <table class="info w-full text-[#9f9f9f] border-collapse">
              <tr>
                <td className="py-2 px-0 align-middle">SKU</td>
                <td className="py-2 px-0 align-middle">: SS001</td>
              </tr>

              <tr>
                <td className="py-2 px-0 align-middle">Category</td>
                <td className="py-2 px-0 align-middle">: Sofa</td>
              </tr>

              <tr>
                <td className="py-2 px-0 align-middle">Tags</td>
                <td className="py-2 px-0 align-middle">
                  : Sofa, Chair, Home, Shop
                </td>
              </tr>

              <tr className="">
                <td className="py-2 px-0 align-middle  ">Share</td>
                <td className="align-middle flex items-center">
                  <div className="flex gap-2.5 items-center pt-2 ">
                    :
                    <MdFacebook className="mt-1 text-[#1877f2]" />
                    <IoLogoLinkedin className="mt-1 text-[#0a66c2]" />
                    <BsTwitterX className="mt-1 text-black" />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section className="description-section py-15 px-0 border-t border-[#eee]">
        <div class="tabs flex justify-center gap-12.5 mb-10">
          <h3 className="text-[24px] font-semibold ">Description</h3>
          <span className="text-[#9f9f9f] text-[24px]">
            Additional Information
          </span>
          <span className="text-[#9f9f9f] text-[24px]">Reviews [5]</span>
        </div>

        <div className="text w-225 m-auto text-center ">
          <p className="text-[#9f9f9f] leading-[1.9] mb-6.25">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p className="text-[#9f9f9f] leading-[1.9] mb-6.25">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs.
          </p>
        </div>

        <div class="bottom-images w-300 my-12.5 mx-auto flex gap-7.5 justify-center">
          <div className="img-box w-140 h-87.5 bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">
            <img
              src="/pictures/Cloud sofa three seater + ottoman_2 1 (1).png"
              alt=""
              className="w-[90%]"
            />
          </div>

          <div className="img-box w-140 h-87.5 bg-[#F9F1E7] rounded-[10px] flex justify-center items-center">
            <img
              src="/pictures/Cloud sofa three seater + ottoman_1 1 (1).png"
              alt=""
              className="w-[90%]"
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
                src="/pictures/image 1 (1).png"
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
                src="/pictures/image 2 (1).png"
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
                src="/pictures/image 3 (1).png"
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
                src="/pictures/image 4 (1).png"
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
      <Footer />
    </div>
  );
}

export default Sofa;
