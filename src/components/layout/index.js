import { Stack } from "@mui/material";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <Stack direction={"row"} sx={{ height: "100%", width: "100%" }}>
      <Sidebar />
      <Stack sx={{ width: "calc(100% - 236px)", height: "100%" }}>
        {children}
      </Stack>
    </Stack>
  );
};

export default Layout;
