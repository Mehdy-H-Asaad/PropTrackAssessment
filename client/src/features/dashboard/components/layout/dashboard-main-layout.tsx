import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "@/features/dashboard";

export const DashboardMainLayout = () => {
	return (
		<>
			<DashboardSidebar />
			<div className="ml-64">
				<div className="container max-w-9xl mx-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
};
