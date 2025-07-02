import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type TMainButtonProps = {
	children: React.ReactNode;
	disabled?: boolean;
} & React.ComponentProps<typeof Button>;

export const MainButton = ({
	children,
	className,
	...props
}: TMainButtonProps) => {
	return (
		<Button
			className={cn(
				`bg-main-blue text-white px-4 py-2 rounded-md duration-300 hover:bg-[#005cbe] font-semibold`,
				className
			)}
			{...props}
		>
			{children}
		</Button>
	);
};
