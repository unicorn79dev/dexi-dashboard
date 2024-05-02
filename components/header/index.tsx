import React from 'react'
import { Header } from './header'
import { SearchBoard } from './search-board'
import { ChartBoard } from './chart-board'
export const HeaderWrapper = () => {
    return (
        <div className="w-full min-h-[600px] md:min-h-[800px] pb-[30px] md:pb-[50px] bg-neutral-300  bg-body-mask bg-cover">
            <Header />
            <SearchBoard />
            <ChartBoard />
        </div>
    );
}