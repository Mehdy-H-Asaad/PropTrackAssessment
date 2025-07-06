import { RouteObject } from "react-router-dom";
import { DashboardMainLayout } from "../index";
import { PropertiesTable } from "../index";
import { CreateProperty } from "@/features/properties";
import { UpdateProperty } from "@/features/properties";
import { ClientsTable } from "../index";
import { ViewingsTable } from "../index";

export const dashboardRoutes: RouteObject[] = [
	{
		path: "/dashboard",
		element: <DashboardMainLayout />,
		children: [
			{
				path: "properties",
				element: <PropertiesTable />,
			},
			{
				path: "properties/create",
				element: <CreateProperty />,
			},
			{
				path: "properties/update/:id",
				element: <UpdateProperty />,
			},
			{
				path: "clients",
				element: <ClientsTable />,
			},
			{
				path: "viewings",
				element: <ViewingsTable />,
			},
		],
	},
];
