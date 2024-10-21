import { Typography } from "@mui/material";

const SidebarCatRow = ({ name }) => {
  return (
    <Typography
      color="fontlight.main"
      variant="regular"    >
      {name}
    </Typography>
  );
};

export default SidebarCatRow;
