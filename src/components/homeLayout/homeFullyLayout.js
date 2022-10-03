import React from "react";
import {
  experimentalStyled,
  Box,
} from "@mui/material";
import Header from "./nav/nav";
import Footer from "./nav/footer";


const HomeFullLayout = ({ children }) => {

  return (
   
        <div>
        <Header/>
          <Box >{children}</Box>
          <Footer/>
        </div>
   
  );
};

export default HomeFullLayout;
