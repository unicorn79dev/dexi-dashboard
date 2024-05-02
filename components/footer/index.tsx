import React from 'react'
import { RangoApp } from './rango-app';
import { RangoInformation } from './rango-infomation';

export const FooterWrapper = () => {
    return (
        <footer className="relative flex w-full flex-col">
            <RangoApp />
            <RangoInformation />
            <span className="w-full bg-darkSky p-2.5 text-center text-[10px] md:text-[16px] text-baseForeground md:text-base md:leading-6">Copyright © 2024 Rango Exchange. All rights reserved.</span>
        </footer>
    );
}