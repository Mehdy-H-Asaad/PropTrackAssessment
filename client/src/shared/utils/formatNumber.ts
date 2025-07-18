export const formatNumber = (number: number): string => {
	return number.toLocaleString("en-US", {
		minimumFractionDigits: 0,
	});
};
