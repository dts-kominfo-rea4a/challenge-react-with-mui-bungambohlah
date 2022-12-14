// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Divider, Typography } from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography textAlign="center" variant="h3" p={2}>
        Call a Friend
      </Typography>
      <Divider variant="fullWidth">Your friendly contact app</Divider>
    </>
  );
};

export default Header;
