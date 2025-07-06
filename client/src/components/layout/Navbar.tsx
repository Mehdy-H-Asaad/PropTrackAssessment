import { useEffect, useState } from "react";
import { MainButton } from "../common/main-button";
import { ModeToggle } from "../common/mode-toggle";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const pathname = useLocation();
	const onlyHomePage = pathname.pathname === "/";

	return (
		<nav
			className={` bg-transparent z-20 duration-300 h-16 flex items-center fixed w-full top-0  ${
				isScrolled || !onlyHomePage
					? "bg-white dark:bg-[#121211] shadow-2xs dark:shadow-[#ffffff1e] text-black dark:text-white	"
					: "bg-transparent"
			}`}
		>
			<div className="container flex items-center justify-between">
				<Link to="/">
					<div
						className={`font-bold text-lg ${
							isScrolled || !onlyHomePage
								? "text-black dark:text-white"
								: "text-white"
						}`}
					>
						PROP TRACK
					</div>
				</Link>
				<div className="flex items-center gap-4 font-[500]">
					<Link to="/dashboard/properties">
						<MainButton>Dashboard</MainButton>
					</Link>

					<ModeToggle />
				</div>
			</div>
		</nav>
	);
};
