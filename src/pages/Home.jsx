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

      <section className="inspiration w-full bg-[#FCF8F3] p-17.5 flex gap-10 items-center" />

      <div className="left w-[30%]">
        <h2 className="text-[40px] mb-5">50+ Beautiful rooms inspiration</h2>

        <p className="text-[#666] mb-7.5 leading-7">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you.
        </p>

        <button className="py-3.75 px-10 bg-[#B88E2F] text-white border-none ">
          Explore More
        </button>
      </div>

      <div className="middle w-[35%] relative">
        <img className="w-full" src="images/room1.jpg" />

        <div className="room-text absolute left-6.5 bottom-6.5 bg-[rgba(255,255,255,.8)] p-5">
          <small>01 — Bed Room</small>

          <h3>Inner Peace</h3>

          <img className="w-[35%] mt-4" src="images/arrow.png" />
        </div>
      </div>

      <div className="right w-[35%]" />

      {/* <img className="w-full" src="images/room2.jpg" />

      <img
        src="images/next.png"
        className="next absolute -right-5 top-11.5 w-11.5"
      />

      <div className="dots mt-5 flex gap-3" />

      <img className="w-3" src="images/dot-active.png" />

      <img className="w-3" src="images/dot.png" />

      <img className="w-3" src="images/dot.png" />

      <img className="w-3" src="images/dot.png" />

      <div />

      <div /> */}

      <section />

      <Footer />
    </div>
  );
};

export default Home;
