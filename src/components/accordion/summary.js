import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Summary = ({ name, Icon, notification, showDetails, setShowDetails }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      sx={{
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
      <Stack direction={"row"} gap={1}>
        <Icon sx={{ fontSize: "18px", color: "fontlight.main" }} />
        <Typography color="fontlight.main" variant="regular">
          {name}
        </Typography>
      </Stack>

      <Stack direction={"row"} gap={1}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "22px",
            height: "22px",
            backgroundColor: "primary.main",
            borderRadius: "50%",
          }}
        >
          <Typography color="fontlight.main" variant="regular">
            {notification}
          </Typography>
        </Stack>
        <KeyboardArrowDownIcon
          onClick={() => setShowDetails(!showDetails)}
          sx={{
            fontSize: "18px",
            color: "fontlight.main",
            transform: showDetails ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Summary;
