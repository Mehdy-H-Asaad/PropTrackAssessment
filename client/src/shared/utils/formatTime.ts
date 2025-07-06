export const formatTime = (time: string) => {
	let formattedTime = time;
	if (time) {
		const [hourStr, minuteStr] = time.split(":");
		let hour = parseInt(hourStr, 10);
		const minute = minuteStr || "00";
		const ampm = hour >= 12 ? "pm" : "am";
		hour = hour % 12 || 12;
		formattedTime = `${hour}:${minute} ${ampm}`;
	}
	return formattedTime;
};
