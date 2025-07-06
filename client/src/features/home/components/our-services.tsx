import { useAnimationOptions } from "@/shared/hooks/useAnimationOptions";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { SERVICES_DATA } from "../index";

export const Services = () => {
	const { isInView, ref, staggerVariants, textAnimation } =
		useAnimationOptions();

	return (
		<div className="py-20 bg-[#f1f5fa] dark:bg-[#171717]" id="services">
			<div className="container">
				<div ref={ref}>
					<div className="overflow-hidden mb-10">
						<motion.div
							variants={textAnimation as unknown as Variants}
							initial="initial"
							animate={isInView ? "enter" : ""}
							className="text-5xl font-bold w-fit mx-auto"
						>
							<span className="text-blue">
								Our <span className="text-main-blue font-bold">Services</span>
							</span>
						</motion.div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
					{SERVICES_DATA.map((work, index) => (
						<motion.div
							viewport={{ once: true }}
							variants={staggerVariants as unknown as Variants}
							initial="initial"
							whileInView="animate"
							custom={index}
							key={work.id}
							className="flex flex-col gap-4 items-center"
						>
							<div key={work.id} className="font-bold text-6xl ">
								<span className="how-we-work-num">0</span>
								{index + 1}
							</div>
							<div className="font-bold text-xl">{work.title}</div>
							<p className="rtl:text-base text-sm text-center">
								{work.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
