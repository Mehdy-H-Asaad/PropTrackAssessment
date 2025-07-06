import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import FAQsImg from "@/assets/imgs/faqs.svg";
import { motion, Variants } from "framer-motion";
import { useAnimationOptions } from "@/shared/hooks/useAnimationOptions";
import { FAQs_DATA } from "../index";

export const FAQs = () => {
	const { staggerVariants, textAnimation, isInView } = useAnimationOptions();

	return (
		<div className="py-20 bg-[#f1f5fa] dark:bg-main-dark" id="faq">
			<div className="container">
				<div className="overflow-hidden mb-10">
					<motion.div
						variants={textAnimation as unknown as Variants}
						initial="initial"
						animate={isInView ? "enter" : ""}
						className="text-5xl font-bold w-fit mx-auto mb-20"
					>
						<span className="text-blue">
							Frequently Asked{" "}
							<span className="text-main-blue font-bold">Questions</span>
						</span>
					</motion.div>
				</div>

				<div className="flex rtl:flex-col-reverse lg:rtl:flex-row-reverse flex-col lg:flex-row justify-center gap-20">
					<Accordion type="single" collapsible className="flex-1">
						<div className="flex flex-col gap-4">
							{FAQs_DATA.map((faq, index) => (
								<motion.div
									key={faq.question}
									viewport={{ once: true }}
									variants={staggerVariants}
									initial="initial"
									whileInView="animate"
									custom={index}
								>
									<AccordionItem
										key={faq.question}
										value={`item-${faq.question}`}
									>
										<AccordionTrigger className="hover:no-underline hover:text-main-blue dark:hover:text-white dark:text-white text-lg font-[600]">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-base">
											{faq.answer}
										</AccordionContent>
									</AccordionItem>
								</motion.div>
							))}
						</div>
					</Accordion>

					<motion.img
						viewport={{ once: true }}
						initial={{ opacity: 0, marginLeft: 60 }}
						whileInView={{ opacity: 1, marginLeft: 0 }}
						transition={{ duration: 0.5 }}
						className="size-96 object-cover rounded-md !ml-auto flex-1 mx-auto"
						src={FAQsImg}
						loading="lazy"
						alt="Not found"
					/>
				</div>
			</div>
		</div>
	);
};
