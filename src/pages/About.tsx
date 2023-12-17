import React from "react";
import { HeaderComponents } from "../components/header/HeaderComponents";
import { AboutComponents } from "../components/about/AboutComponents";
import Global from '../style/Global';
export const About = () => {
    return(
        <>
        <Global/>
            <HeaderComponents/>
            <AboutComponents/>
        </>
    )
}