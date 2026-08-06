import { RiCustomerService2Fill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { HiOutlineTrophy } from "react-icons/hi2";
function Features() {
  return (
    <div>
      <section class="features w-full bg-[#FAF3EA] flex justify-between items-center py-12.5 px-17.5 flex-wrap ">
        <div class="feature flex items-center gap-4">
          <HiOutlineTrophy className="w-11.25 h-11.25" />
          <div class="text">
            <h3 className="text-[22px] text-[#242424] mb-1.5">High Quality</h3>
            <p className="text-[16px] text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>

        <div class="feature flex items-center gap-4">
          <RiVerifiedBadgeLine className="w-11.25 h-11.25" />
          <div class="text">
            <h3 className="text-[22px] text-[#242424] mb-1.5">
              Warranty Protection
            </h3>
            <p className="text-[16px] text-[#898989]">Over 2 years</p>
          </div>
        </div>

        <div class="feature flex items-center gap-4">
          <LiaShippingFastSolid className="w-11.25 h-11.25" />
          <div class="text">
            <h3 className="text-[22px] text-[#242424] mb-1.5">Free Shipping</h3>
            <p className="text-[16px] text-[#898989]">Order over 150 $</p>
          </div>
        </div>

        <div class="feature flex items-center gap-4">
          <RiCustomerService2Fill className="w-11.25 h-11.25" />
          <div class="text">
            <h3 className="text-[22px] text-[#242424] mb-1.5">
              24 / 7 Support
            </h3>
            <p className="text-[16px] text-[#898989]">Dedicated support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
