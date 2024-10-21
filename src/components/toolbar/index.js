import { Stack } from "@mui/material";
import SidebarCatRow from "../sidebar-cat-row";
import SidebarRow from "../sidebar-row";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import Accordion from "../accordion";
import accordionData from "@/constants/accordion";

const Toolbar = () => {
  return (
    <Stack gap={1} sx={{ padding: "2rem 1rem 0 1rem" }}>
      <SidebarCatRow name={"Toolbar"} />
      <Stack gap={1}>
        <SidebarRow Icon={Diversity2OutlinedIcon} name={"My Participations"} />
        {accordionData?.map((item) => {
          return <Accordion item={item} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Toolbar;
