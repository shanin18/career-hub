import React from "react";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#1A1919]">
      <div className="container mx-auto py-16 md:py-28 lg:py-32 px-2">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 ">
          <div>
            <h3 className="font-bold text-white text-2xl ">CareerBanao</h3>
            <div className="mt-4">
              <p className="text-[#919191]">
                A social media platform for professionals where you can build
                your professional network, and connect with other professionals
                in your industry.
              </p>
              <div className="flex gap-4 items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img src={fb} alt="facebook logo" className="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img src={twitter} alt="twitter logo" className="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img src={insta} alt="instagram logo" className="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl">Company</h4>
            <div className="flex flex-col gap-2 mt-4">
              <a className="text-[#919191] hover:underline">About Us</a>
              <a className="text-[#919191] hover:underline">Work</a>
              <a className="text-[#919191] hover:underline">Latest News</a>
              <a className="text-[#919191] hover:underline">Careers</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl">Product</h4>
            <div className="flex flex-col gap-2 mt-4">
              <a className="text-[#919191] hover:underline">Prototype</a>
              <a className="text-[#919191] hover:underline">Plans & Pricing</a>
              <a className="text-[#919191] hover:underline">Customers</a>
              <a className="text-[#919191] hover:underline">Integrations</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl">Support</h4>
            <div className="flex flex-col gap-2 mt-4">
              <a className="text-[#919191] hover:underline">Help Desk</a>
              <a className="text-[#919191] hover:underline">Sales</a>
              <a className="text-[#919191] hover:underline">Become a Partner</a>
              <a className="text-[#919191] hover:underline">Developers</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl">Contact</h4>
            <div className="flex flex-col gap-2 mt-4">
              <a className="text-[#919191] hover:underline">524 Broadway , NYC</a>
              <a className="text-[#919191] hover:underline">+1777 - 978 - 5570</a>
            </div>
          </div>
        </div>
        <div className="border-b border-[#919191] my-12"></div>
        <div className="flex justify-between gap-8">
            <p className="text-[#919191]">@2023 <span className="font-semibold">CareerBanao</span>. All Rights Reserved</p>
            <p className="text-[#919191]">Powered by <span className="font-semibold">CareerBanao</span></p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
