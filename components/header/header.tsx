import React from 'react';
import { DexifierIcon } from "@/components/icons/dexifier-icon";

export const Header = () => {
    return (
        <header className="flex w-full items-center justify-center bg-baseBackground">
            <div className="container max-w-[1024px] flex w-full  items-center justify-center px-[25px]  text-baseForeground">
                <div className="relative z-[200] py-7 flex h-full w-full items-center justify-between font-medium md:hidden fresnel-between-xs-md">
                    <a className="relatives">
                        <DexifierIcon />
                    </a>
                    <div className="flex h-full">
                        <button className="cursor-pointer focus:outline-none text-baseForeground">
                            svg1
                        </button>
                    </div>
                </div>
                <div className="py-[30px] relative z-[50] hidden h-full w-full items-center justify-between font-medium md:flex fresnel-greaterThanOrEqual-md">
                    <a href="#" className="relative w-[3.8rem] md:w-[7.7rem]">
                        <DexifierIcon />
                    </a>
                    <nav>
                        <ul className="flex flex-row items-center text-[22px] gap-[50px]">
                            <li className="text-[18px] font-medium hover:text-secondary-500 text-baseForeground leading-snug ">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-[18px] font-medium hover:text-secondary-500 text-baseForeground leading-snug ">
                                <a href="#">RangoApp</a>
                            </li>
                            <li className="group text-[18px] font-medium hover:text-secondary-500 text-baseForeground  leading-snug ">
                                <div className="py-2 relative">
                                    <div className="cursor-pointer flex items-center">
                                        <span className=" mr-2">Resource</span>
                                    </div>
                                    <ul className="hidden bg-darkSky group-hover:block hover:block z-[201] p-4 absolute right-0 top-9">
                                        <li className="text-[18px] text-baseForeground min-w-[9.625rem] whitespace-nowrap">
                                            <a href="#" className="flex items-center hover:text-secondary-500">
                                                <span>svg1</span>
                                                <span className="pl-1.5 text-[14px] font-normal">API/SDK</span>
                                            </a>
                                        </li>
                                        <li className="text-[18px] text-baseForeground min-w-[9.625rem] whitespace-nowrap pt-6">
                                            <a href="#" className="flex items-center hover:text-secondary-500">
                                                <span>svg1</span>
                                                <span className="pl-1.5 text-[14px] font-normal">Widget</span>
                                            </a>
                                        </li>
                                        <li className="text-[18px] text-baseForeground min-w-[9.625rem] whitespace-nowrap pt-6">
                                            <a href="#" className="flex items-center hover:text-secondary-500">
                                                <span>svg1</span>
                                                <span className="pl-1.5 text-[14px] font-normal">Affiliate</span>
                                            </a>
                                        </li>
                                        <li className="text-[18px] text-baseForeground min-w-[9.625rem] whitespace-nowrap pt-6">
                                            <a href="#" className="flex items-center hover:text-secondary-500">
                                                <span>svg1</span>
                                                <span className="pl-1.5 text-[14px] font-normal">Docs</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header >
    );
}
