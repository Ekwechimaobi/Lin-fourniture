import { Link } from "react-router"

function Footer() {
  return (
    <div>
        <footer className=" bg-white pt-60px pb-80px pl-25px">
    <div className="flex justify-center items-start gap-60 flex-wrap mt-14">

  
        <div className="footer-column company ">
            <h2 className="text-2xl font-bold text-black mb-11.25 ">Furniro.</h2>
            <p className ="text-[#9F9F9F] text-base leading-7.5">
                400 University Drive Suite 200 Coral <br/>
                Gables, <br/>
                FL 33134 USA
            </p>
        </div>


        <div className="footer-column flex flex-col">
            <h4 className="text-[#9F9F9F] text-base font-medium mb-11 ">Links</h4>

            <ul className="list-none">
               <Link to="/"> <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Home</a></li></Link>
                <Link to="/shop"><li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Shop</a></li></Link>
                <Link to="/about"> <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">About</a></li></Link>
                <Link to="/contact"> <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Contact</a></li></Link>
               <Link to="/blog"> <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Blog</a></li> </Link>
            </ul>
        </div>


        <div className="footer-column flex flex-col">
            <h4 className="text-[#9F9F9F] text-base font-medium mb-11">Help</h4>

            <ul className="list-none">
                <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Payment Options</a></li>
                <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Returns</a></li>
                <li className="mb-8.5"><a className="no-underline text-black text-base font-medium  hover:text-[#B88E2F]" href="#">Privacy Policies</a></li>
            </ul>
        </div>


        <div className="footer-column flex flex-col">
            <h4 className="text-[#9F9F9F] text-base font-medium mb-11">Newsletter</h4>

            <form className="newsletter flex items-center gap-3">
                <input className="w-55  border-b border-black outline-none py-2 text-sm text-black"
                    type="email"
                    placeholder="Enter Your Email Address "
                />

                <button className=" bg-transparent border-b border-black py-2 text-xs font-semibold cursor-pointer tracking-wide hover:text-[#B88E2F]" type="submit">
                    SUBSCRIBE
                </button>
            </form>
        </div>

    </div>

    <hr className="my-12.5 mb-7.5  border-t border-[#E5E5E5]"/>

    <div className="footer-bottom">
        <p className="text-base flex justify-center text-black">2026 furniro. All rights reserved</p>
    </div>
</footer>
    </div>
  )
}

export default Footer