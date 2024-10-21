import { Stack, Avatar, Typography } from "@mui/material";
import assets from "@/constants/assets";

const BrandLogo = () => {
  return (
    <Stack direction={"row"} gap={1}>
      <Avatar
        src={assets.brandLogo.src}
        alt="brand-logo"
        sx={{ height: "22.74px", width: "22.74px" }}
      />
      <Typography
        variant="logo"
        color="fontlight.main"
        sx={{fontWeight: 700 }}
      >
        SyncVault
      </Typography>
    </Stack>
  );
};

export default BrandLogo;
