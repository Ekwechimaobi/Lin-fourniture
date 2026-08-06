import { IoIosArrowForward } from "react-icons/io";
import Features from "../components/Features";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Checkout() {
  return (
    <div>
        <Header/>
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
          <h1 className="text-[40px] mb-2.5">Checkout</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Checkout</span>
          </div>
        </div>
      </section>

      <section className="checkout w-[85%] my-15 mx-auto flex justify-between gap-17.5">
        <div className="billing w-[55%]">
          <h2 className="text-[35px] mb-7.5">Billing details</h2>

          <div class="name-row flex gap-5">
            <div class="input-box w-full mb-6.25">
              <label className="block mb-2.5 font-bold">First Name</label>
              <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
            </div>

            <div class="input-box w-full mb-6.25">
              <label className="block mb-2.5 font-bold">Last Name</label>
              <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
            </div>
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Company Name (Optional)</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Country / Region</label>
            <select className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]">
              <option>Sri Lanka</option>
            </select>
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Street address</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Town / City</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Province</label>
            <select className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]">
              <option>Western Province</option>
            </select>
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">ZIP code</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Phone</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="text" />
          </div>

          <div class="input-box w-full mb-6.25">
            <label className="block mb-2.5 font-bold">Email address</label>
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666]" type="email" />
          </div>

          <div class="input-box w-full mb-6.25">
            <input className="w-full h-13.75 border border-[#d6d6d6] rounded-md py-0 px-3.75 outline-none text-[#666] placeholder:text-[#aaa]" type="text" placeholder="Additional Information" />
          </div>
        </div>

        <div class="order w-[40%]">
          <div class="summary mb-6.25">
            <div class="row heading">
              <h3 className="[text-22px]">Product</h3>
              <h3 className="[text-22px]">Subtotal</h3>
            </div>

            <div class="row flex justify-between my-4.5 mx-0">
              <p>Asgaard sofa × 1</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div class="row flex justify-between my-4.5 mx-0">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div class="row total">
              <h4 className="text-[20px]">Total</h4>
              <h2 className="text-[#B88E2F] text-[28px]">Rs. 250,000.00</h2>
            </div>
          </div>

          <hr className="my-6.25 mx-0 border border-[#ddd]" />

          <div class="payment">
            <label className="block my-4.5 mx-0 text-[15px] ">
              <input className="mr-2.5" type="radio" name="payment" checked />
              Direct Bank Transfer
            </label>

            <p className="text-[#777] leading-6 mb-5">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <label className="block my-4.5 mx-0 text-[15px] ">
              <input className="mr-2.5" type="radio" name="payment" />
              Direct Bank Transfer
            </label>

            <label className="block my-4.5 mx-0 text-[15px] ">
              <input className="mr-2.5" type="radio" name="payment" />
              Cash On Delivery
            </label>

            <p className="text-[#777] leading-6 mb-5">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b>privacy policy.</b>
            </p>

            <button className="block my-7.5 mx-auto w-55 h-13.75 border border-black bg-white rounded-[10px] text-[16px] cursor-pointer transition duration-300 hover:bg-[#B88E2F] text-white border-none">Place order</button>
          </div>
        </div>
      </section>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Checkout;
