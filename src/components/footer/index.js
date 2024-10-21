import { Stack, Typography, Avatar, AvatarGroup } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Footer = () => {
  return (
    <Grid container sx={{ height: "116px", width: "100%" }}>
      <Grid size={7} sx={{ height: "100%" }}>
        <Stack direction={"row"} sx={{ height: "100%" }}>
          {/* section  */}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            sx={{
              height: "100%",
              width: "50%",
              borderRight: "1px solid",
              borderColor: "primary.main",
              opacity: 0.8,
            }}
          >
            {/*icon  */}
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "fontlight.main",
                cursor: "pointer",
              }}
            >
              <ArrowDownwardIcon
                sx={{ fontSize: "24px", color: "fontlight.main" }}
              />
            </Stack>
            {/* content */}
            <Stack>
              <Typography color="fontlight.main" variant="medium">
                Scroll Down
              </Typography>
              <Typography color="fontlight.main" variant="regular">
                To Explore SV App Features
              </Typography>
            </Stack>
          </Stack>

          {/* section */}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            sx={{
              height: "100%",
              width: "50%",
              borderRight: "1px solid",
              borderColor: "primary.main",
              opacity: 0.8,
            }}
          >
            {/*icon  */}
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "fontlight.main",
              }}
            >
              <MusicNoteIcon
                sx={{ fontSize: "24px", color: "fontlight.main" }}
              />
            </Stack>
            {/* content */}
            <Stack>
              <Typography color="fontlight.main" variant="medium">
                80,000+
              </Typography>
              <Typography color="fontlight.main" variant="regular">
                Free to Use Music
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={5} sx={{ height: "100%" }}>
        <Stack
          direction={"row"}
          gap={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            height: "100%",
            opacity: 0.8,
          }}
        >
          <AvatarGroup>
            <Avatar alt="Remy Sharp" />
            <Avatar alt="Travis Howard" />
            <Avatar alt="Agnes Walker" />
            <Avatar alt="Trevor Henderson" />
          </AvatarGroup>
          <Stack>
            <Typography color="fontlight.main" variant="medium">
              30,000+
            </Typography>
            <Typography color="fontlight.main" variant="regular">
              Active Users
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
