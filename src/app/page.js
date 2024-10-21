import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Video from "@/components/video";
import assets from "../constants/assets";
import ClearIcon from "@mui/icons-material/Clear";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Home = () => {
  return (
    <Stack
      sx={{ height: "100%", border: "1px solid", borderColor: "primary.main" }}
    >
      <Header />

      {/*notification with cross button  */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          height: "50px",
          backgroundImage: `url(${assets.bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "0 2rem",
        }}
      >
        <Stack direction={"row"} gap={1}>
          <Typography variant="medium" color="fontlight.main">
            $5,000 Syncvault Esports Tournament Live. To participate in the
            tournament
          </Typography>
          <Typography
            variant="medium"
            color="fontlight.main"
            sx={{
              borderBottom: "1px solid #ffffff",
              cursor: "pointer",
            }}
          >
            click here.
          </Typography>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            height: "35px",
            width: "35px",
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "fontlight.main",
            cursor: "pointer",
            opacity: 0.7,
            "&:hover": {
              borderColor: "fontlight.main",
              opacity: 1,
            },
          }}
        >
          <ClearIcon sx={{ fontSize: "20px", color: "fontlight.main" }} />
        </Stack>
      </Stack>

      {/*main content  */}
      <Grid
        container
        sx={{
          height: "calc(100% - 238px)",
          borderBottom: "1px solid",
          borderColor: "primary.main",
        }}
      >
        {/* section */}
        <Grid size={7} sx={{ height: "100%" }}>
          <Stack
            justifyContent={"center"}
            sx={{
              backgroundImage: `url(${assets.bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              padding: "0 3rem",
              borderRight: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <Stack gap={4} sx={{ height: "80%", height: "349px" }}>
              <Typography
                color="fontlight.main"
                variant="h1"
                sx={{
                  maxWidth: "448px",
                  letterSpacing: "-4%",
                }}
              >
                Welcome to SyncVault App
              </Typography>
              <Typography
                variant="regular"
                color="fontlight.main"
                sx={{
                  maxWidth: "448px",
                  letterSpacing: "0.6%",
                }}
              >
                The platform where artists, creators, and fans collaborate to
                expand their audiences and earn rewards through unique
                monetization opportunities.
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Button
                  sx={{
                    height: "56px",
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
                  <Typography variant="text">Learn More</Typography>
                </Button>
                <Button
                  startIcon={<PlayCircleOutlineIcon />}
                  sx={{
                    height: "56px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    lineHeight: "16.41px",
                    padding: "0 1rem",
                    textTransform: "capitalize",
                    border: "1px solid",
                    color: "fontlight.main",
                    borderColor: "bordercolor",
                    opacity: 0.7,
                    "&:hover": {
                      borderColor: "fontlight.main",
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="text">Watch Tutorial</Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        {/* video */}
        <Grid size={5} sx={{ height: "100%" }}>
          <Video />
        </Grid>
      </Grid>

      {/* footer */}
      <Footer />
    </Stack>
  );
};

export default Home;
