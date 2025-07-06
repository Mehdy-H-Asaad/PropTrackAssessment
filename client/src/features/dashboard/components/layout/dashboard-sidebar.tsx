import { Link, NavLink } from "react-router-dom";
import { DASHBOARD_NAV_LINKS } from "../../index";

export const DashboardSidebar = () => {
	return (
		<div className="bg-white dark:bg-[#121211] border-r border-gray-200 dark:border-[#ffffff1e] flex flex-col gap-10 p-8 h-screen fixed top-0 left-0 z-10 shadow-sm w-64">
			<div className="flex flex-col gap-4">
				<Link to="/">
					<h1 className="text-xl font-bold">Prop Track Admin</h1>
				</Link>
				{/* <hr /> */}
			</div>

			<div className="flex flex-col gap-4">
				{DASHBOARD_NAV_LINKS.map(link => (
					<NavLink
						className={({ isActive }) =>
							`flex items-center gap-2 text-sm font-semibold ${
								isActive ? "bg-main-blue text-white" : ""
							} hover:bg-main-blue hover:text-white duration-200 py-2 px-3 rounded-lg`
						}
						to={link.link}
						key={link.id}
					>
						{link.icon}
						{link.name}
					</NavLink>
				))}
			</div>
		</div>
	);
};
