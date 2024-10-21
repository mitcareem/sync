import { Stack, Typography } from "@mui/material";

const SidebarRow = ({ Icon, name, isActive, EndIcon }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: isActive ? "primary.main" : "inherit",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        opacity: 0.8,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: 1
        },
      }}
    >
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Icon sx={{ fontSize: "18px", color: "fontlight.main" }} />
        <Typography color="fontlight.main" variant="regular">
          {name}
        </Typography>
      </Stack>
      {EndIcon && (
        <EndIcon sx={{ fontSize: "14px", color: "fontlight.main" }} />
      )}{" "}
    </Stack>
  );
};

export default SidebarRow;
