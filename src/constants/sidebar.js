import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

const sidebarTabs = [
  {
    name: "Web2",
    tabs: [
      { icon: StormOutlinedIcon, name: "Use & Earn" },
      { icon: MusicNoteOutlinedIcon, name: "Claim-Free Music" },
    ],
  },
  {
    name: "Web3",
    tabs: [
      { icon: QuestionAnswerOutlinedIcon, name: "Quests" },
      { icon: AssistantOutlinedIcon, name: "Staking Pools" },
      { icon: PollOutlinedIcon, name: "Voting Polls" },
    ],
  },
];

export default sidebarTabs;
