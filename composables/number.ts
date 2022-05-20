export function handleRatio(x: number, y: number):string {
    return (x/y).toFixed(2);
}

export function handlePercent(x: number, y: number):string {
    return ((x * 100) / y).toFixed(1);
}

export function secToTime(d) {
    // <3 25karma
	if (d === undefined) return "-";
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);

	var hDisplay = h > 0 ? h + "h" : null;
	var mDisplay = m > 0 ? m + "m" : null;
	var sDisplay = s > 0 ? s + "s" : null;
	return [hDisplay, mDisplay, sDisplay].filter(n => n).join(', ');
}