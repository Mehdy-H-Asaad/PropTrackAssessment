import { HeroSection } from "../index";
import { SingleProperty } from "@/features/properties";
import { RouteObject } from "react-router-dom";
import { WelcomeSection } from "../index";
import { Services } from "../index";
import { ContactSection } from "../index";
import { FeaturedProperties } from "@/features/properties";
import { PropertyListing } from "@/features/properties";
import { FAQs } from "../index";
import { MainLayout } from "@/components/layout/main-layout";

export const homeRoutes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "",
				element: (
					<>
						<HeroSection />
						<WelcomeSection />
						<Services />
						<FeaturedProperties />
						<FAQs />
						<ContactSection />
					</>
				),
			},
			{
				path: "properties",
				children: [
					{
						path: "",
						element: <PropertyListing />,
					},
					{
						path: ":id",
						element: <SingleProperty />,
					},
				],
			},
		],
	},
];
