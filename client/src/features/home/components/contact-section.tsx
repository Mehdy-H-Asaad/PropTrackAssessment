import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useAnimationOptions } from "@/shared/hooks/useAnimationOptions";
import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT_DETAILS } from "../index";

export const ContactSection = () => {
	const googleMap = useMemo(
		() => (
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.159542891332!2d55.26389275044174!3d25.185009493497407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1751672910595!5m2!1sen!2sae"
				width="600"
				height="450"
				style={{ border: "0" }}
				allowFullScreen={true}
				loading="lazy"
				className="w-full"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		),
		[]
	);

	const { isInView, ref, staggerVariants, textAnimation } =
		useAnimationOptions();

	return (
		<div className="py-20 dark:py-20" id="contact">
			<div ref={ref}>
				<div className="overflow-hidden">
					<motion.div
						variants={textAnimation as unknown as Variants}
						initial="initial"
						animate={isInView ? "enter" : ""}
						className="text-5xl mb-2 font-bold w-fit mx-auto"
					>
						<span className="text-blue">
							Contact <span className="text-main-blue font-bold">Us</span>
						</span>
					</motion.div>
				</div>
				<div className="overflow-hidden mb-10">
					<motion.p
						variants={textAnimation as unknown as Variants}
						initial="initial"
						animate={isInView ? "enter" : ""}
						className="mx-auto w-fit"
					>
						Contact us for any questions or inquiries.
					</motion.p>
				</div>
			</div>
			<div className="container">
				<div className="flex rtl:flex-col-reverse lg:rtl:flex-row-reverse justify-between flex-col lg:flex-row gap-20">
					<div className="flex-1 flex-col flex gap-10">
						<div>{googleMap}</div>
					</div>

					<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
							{CONTACT_DETAILS.map((contact, index) => (
								<motion.div
									variants={staggerVariants as unknown as Variants}
									initial="initial"
									whileInView="animate"
									custom={index}
									viewport={{ once: true }}
									key={contact.id}
									className="flex flex-col gap-2 border border-blue rounded-md py-4 px-6 items-center justify-center text-center"
								>
									<div className="text-lg font-bold">
										{contact.label == "WhatsApp" ||
										contact.label == "واتساب" ? (
											<FaWhatsapp size={24} />
										) : (
											contact.label
										)}
									</div>
									{contact.type === "email" || contact.type === "phone" ? (
										<>
											<a
												dir="ltr"
												className="text-sm duration-200 hover:text-blue"
												href={
													contact.type === "email"
														? `mailto:${contact.primary}`
														: `https://wa.me/${contact.primaryHref}`
												}
												target="_blank"
											>
												{contact.primary}
											</a>
										</>
									) : contact.type === "address" ? (
										<>
											<div className="text-sm">{contact.primary}</div>
										</>
									) : (
										""
									)}
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
