import { Stack, Typography } from "@mui/material";

const Details = ({ data }) => {
  return (
    <Stack gap={2} sx={{ marginTop: "1.6rem" }}>
      {data.map((item) => {
        return (
          <Typography
            variant="regular"
            key={item.name}
            sx={{
              padding: "0 3rem",
              cursor: "pointer",
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
              },
            }}
            color="fontlight.main"
          >
            {item.name}
          </Typography>
        );
      })}
    </Stack>
  );
};

export default Details;
