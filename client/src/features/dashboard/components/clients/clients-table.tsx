import { ClientsDataTable } from "@/features/clients";

export const ClientsTable = () => {
	return (
		<div className="py-8">
			<h1 className="text-2xl font-bold">Clients Inquiries</h1>
			<ClientsDataTable />
		</div>
	);
};
