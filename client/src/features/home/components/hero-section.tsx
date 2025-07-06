import { MainButton } from "@/components/common/main-button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const HeroSection = () => {
	return (
		<div className=" hero-bg h-[700px] sm:h-screen flex items-center justify-center ">
			<div className="container">
				<div className="relative flex items-center justify-center">
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-white flex flex-col gap-10 items-center"
					>
						<div className="text-3xl md:text-5xl lg:text-7xl max-w-[60rem] text-center">
							<span className="font-[900] text-blue">
								Find Your Dream Home <br /> With Prop Track
							</span>
						</div>
						<p className="text-xl sm:text-3xl text-center max-w-[40rem]">
							Browse our properties and find your dream home in Dubai and
							Sharjah.
						</p>
						<Link to="/properties">
							<MainButton>Browse Properties</MainButton>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
