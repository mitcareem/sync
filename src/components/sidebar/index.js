import { Stack } from "@mui/material";
import BrandLogo from "../brand-logo";
import SidebarRow from "../sidebar-row";
import SidebarCatRow from "../sidebar-cat-row";
import HomeIcon from "@mui/icons-material/Home";
import sidebarTabs from "@/constants/sidebar";
import Toolbar from "../toolbar";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar = () => {
  return (
    <Stack sx={{ width: "236px", height: "100%" }}>
      {/*section  */}
      <Stack
        justifyContent={"space-between"}
        sx={{
          height: "72px",
          padding: "2rem 1rem 0 1rem",
        }}
      >
        <BrandLogo />
      </Stack>

      {/*section  */}
      <Stack
        gap={1}
        sx={{
          height: "calc(100% - 188px)",
          paddingBottom: "2rem",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3e5056",
            borderRadius: "4px",
          },
        }}
      >
        <Stack
          justifyContent={"flex-end"}
          sx={{ height: "50px", padding: "2rem 1rem 0 1rem" }}
        >
          <SidebarRow Icon={HomeIcon} name={"Get Started"} isActive={true} />
        </Stack>

        {sidebarTabs?.map((item) => {
          return (
            <Stack key={item.name} sx={{ padding: "2rem 1rem 0 1rem" }} gap={1}>
              <SidebarCatRow name={item.name} />
              {item.tabs.map((tab) => {
                return (
                  <SidebarRow key={tab.name} Icon={tab.icon} name={tab.name} />
                );
              })}
            </Stack>
          );
        })}
        <Toolbar />
      </Stack>

      {/*section  */}
      <Stack
        justifyContent={"space-around"}
        sx={{
          height: "116px",
          padding: "1rem",
        }}
      >
        <SidebarRow
          Icon={PersonOutlineIcon}
          name={"Profile Settings"}
          EndIcon={ArrowForwardIosIcon}
        />
        <SidebarRow Icon={ExitToAppIcon} name={"Exit App"} />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
