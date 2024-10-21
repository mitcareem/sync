"use client";
import { useState } from "react";
import { Stack, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Input from "@/ui/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import Navbar from "../navbar";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <Grid
      container
      sx={{
        height: "72px",
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "primary.main",
      }}
    >
      {/*searchbar  */}
      <Grid size={6} sx={{ height: "100%" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            height: "100%",
            width: "100%",
            borderRight: "1px solid",
            borderColor: "primary.main",
            opacity: 0.8,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: 1
            },
          }}
        >
          <SearchIcon
            sx={{ color: "fontlight.main", fontSize: "28px", width: "56px" }}
          />

          <Box sx={{ position: "relative", width: "calc(100% - 56px)" }}>
            <Input
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                color: "fontlight.main",
                border: "none",
                height: "100%",
                width: "100%",
                backgroundColor: "inherit",
                "::placeholder": {
                  color: "fontlight.main",
                  letterSpacing: "1px",
                },
                "&:focus::placeholder": {
                  color: "bordercolor.main",
                },
              }}
            />
            {searchText && (
              <IconButton
                onClick={handleClear}
                sx={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "fontlight.main",
                }}
              >
                <ClearIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            )}
          </Box>
        </Stack>
      </Grid>

      {/*nav bar  */}
      <Navbar />
    </Grid>
  );
};

export default Header;
