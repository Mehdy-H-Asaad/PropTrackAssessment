import { GiTakeMyMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";

export const SERVICES_DATA = [
	{
		id: 1,
		title: "Management",
		description: "We manage your property for you",
	},
	{
		id: 2,
		title: "Sales & Marketing",
		description: "We sell your property for you",
	},
	{
		id: 3,
		title: "Property Valuation",
		description: "We value your property for you",
	},
	{
		id: 4,
		title: "Compliance",
		description: "We ensure your property is secure and compliant",
	},
	{
		id: 5,
		title: "Construction",
		description: "We build your property for you",
	},
];
export const CONTACT_DETAILS = [
	{
		id: 1,
		label: "WhatsApp",
		type: "phone",
		primary: "+971 50 123 4567",
		primaryHref: "+971 50 123 4567",
	},
	{
		id: 2,
		label: "Email",
		type: "email",
		primary: "info@prop-track.com",
	},
	{
		id: 3,
		label: "Address",
		type: "address",
		primary: "Dubai Bussiness Bay, Dubai, UAE",
	},
];
export const WELCOME_DATA = [
	{
		id: 1,
		title: "Easy Financing",
		icon: GiTakeMyMoney,
	},
	{
		id: 2,
		title: "Trusted Partners",
		icon: FaHandshake,
	},
	{
		id: 3,
		title: "Secure Transactions",
		icon: GoChecklist,
	},
];
export const FAQs_DATA = [
	{
		question: "What is Prop Track?",
		answer:
			"Prop Track is a property management company that provides a wide range of services to property owners and tenants.",
	},
	{
		question: "How can I contact Prop Track?",
		answer:
			"You can contact Prop Track by calling our office number or by sending us an email.",
	},
	{
		question: "What is the best way to contact Prop Track?",
		answer:
			"The best way to contact Prop Track is by calling our office number or by sending us an email.",
	},
	{
		question: "How to get started with Prop Track?",
		answer:
			"To get started with Prop Track, you can contact us by calling our office number or by sending us an email.",
	},
];
