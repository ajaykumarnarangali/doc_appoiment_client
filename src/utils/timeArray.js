function timeArray(working) {
    if (!working?.time) return [];

    const [startTime, endTime] = working.time.split('-');

    const toMinutes = (t) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    };

    const toTimeString = (min) => {
        const h = Math.floor(min / 60);
        const m = min % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    };

    const start = toMinutes(startTime);
    const end = toMinutes(endTime);

    const slots = [];
    const interval = 30;

    for (let t = start; t <= end; t += interval) {
        slots.push(toTimeString(t));
    }

    return slots;
}

export default timeArray