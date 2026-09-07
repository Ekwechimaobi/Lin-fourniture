import { IoIosArrowForward } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Link } from "react-router";
function Cart() {
  return (
    <div>
      <Header />
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
          <h1 className="text-[40px] mb-2.5">Cart</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Cart</span>
          </div>
        </div>
      </section>

      <section class="cart-container w-[90%] my-15 mx-auto flex justify-between gap-10">
        <div class="cart-left w-[68%]">
          <table className="w-full border-collapse">
            <tr class="table-head bg-[#F9F1E7]">
              <th className="p-4.5 text-left text-[16px]"></th>
              <th className="p-4.5 text-left text-[16px]">Product</th>
              <th className="p-4.5 text-left text-[16px]">Price</th>
              <th className="p-4.5 text-left text-[16px]">Quantity</th>
              <th className="p-4.5 text-left text-[16px]">Subtotal</th>
              <th className="p-4.5 text-left text-[16px]"></th>
            </tr>

            <tr>
              <td className="py-6.25 px-2.5 text-[#888] align-middle">
                <img
                  src="/pictures/Asgaard sofa 5.png"
                  alt="Sofa"
                  class="product-img w-20 h-20 rounded-lg bg-[#F9F1E7] object-cover"
                />
              </td>

              <td className="py-6.25 px-2.5 text-[#888] align-middle">
                Asgaard sofa
              </td>

              <td className="py-6.25 px-2.5 text-[#888] align-middle">
                Rs. 250,000.00
              </td>

              <td className="py-6.25 px-2.5 text-[#888] align-middle">
                <input
                  className="w-11.25 h-8.75 text-center border border-[#ccc] rounded-[5px]"
                  type="number"
               
                />
              </td>

              <td class="subtotal  text-black font-bold">Rs. 250,000.00</td>

              <td className="py-6.25 px-2.5 text-[#888] align-middle">
                <AiFillDelete className="delete-icon w-4.5 cursor-pointer text-[#B88E2F]" />
              </td>
            </tr>
          </table>
        </div>

        <div class="cart-right w-[28%] bg-[#f9f1e7] py-10 px-7.5 text-center">
          <h2 className="mb-12.5 text-[34px]">Cart Totals</h2>

          <div class="total-row flex justify-between my-7.5 mx-0 text-[18px]">
            <span>Subtotal</span>
            <span class="gray text-[#999]">Rs. 250,000.00</span>
          </div>

          <div className="total-row flex justify-between my-7.5 mx-0 text-[18px]">
            <span>Total</span>
            <span class="gold text-[#B88E2F] font-bold">Rs. 250,000.00</span>
          </div>

           <Link to="/Checkout" className="mt-10 w-55 h-13.75 bg-white  border-black  p-4 px-12 rounded-[10px] text-[18px] cursor-pointer transition duration-300 hover:bg-[#B88E2F] text-black border-2 hover:text-white">Check Out</Link>
        </div>
      </section>
      <Features />
      <Footer />
    </div>
  );
}

export default Cart;
