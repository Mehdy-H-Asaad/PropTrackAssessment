import WelcomeImg from "@/assets/imgs/welcome-img.svg";
import { useAnimationOptions } from "@/shared/hooks/useAnimationOptions";
import { motion, Variants } from "framer-motion";
import { WELCOME_DATA } from "../index";

export const WelcomeSection = () => {
	const { isInView, ref, staggerVariants, textAnimation } =
		useAnimationOptions();

	return (
		<div className="py-20 ">
			<div className="container">
				<div className="flex rtl:flex-col-reverse rtl:lg:flex-row-reverse flex-col items-center lg:items-start lg:flex-row justify-center gap-20">
					<motion.img
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className=" object-cover rounded-md flex-1 max-w-[600px] w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px]"
						src={WelcomeImg}
						alt="Not found"
						loading="lazy"
					/>

					<div ref={ref} className="flex flex-col gap-10 flex-1 ">
						<div className="overflow-hidden rtl:overflow-visible">
							<motion.div
								variants={textAnimation as unknown as Variants}
								initial="initial"
								animate={isInView ? "enter" : ""}
								className="text-4xl font-bold"
							>
								<span className="text-blue">
									Welcome to <span className="text-main-blue">Prop Track</span>
								</span>
							</motion.div>
						</div>
						<div className="overflow-hidden">
							<motion.p
								variants={textAnimation as unknown as Variants}
								initial="initial"
								animate={isInView ? "enter" : ""}
								className="text-lg"
							>
								Welcome to Prop Track, your trusted partner in real estate.
							</motion.p>
						</div>

						<div className="overflow-hidden">
							<motion.p
								variants={textAnimation as unknown as Variants}
								initial="initial"
								animate={isInView ? "enter" : ""}
							>
								Our mission is to provide you with the best possible service and
								support in your real estate journey.
							</motion.p>
						</div>
						<div className="flex gap-10	 flex-wrap">
							{WELCOME_DATA.map((item, index) => {
								const IconComponent = item.icon;
								return (
									<motion.div
										key={item.id}
										variants={staggerVariants}
										initial="initial"
										viewport={{ once: true }}
										whileInView="animate"
										custom={index}
										className="flex  gap-2"
									>
										<div>{<IconComponent size={28} />}</div>
										<div className="text-lg font-[600]">{item.title}</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
