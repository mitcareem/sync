"use client";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledInput = styled("input")(({ theme }) => ({
  backgroundColor: theme.vars.palette.background.default,
  "&:focus": {
    outline: "none",
  },
}));

const Input = React.forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
