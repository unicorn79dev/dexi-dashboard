import React from 'react'

interface chartData {
    title: string;
    amount: string;
}
const chartData: chartData[] = [
    {
        title: "Totla Wallet",
        amount: "557.37K"
    },
    {
        title: "Totla Volume",
        amount: "$2.77B"
    },
    {
        title: "Totla Swaps",
        amount: "2.04M"
    },
    {
        title: "Supported DEXes",
        amount: "66"
    },
    {
        title: "Supported Chains",
        amount: "63"
    },
    {
        title: "Supported Bridges",
        amount: "20"
    },
]
const SemiBoard = ({ chartData }: { chartData: chartData[] }) => {
    const data = chartData
    return (
        <div className="grid grid-cols-2 gap-[10px] pr-[20px] md:pr-0 md:gap-[15px]">
            {
                data.map((value, index) => (
                    <div key={index + 1} className="p-[10px] md:p-[25px] flex flex-col justify-center bg-heavyDarkSky rounded-xl md:rounded-normal">
                        <p className="text-[10px] md:text-[12px] text-lightGrey mb-[10px]">{value.title}</p>
                        <p className="text-[14px] md:text-[28px] font-semibold text-baseForeground">{value.amount}</p>
                    </div>
                ))
            }
        </div>
    );
}
export const ChartBoard = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-[calc(100%-3.125rem)] md:container bg-darkSky absolute p-[20px] md:p-[40px] pr-0 md:pr-0 flex flex-col-reverse  md:flex-row  justify-between top-0 rounded-xl translate-y-[112%]">
                <div className="w-full md:w-[36%]">
                    <SemiBoard chartData={chartData} />
                </div>
                <div className="w-full h-full md:w-[64%]">
                    <div className="md:pl-[60px] h-full overflow-x-hidden">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between pr-[20px] md:pr-[40px]">
                            <div className="flex items-center bg-heavyDarkSky p-[5px] rounded-md">
                                <button className="text-10 min-w-[86px] md:w-[90px] md:text-[14px] rounded-md px-[15px] py-[5px] md:py-[10px] font-normal bg-lightSky text-baseForeground">7 Days</button>
                                <button className="text-10 min-w-[86px] md:w-[90px] md:text-[14px] rounded-md px-[15px] py-[5px] md:py-[10px] font-normal bg-transparent text-baseGrey">30 Days</button>
                                <button className="text-10 min-w-[86px] md:w-[90px] md:text-[14px] rounded-md px-[15px] py-[5px] md:py-[10px] font-normal bg-transparent text-baseGrey">90 Days</button>
                            </div>
                            <div className="w-full md:w-auto flex items-center mt-[15px] md:mt-0">
                                <div className="flex items-center mr-[20px]">
                                    <span className="w-[0.25rem] md:w-[0.375rem] h-[0.25rem] md:h-[0.375rem] mr-[5px] rounded-full bg-lightSky"></span>
                                    <span className="text-baseForeground text-[10px] md:text-[14px]">Current Week</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-[0.25rem] md:w-[0.375rem] h-[0.25rem] md:h-[0.375rem] mr-[5px] rounded-full bg-semiDarkSky"></span>
                                <span className="text-baseForeground text-[10px] md:text-[14px]">Previous Week</span>
                            </div>
                        </div>
                        <div className="w-[calc(100%+1.625rem)] md:w-[calc(100%+0.6rem)] h-[240px] md:h-[338px]">
                            <div className="width: 100%; height: 100%;">chartBoard</div>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    );
}