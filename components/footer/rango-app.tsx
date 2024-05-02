import React from 'react'
export const RangoApp = () => {
    return (
        <div className="w-full bg-darkSky flex flex-col items-center">
            <div className="container px-[25px] py-[30px] md:p-[50px] flex flex-col items-center">
                <div className="text-baseForeground text-center text-[18px] md:text-[45px] font-semibold">Start secure swaps across blockchains</div>
                <div className="text-[14px] md:text-[18px] font-medium mt-[15px] md:mt-0 text-center text-baseGrey">Swap across 64+ blockchains and 100+ DEX/Bridge Protocols in a simple UI</div>
                <a href="#" className="transition-all hover:bg-opacity-90 overflow-hidden  relative py-[10px] md:py-[15px] flex items-center justify-center px-[20px] font-medium \
                	text-[16px] md:text-[18px]  md:leading-snug md:text-[18px] text-baseForeground bg-lightSky rounded-lg mt-[35px] md:mt-[60px] w-[257px]">Open App</a>
            </div>
        </div>
    );
} 