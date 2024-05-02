import React from 'react'
export const SearchBoard = () => {
    return (
        <div className="flex flex-col items-center relative bg-baseBackground h-[595px] md:h-[662px]">
            <div className="container max-w-[1024px] px-[25px] md:px-0 flex flex-col items-center my-35 md:my-[100px]">
                <h1 className="w-full font-semibold text-[28px] md:text-[56px] text-center text-baseForeground ">Rango Swaps Explorer</h1>
                <p className="w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 text-14 md:text-[16px] md:text-[22px] text-baseGrey mb-[45px] text-center">
                    <span>Track all transactions on Rango</span>
                    <span className="ml-0 md:ml-5">Exchange</span>
                </p>
                <form className="rounded-lg bg-none md:bg-darkSky w-full md:w-[66%] md:py-[8px] flex justify-center md:justify-start items-center flex-col md:flex-row ">
                    <div className="w-full bg-darkSky md:bg-none p-[12px] rounded-md md:rounded-none md:py-0 md:px-[25px] flex justify-center items-center">
                        <span className="text-baseForeground px-3">svg</span>
                        <input
                            className="w-full text-baseGrey bg-darkSky focus:outline-0 text-[14px] md:text-[16px]"
                            placeholder="Search by Request ID, Wallet or Tx Hash"
                        />
                    </div>
                    <button
                        className="rounded-lg transition-all hover:bg-opacity-90 relative py-[8px] md:py-[12px] flex items-center justify-center px-[4px] text-[16px] md:text-[18px] font-medium md:font-semibold \
                     md:leading-snug text-baseForeground bg-lightSky md:mt-0 mr-0 md:mr-[10px] w-full md:w-[112px] py-[15px] px-[20px]">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}