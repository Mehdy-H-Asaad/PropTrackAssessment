import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import notFoundImg from "@/assets/imgs/not-found.svg";

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-6 px-4">
				<div className="max-w-md mx-auto">
					<img
						src={notFoundImg}
						alt="Page not found"
						className="w-full h-auto max-w-sm mx-auto"
					/>
				</div>

				<div className="space-y-4">
					<h1 className="text-4xl font-bold text-foreground">404</h1>
					<h2 className="text-2xl font-semibold text-foreground">
						Page Not Found
					</h2>
					<p className="text-muted-foreground max-w-md mx-auto">
						Sorry, the page you are looking for doesn't exist or has been moved.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						onClick={() => navigate(-1)}
						variant="outline"
						className="w-full sm:w-auto"
					>
						Go Back
					</Button>
					<Button onClick={() => navigate("/")} className="w-full sm:w-auto">
						Go Home
					</Button>
				</div>
			</div>
		</div>
	);
};
