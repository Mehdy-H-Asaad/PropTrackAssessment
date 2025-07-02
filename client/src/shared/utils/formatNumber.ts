export const formatNumber = (number: number): string => {
	return number.toLocaleString("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
};
