import React from 'react'
import {forwardRef } from "react";
export const Footer=forwardRef((props,ref)=>{


  
    return(
        <>
        <footer ref={ref}>

        <div>
        </div>
        <span>Created By <a href="/">Usama Bin Ghazan</a> | <span className="far fa-copyright"></span>&copy; 2022 All rights reserved.</span>
    </footer>

        </>
    )

});