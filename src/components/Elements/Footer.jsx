import React from "react";
import Svg from '../Elements/Svg'


const Footer = () => {
  return (
    <div
      className="flex justify-center items-center lg:px-28 sm:px-16 px-3 lg:py-14 sm:py-8 py-3 bg-btn-gradient
    xs:text-left "
    >
      <div className="bg-white rounded-3xl px-16 py-[32px] max-w-[1176px]">
        <div className="grid xl:grid-cols-8 lg:grid-cols-5 grid-cols-1 gap-5 border-b border-black pb-8">
          <div className="space-y-8 xl:col-span-3 lg:col-span-2 col-span-1">
            <img src="../../../logoicon.png" alt="" className="" />
            <p className=" text-gray-3 font-normal">
              Join Mr. Corporation on this exciting journey, where innovation
              and community converge for a shopping experience like no other.
            </p>
          </div>
          <div className="space-y-8 lg:col-span-2 col-span-1">
            <h4 className="font-bold text-2xl text-[#3B3B3B]">Sales</h4>
            <div className="space-y-2">
              <p className="font-medium text-base text-[#3B3B3B]">
                sales@mrcorporation@mail.com
              </p>
              <p className=" text-[15px] font-normal text-[#3B3B3B]">
                MON–FRI 9AM–6PM
              </p>
            </div>
            <div className="flex items-center gap-3 justify-start">
              <a href="https://www.tiktok.com/@mrcorp_" target="_blank">
                {/* <img src="/icons/tiktok.svg" alt="" className="" /> */}
                <span><Svg.facebook/></span>
              </a>
              <a href="https://www.facebook.com/mrcorp.ca" target="_blank">
                {/* <img src="/icons/facebook.svg" alt="" className="" /> */}
                <span><Svg.instagram/></span>
              </a>
              <a href="https://www.instagram.com/mrcorp.ca/" target="_blank">
                {/* <img src="/icons/instagram.svg" alt="" className="" /> */}
                <span><Svg.youtube/></span>
              </a>
              <a href="https://www.youtube.com/@MRCorp" target="_blank">
                {/* <img src="/icons/youtube.svg" alt="" className="" /> */}
                <span><Svg.tiktok/></span>
              </a>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2 col-span-1 xl:pl-10 whitespace-nowrap">
            <h4 className="font-bold text-2xl text-[#3B3B3B]">Call</h4>
            <div className="space-y-2">
              <p className="xl:text-xl font-semibold underline text-[#3B3B3B]">
                +1 (672) 588-1590
              </p>
              <p className=" text-[15px] font-normal text-[#3B3B3B]">
                MON –FRI 9AM – 6PM
              </p>
            </div>
          </div>
          <div className="space-y-8 xl:col-span-1 lg:col-span-3 col-span-1">
            <h4 className="font-bold text-2xl whitespace-nowrap text-[#3B3B3B]">
              MR Apps
            </h4>
            <div className="flex flex-col gap-y-4">
              <button className="flex items-center justify-center w-[127px] h-[44px] bg-black rounded-lg">
                <span>
                  {/* <img src="/icons/playstore.svg" alt=" w-[29px] h-[33px]" /> */}
                  <span><Svg.playstoreicon/></span>
                </span>
                <span className="flex flex-col items-start">
                  <span className=" text-white text-xs font-normal">
                    Available on
                  </span>
                  <span className=" text-white text-[15px] font-semibold">
                    Play store
                  </span>
                </span>
              </button>
              <button className="flex items-center justify-center gap-x-[10px] w-[127px] h-[44px] bg-black rounded-lg">
                <span>
                  {/* <img src="/icons/apple.svg" alt=" w-[29px] h-[33px]" /> */}
                  <span><Svg.apple/></span>
                </span>
                <span className="flex flex-col items-start">
                  <span className=" text-white text-xs font-normal">
                    Available on
                  </span>
                  <span className=" text-white text-[15px] font-semibold">
                    Play store
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-2 pt-6">
          <p className="text-black text-center">
            Copyright © MR Corporation, 2023. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <img src="../../../mastercard.png" alt="" className="" />
            <img src="../../../visa.png" alt="" className="" />
            <img src="../../../paypal.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
