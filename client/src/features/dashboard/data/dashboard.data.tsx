import { LuBuilding2 } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

export const DASHBOARD_NAV_LINKS = [
	{
		id: 2,
		name: "Properties",
		icon: <LuBuilding2 size={20} />,
		link: "/dashboard/properties",
	},
	{
		id: 3,
		name: "Clients",
		icon: <BsPeople size={20} />,
		link: "/dashboard/clients",
	},
	{
		id: 4,
		name: "Viewings",
		icon: <IoMdTime size={20} />,
		link: "/dashboard/viewings",
	},
];
