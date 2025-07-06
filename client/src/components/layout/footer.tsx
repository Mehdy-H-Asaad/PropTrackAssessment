import { NAV_LINKS, SOCIAL_MEDIA_FOOTER_LINKS } from "@/shared/data/data";
export const Footer = () => {
	return (
		<div
			className=" pb-20 text-white bg-black relative h-[700px] -z-20"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed h-[700px] bottom-0 w-full flex flex-col justify-between p-20 text-white">
				<div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-start ">
					<div className="flex flex-col gap-4">
						<div className="text-4xl font-bold">Prop Track</div>
						<p className="text-sm w-1/2">
							Prop Track is a property management company that provides a wide
							range of services to property owners and tenants.
						</p>
					</div>

					<div>
						<h1 className="text-4xl mb-6 font-bold">Company</h1>
						<div className="flex flex-col gap-4">
							{NAV_LINKS.slice(0, 3).map((link, index) => (
								<div key={index}>{link.title}</div>
							))}
						</div>
					</div>

					<div>
						<h1 className="text-4xl mb-6 font-bold">Social Media</h1>
						<div className="flex gap-4">
							{SOCIAL_MEDIA_FOOTER_LINKS.map((link, index) => (
								<div key={index}>{link.icon}</div>
							))}
						</div>
					</div>
				</div>

				<p className="text-8xl tracking-widest mt-20 font-bold">Prop Track</p>
			</div>
		</div>
	);
};
