import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "../ui/dialog";

type TDeleteDialog = {
	deleteFunc: () => void;
	trigger: string;
	isLoading: boolean;
};

export const DeleteDialog = ({
	deleteFunc,
	trigger,
	isLoading,
}: TDeleteDialog) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="mb-2 bg-red-600 duration-200 text-white hover:bg-red-700 hover:!text-white cursor-pointer w-full text-sm text-center justify-center px-4 py-2 font-[500] flex rounded-sm">
					{trigger}
				</button>
			</DialogTrigger>
			<DialogContent className="bg-white dark:bg-main-dark text-black dark:text-white">
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will be permanently deleted and
						removed from our servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							variant="outline"
							className="border text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white duration-200"
						>
							Cancel
						</Button>
					</DialogClose>
					<Button
						disabled={isLoading}
						onClick={deleteFunc}
						className="capitalize duration-200 hover:bg-red-700 hover:text-white text-white bg-red-600"
					>
						{isLoading ? "Deleting..." : trigger}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
