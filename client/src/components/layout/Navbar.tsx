import { MainButton } from "../common/main-button";
import { ModeToggle } from "../common/mode-toggle";

export const Navbar = () => {
	return (
		<nav className=" z-20 h-16 flex items-center sticky top-0 border-b border-b-gray-200 bg-white">
			<div className="container flex items-center justify-between">
				<div className="font-bold text-lg">PROP TRACK</div>

				{/* <div className="flex items-center gap-10">
					{NAV_LINKS.map(navLink => (
						<Link
							key={navLink.title}
							className="text- font-[500]"
							to={`/${navLink.href}`}
						>
							{navLink.title}
						</Link>
					))}
				</div> */}

				<div className="flex items-center gap-4 text- font-[500]">
					<MainButton>Login</MainButton>
					<MainButton className="bg-white text-black hover:text-white">
						AR
					</MainButton>
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
};
