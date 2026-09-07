import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

function Contact() {
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
          <h1 className="text-[40px] mb-2.5">Contact</h1>

          <div class="breadcrumb flex justify-center gap-2.5 text-[14px]">
            <span>Home</span>
            <IoIosArrowForward className="mt-1.5" />
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section class="contact w-[80%] my-17.5 mx-auto">
        <h2 className="text-center text-[32px] mb-3.75 ">
          Get In Touch With Us
        </h2>

        <p className="description w-[60%] text-center mt-0 mx-auto mb-15 text-[#777] text-[15px] leading-6">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="contact-container flex justify-between gap-15">
          <div className="contact-info w-[35%]">
            <div className="info flex gap-5 mb-10">
              <FaLocationDot className="w-7 h-7" />
              <div>
                <h3 className="mb-2.5 text-[22px]">Address</h3>
                <p className="text-[#666] leading-5.5">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="info flex gap-5 mb-10">
              <FaPhone className="w-7 h-7" />
              <div>
                <h3 className="mb-2.5 text-[22px]">Phone</h3>
                <p className="text-[#666] leading-5.5">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-[#666] leading-5.5">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div class="info flex gap-5 mb-10">
              <GoClockFill className="w-7 h-7" />
              <div>
                <h3 className="mb-2.5 text-[22px]">Working Time</h3>
                <p className="text-[#666] leading-5.5">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-[#666] leading-5.5">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="contact-form w-[60%]">
            <label className="block mb-2.5 mt-5 font-bold">Your Name</label>
            <input
              className="w-full p-3.75 border border-[#ddd] rounded-[5px] outline-none text-[15px]"
              type="text"
              placeholder="ABC"
            />

            <label className="block mb-2.5 mt-5 font-bold">Email Address</label>
            <input
              className="w-full p-3.75 border border-[#ddd] rounded-[5px] outline-none text-[15px]"
              type="email"
              placeholder="abc@xyz.com"
            />

            <label className="block mb-2.5 mt-5 font-bold">Subject</label>
            <input
              className="w-full p-3.75 border border-[#ddd] rounded-[5px] outline-none text-[15px]"
              type="text"
              placeholder="This is optional"
            />

            <label className="block mb-2.5 mt-5 font-bold">Message</label>
            <textarea
              className="w-full p-3.75 border border-[#ddd] rounded-[5px] outline-none text-[15px] h-30 resize-none"
              placeholder="Hi! I'd like to ask about"
            ></textarea>

            <button className="mt-6.5 px-11.25 py-3.75 bg-[#B88E2F] text-white border-none rounded-[5px] cursor-pointer text-[16px] hover:bg-[#9d7725]">
              Submit
            </button>
          </div>
        </div>
      </section>

      <Features />

      <Footer />
    </div>
  );
}

export default Contact;
