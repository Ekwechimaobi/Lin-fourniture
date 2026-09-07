import { MdOutlineStarPurple500 } from "react-icons/md";
import { TiStarHalf } from "react-icons/ti";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
function Product() {
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
          <h1 className="text-[40px] mb-2.5">Product</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Product</span>
          </div>
        </div>
      </section>
      <section class="comparison w-300 my-15 mx-auto">
        <div class="compare-grid grid gap-7.5 items-center mb-10 grid-cols-[1.2fr_1fr_1fr_1fr]  ">
          <div class="intro">
            <h2 className="text-[30px] mb-3.75 font-medium">
              Go to Product page for more Products
            </h2>
            <a className="text-[#666] " href="#">
              View More
            </a>
          </div>

          <div class="product-card">
            <img
              className="w-45 h-30 object-contain bg-[#FBF8F3] rounded-[10px]"
              src=" /public/pictures/Outdoor sofa  1 (2).png"
              alt="Sofa"
            />

            <h3 className="mt-3.75 mb-2.5">Asgaard Sofa</h3>

            <p className="price font-bold mb-2.5 ">Rs.250,000.00</p>

            <div className="rating text-[14px] flex items-center">
              span 4.7               <div className="flex ">
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <TiStarHalf className="text-amber-300" />
              </div>  <span className="text-[#999]">| 204 Review</span>
            </div>
          </div>

          <div class="product-card">
            <img
              className="w-45 h-30 object-contain bg-[#FBF8F3] rounded-[10px]"
              src=" /public/pictures/Outdoor sofa  1 (1).png"
              alt="Sofa"
            />

            <h3 className="mt-3.75 mb-2.5">Outdoor Sofa Set</h3>

            <p className="price font-bold mb-2.5 ">Rs.224,000.00</p>

            <div className="rating text-[14px] flex items-center">
              4.2
              <div className="flex ">
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <MdOutlineStarPurple500 className="text-amber-300" />
                <TiStarHalf className="text-amber-300" />
              </div>
              <span className="text-[#999]">| 145 Review</span>
            </div>
          </div>

          <div class="add-product">
            <h3 className="mb-5">Add A Product</h3>

            <select className="w-45 p-2.5 bg-[#b88e2f] text-white border-none rounded-[5px] cursor-pointer">
              <option>Choose a Product</option>
              <option>Sofa</option>
              <option>Chair</option>
              <option>Table</option>
            </select>
          </div>
        </div>

        <div className="border-r-2 mr-1 border-[#E8E8E8]">
          <div className="border border-[#E8E8E8] w-full my-8"></div>
          <div className="w-full  ">
            <h1 className="uppercase font-medium text-3xl">General</h1>
            <div className="flex w-full ">
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Sales Package</li>
                  <li className="uppercase py-4">Model Number</li>
                  <li className="uppercase py-4">Secondary Material</li>
                  <li className="uppercase py-4">Configuration</li>
                  <li className="uppercase py-4">Upholstery Material</li>
                  <li className="uppercase py-4">Upholstery Color</li>
                </ul>
              </div>
              {/* <div className="border-r-2 mr-1 border-[#E8E8E8]"></div> */}
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">1 sectional sofa</li>
                  <li className="uppercase py-4">TFCBLIGRBL6SRHS</li>
                  <li className="uppercase py-4">Solid Wood</li>
                  <li className="uppercase py-4">L-shaped</li>
                  <li className="uppercase py-4">Fabric + Cotton</li>
                  <li className="uppercase py-4">Bright Grey & Lion</li>
                </ul>
              </div>
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">
                    1 Three Seater, 2 Single Seater
                  </li>
                  <li className="uppercase py-4">DTUBLIGRBL568</li>
                  <li className="uppercase py-4">Solid Wood</li>
                  <li className="uppercase py-4">L-shaped</li>
                  <li className="uppercase py-4">Fabric + Cotton</li>
                  <li className="uppercase py-4">Bright Grey & Lion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <h1 className="uppercase font-medium text-3xl">Product</h1>
            <div className="flex w-full ">
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Filling Material</li>
                  <li className="uppercase py-4">Finish Type</li>
                  <li className="uppercase py-4">Adjustable Headrest</li>
                  <li className="uppercase py-4">Maximum Load Capacity</li>
                  <li className="uppercase py-4">Origin of Manufacture</li>
                  <li>herherj</li>
                </ul>
              </div>
              {/* <div className="border-r-2 mr-1 border-[#E8E8E8]"></div> */}
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Foam</li>
                  <li className="uppercase py-4">Bright Grey & Lion</li>
                  <li className="uppercase py-4">No</li>
                  <li className="uppercase py-4">120 kg</li>
                  <li className="uppercase py-4">india</li>
                </ul>
              </div>
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Matte</li>
                  <li className="uppercase py-4">Bright Grey & Lion</li>
                  <li className="uppercase py-4">Yes</li>
                  <li className="uppercase py-4">300 kg</li>
                  <li className="uppercase py-4">india</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full  ">
            <h1 className="uppercase font-medium text-3xl">Dimensions</h1>
            <div className="flex w-full ">
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Width</li>
                  <li className="uppercase py-4">Height</li>
                  <li className="uppercase py-4">Depth</li>
                  <li className="uppercase py-4">Weight</li>
                  <li className="uppercase py-4">Seat Height</li>
                  <li className="uppercase py-4">Leg Height</li>
                </ul>
              </div>
              {/* <div className="border-r-2 mr-1 border-[#E8E8E8]"></div> */}
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">265.32 cm</li>
                  <li className="uppercase py-4">76 cm</li>
                  <li className="uppercase py-4">167.76 cm</li>
                  <li className="uppercase py-4">45 kg</li>
                  <li className="uppercase py-4">41.52 cm</li>
                  <li className="uppercase py-4">5.46 cm</li>
                </ul>
              </div>
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">265.32 cm</li>
                  <li className="uppercase py-4">76 cm</li>
                  <li className="uppercase py-4">167.76 cm</li>
                  <li className="uppercase py-4">65 kg</li>
                  <li className="uppercase py-4">41.52 cm</li>
                  <li className="uppercase py-4">5.46 cm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full  ">
            <h1 className="uppercase font-medium text-3xl">Warranty</h1>
            <div className="flex w-full ">
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">Warranty Summary</li>
                  <li className="uppercase py-4">Warranty Service Type</li>
                  <li className="uppercase py-4">Covered in Warranty</li>
                  <li className="uppercase py-4">Not Covered in Warranty</li>
                  <li className="uppercase py-4">Domestic Warranty</li>
                  <li>herherj</li>
                </ul>
              </div>
              {/* <div className="border-r-2 mr-1 border-[#E8E8E8]"></div> */}
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">
                    1 Year Manufacturing Warranty
                  </li>
                  <li className="uppercase py-4">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at operations@trevifurniture.com
                  </li>
                  <li className="uppercase py-4">
                    Warranty Against Manufacturing Defect
                  </li>
                  <li className="uppercase py-4">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </li>
                  <li className="uppercase py-4">1 Year</li>
                  <div class="column">
                    <button className="bg-[#b88e24] text-white border-none py-4 px-6 text-[16px] cursor-pointer hover:bg-[#9f7726]  rounded-[5px] ">
                      Add To Cart
                    </button>
                  </div>
                </ul>
              </div>
              <div className="w-full p-2">
                <ul className="py-8">
                  <li className="uppercase py-4">
                    1.2 Year Manufacturing Warranty
                  </li>
                  <li className="uppercase py-4">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at support@xyz.com
                  </li>
                  <li className="uppercase py-4">
                    Warranty of the product is limited to manufacturing defects
                    only.
                  </li>
                  <li className="uppercase py-4">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </li>
                  <li className="uppercase py-4">3 Months</li>
                  <div class="column">
                    <button className="bg-[#b88e24] text-white border-none py-4 px-6 text-[16px] cursor-pointer hover:bg-[#9f7726]  rounded-[5px] ">
                      Add To Cart
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <table className="w-full border-collapse">
          <tr class="title">
            <td className="text-[28px] font-medium bg-white border-none ">
              General
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Sales Package
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              1 sectional sofa
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              1 Three Seater, 2 Single Seater
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Model Number
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              TFCBLIGRBL6SRHS
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              DTUBLGRBL568
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Secondary Material
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Solid Wood
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Solid Wood
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Configuration
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              L-shaped
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              L-shaped
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Upholstery Material
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Fabric + Cotton
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Fabric + Cotton
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Upholstery Color
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Bright Grey & Lion
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Bright Grey & Lion
            </td>
          </tr>

          <tr className="title mt-4">
            <td className=" text-[28px] font-medium bg-white border-none my-10">
              Product
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Filling Material
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Foam
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Matte
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Finish Type
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Bright Grey & Lion
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Bright Grey & Lion
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Adjustable Headrest
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              No
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Yes
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Maximum Load Capacity
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              280 KG
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              300 KG
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Origin of Manufacture
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              India
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              India
            </td>
          </tr>

          <tr class="title">
            <td className="text-[28px] font-medium bg-white border-none ">
              Dimensions
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Width
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              265.32 cm
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              265.32 cm
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Height
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              76 cm
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              76 cm
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Depth
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              167.76 cm
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              167.76 cm
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Weight
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              45 KG
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              65 KG
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Seat Height
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              41.52 cm
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              41.52 cm
            </td>
          </tr>

          <tr>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              Leg Height
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              5.46 cm
            </td>
            <td className="border border-[#eee] p-4.5 align-top text-[15px] ">
              5.46 cm
            </td>
          </tr>
        </table> */}

        {/* <div class="warranty-section w-[70%] ">
          <div class="row">
            <div class="label heading">Warranty</div>
            <div class="column"></div>
            <div class="column"></div>
          </div>

          <div class="row">
            <div class="label">Warranty Summary</div>

            <div class="column">1 Year Manufacturing Warranty</div>

            <div class="column">12 Year Manufacturing Warranty</div>
          </div>

          <div class="row">
            <div class="label">Warranty Service Type</div>

            <div class="column">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@trivefurniture.com
            </div>

            <div class="column">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </div>
          </div>

          <div class="row">
            <div class="label">Covered in Warranty</div>

            <div class="column">Warranty Against Manufacturing Defect</div>

            <div class="column">
              Warranty of the product is limited to manufacturing defects only.
            </div>
          </div>

          <div class="row">
            <div class="label">Not Covered In Warranty</div>

            <div class="column">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>

            <div class="column">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>
          </div>

          <div class="row">
            <div class="label">Domestic Warranty</div>

            <div class="column">1 Year</div>

            <div class="column">3 Months</div>
          </div>

          <div class="row button-row">
            <div class="label"></div>

            <div class="column">
              <button>Add To Cart</button>
            </div>

            <div class="column">
              <button>Add To Cart</button>
            </div>
          </div>
        </div> */}
      </section>
      <Features />
      <Footer />
    </div>
  );
}

export default Product;
