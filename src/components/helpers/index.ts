export const getSunTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);

    let hours = date.getHours().toString();
    let min = date.getMinutes().toString();

    if (hours.length <= 1) {
        hours = `0${hours}`;
    }
    if (min.length <= 1) {
        min = `0${min}`;
    }
    return `${hours}:${min}`;
};

export const getWindDir = (deg: number): string => {
    if (deg > 15 && deg <= 75) return "NE";
    if (deg > 76 && deg <= 105) return "E";
    if (deg > 106 && deg <= 165) return "SE";
    if (deg > 166 && deg <= 195) return "S";
    if (deg > 196 && deg <= 255) return "SW";
    if (deg > 256 && deg <= 285) return "W";
    if (deg > 286 && deg <= 345) return "NW";
    return "N";
};

export const getHumidity = (lev: number): string => {
    if (lev <= 55) {
        return "Dry & Confortable";
    } else {
        return "Sticky Feeling";
    }
};
