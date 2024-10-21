import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import navContent from "@/constants/navbar";

const Navbar = () => {
  return (
    <Grid size={6} sx={{ height: "72px" }}>
      <Stack direction={"row"} sx={{ height: "100%" }}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            height: "100%",
            width: "56px",
            cursor: "pointer",
            borderRight: "1px solid",
            borderColor: "primary.main",
            opacity: 0.8,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: 1
            },
          }}
        >
          <NotificationsNoneIcon
            sx={{
              fontSize: "24px",
              color: "fontlight.main",
              "&:hover": {
                color: "fontlight.main",
              },
            }}
          />
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{
            height: "100%",
            width: "calc(100% - 56px)",
          }}
        >
          {navContent?.map((navItem) => {
            return (
              <Typography
                variant="text"
                color="fontlight.main"
                key={navItem.value}
                sx={{
                  cursor: "pointer",
                  opacity: 0.8,
                  "&:hover": {
                    color: "fontlight.main",
                    opacity: 1
                  },
                }}
              >
                {navItem.label}
              </Typography>
            );
          })}
          <Button
            sx={{
              height: "40px",
              backgroundColor: "fontlight.main",
              borderRadius: "4px",
              padding: "0 1rem",
              textTransform: "capitalize",
              "&:hover" : {
                backgroundColor: "#cdcdcd"
              },
              "&:active" : {
                backgroundColor: "#9a9a9a"
              }
            }}
          >
            <Typography variant="text">Sign In / Sign Up</Typography>
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Navbar;
