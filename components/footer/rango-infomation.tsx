import React from 'react'

const LinkText = (
    { children, link, title }: { children?: React.ReactNode, link: string, title: string }) => {
    return (
        <li className="item-center flex pb-2.5 text-[12px] md:text-[16px] md:font-medium leading-[0.8rem] text-baseGrey md:text-[16px] md:leading-5 ">
            {children}
            <a href={link}>{title}</a>
        </li>
    );
}

export const RangoInformation = () => {
    return (
        <div className="w-full bg-baseBackground pt-[40px]] md:pt-[100px]">
            <div className="relative w-full bg-baseBackground bg-contain bg-right-bottom bg-no-repeat pb-[16px] md:bg-[right_1.5rem]">
                <div className="mx-auto flex container  flex-col justify-between px-30 md:flex-row md:px-0">
                    <div className="mb-[10px] text-left md:mb-0 md:max-w-[19.4375rem]">
                        <h3 className="mb-3.5 text-left text-[16px] md:text-[22px] font-medium text-baseForeground md:text-[1.1rem] md:leading-[1.4rem]">About Rango</h3>
                        <p className="w-full text-[12px] md:text-[16px] font-medium leading-[1.5rem] text-baseGrey ">
                            Rango is a cutting-edge routing and aggregation protocol for all cross-chain and on-chain swaps,
                            aggregating bridges and DEXs in crypto world. You can swap native assets like Bitcoin, Ethereum, Matic, ... to each other in a decentralized manner.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:flex md:w-[50%] md:justify-around mt-[40px] md:mt-0 md:mb-10">
                        <div>
                            <h3 className="mb-3 text-left text-[14px] md:text-[22px] font-medium text-baseForeground md:mb-3.5 md:text-[1.1rem] md:leading-[1.4rem]">Products</h3>
                            <ul className="w-full">
                                <LinkText title={"DApp"} link={"#"} />
                                <LinkText title={"SDK"} link={"#"} />
                                <LinkText title={"API"} link={"#"} />
                                <LinkText title={"Widget"} link={"#"} />
                            </ul>
                        </div>
                        <div className="mb-[10px]">
                            <h3 className="mb-3 text-left text-[14px] md:text-[22px] font-medium text-baseForeground md:mb-3.5 md:leading-[1.4rem]">Documentation</h3>
                            <ul className="w-full">
                                <LinkText title={"SDK Docs"} link={"#"} />
                                <LinkText title={"API Reference"} link={"#"} />
                                <LinkText title={"Widget Docs"} link={"#"} />
                                <LinkText title={"Widget Playground"} link={"#"} />
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-3 text-left mt-[25px] md:mt-0 text-[14px] md:text-[22px] font-medium text-baseForeground md:mb-3.5  md:leading-[1.4rem]">Social Media</h3>
                        <ul className="w-full">
                            <LinkText title={"Discord"} link={"#"} />
                            <LinkText title={"Twitter"} link={"#"} />
                            <LinkText title={"Telegram"} link={"#"} />
                            <LinkText title={"Medium"} link={"#"} />
                            <LinkText title={"YouTube"} link={"#"} />
                            <LinkText title={"GitHub"} link={"#"} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 