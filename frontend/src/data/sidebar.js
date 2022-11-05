import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
const menu = [
  {
    title: "Boshqaruv paneli",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Mahsulot qo'shish",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Hisobingiz",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profil",
        path: "/profile",
      },
      {
        title: "Profilni tahrirlash",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Xato haqida xabar berish",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
  {
    title: "AGENTS",
    icon: <BsPersonCircle />,
    childrens: [
      {
        title: "AGENT1",
        path: "/agents/:id",
      },
      {
        title: "AGENT2",
        path: "/agents/:id",
      },
    ],
  },
];

export default menu;
