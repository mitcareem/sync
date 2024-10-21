"use client";
import { useState } from "react";
import { Stack, Collapse } from "@mui/material";
import Summary from "./summary";
import Details from "./details";

const Accordion = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Stack>
      <Summary
        name={item.name}
        Icon={showDetails ? item.picon : item.sicon}
        notification={item.notification}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      <Collapse in={showDetails} sx={{}}>
        <Details data={item.data} />
      </Collapse>
    </Stack>
  );
};

export default Accordion;
