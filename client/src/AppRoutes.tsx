import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "./features/dashboard/routes/dashboard.routes";
import { homeRoutes } from "./features/home/routes/home.routes";
import { NotFound } from "./components/common";

export const AppRoutes = () => {
	const routes = [
		...homeRoutes,
		...dashboardRoutes,
		{
			path: "*",
			element: <NotFound />,
		},
	];
	return useRoutes(routes);
};
