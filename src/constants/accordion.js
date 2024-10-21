import AlbumIcon from "@mui/icons-material/Album";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";

const accordionData = [
  {
    name: "Artist Tools",
    picon: AlbumIcon,
    sicon: AlbumOutlinedIcon,
    notification: 3,
    data: [
      { name: "Dashboard" },
      { name: "My Tracks" },
      { name: "Promotion" },
      { name: "Content ID" },
      { name: "Distribution" },
      { name: "Staking Pool" },
      { name: "Voting Polls" },
    ],
  },
  {
    name: "Creator Tools",
    picon: VideocamIcon,
    sicon: VideocamOutlinedIcon,
    notification: 1,
    data: [
      { name: "Dashboard" },
      { name: "Challenges" },
      { name: "Staking Pool" },
      { name: "Voting Polls" },
    ],
  },
  {
    name: "Brand Tools",
    picon: BrandingWatermarkIcon,
    sicon: BrandingWatermarkOutlinedIcon,
    notification: 2,
    data: [
      { name: "Dashboard" },
      { name: "Challenges" },
      { name: "Staking Pool" },
      { name: "Voting Polls" },
    ],
  },
];

export default accordionData;
