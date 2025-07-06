import PropertyImage from "@/assets/imgs/property.webp";
export const StackedPropertyImage = ({
	handleOpen,
}: {
	handleOpen: (img: string) => void;
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 md:h-[400px]">
			{/* Large Image */}
			<div className="md:w-2/3 w-full h-full">
				<img
					src={PropertyImage}
					alt="Property Image"
					className="w-full h-full object-cover rounded-lg cursor-pointer"
					onClick={() => handleOpen(PropertyImage)}
				/>
			</div>

			{/* Two Stacked Images */}
			<div className="md:w-1/3 w-full flex flex-col gap-2 h-[calc(100%-8px)]">
				<img
					src={PropertyImage}
					alt="Property Image"
					className="w-full h-1/2 object-cover rounded-lg cursor-pointer"
					onClick={() => handleOpen(PropertyImage)}
				/>
				<img
					src={PropertyImage}
					alt="Property Image"
					className="w-full h-1/2 object-cover rounded-lg cursor-pointer"
					onClick={() => handleOpen(PropertyImage)}
				/>
			</div>
		</div>
	);
};
