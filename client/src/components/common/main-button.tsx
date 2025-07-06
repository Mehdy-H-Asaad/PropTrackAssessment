import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type TMainButtonProps = {
	children: React.ReactNode;
	disabled?: boolean;
	isLoading?: boolean;
	loadingText?: string;
} & React.ComponentProps<typeof Button>;

export const MainButton = ({
	children,
	className,
	isLoading,
	loadingText,
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
			{isLoading ? (
				<div className="flex items-center gap-2">
					<Loader2 className="animate-spin" />
					<span>{loadingText}</span>
				</div>
			) : (
				<>{children}</>
			)}
		</Button>
	);
};
