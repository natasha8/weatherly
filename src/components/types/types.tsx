export type optionType = {
    name: string;
    country: string;
    lat: number;
    lon: number;
    state: string;
};

export type forecastType = {
    name: string;
    country: string;
    list: [
        {
            dt: number;
            main: {
                feels_like: number;
                humidity: number;
                pressure: number;
                temp: number;
                temp_max: number;
                temp_min: number;
            };
            weather: [
                {
                    main: string;
                    icon: string;
                    description: string;
                }
            ];
            wind: {
                speed: number;
                gust: number;
                deg: number;
            };
            clouds: {
                all: number;
            };
            pop: number;
            visibility: number;
        }
    ];
    sunrise: number;
    sunset: number;
    sys: {
        country: string;
    }
    weather: [
        {
            main: string;
            icon: string;
            description: string;
        }
    ];
    dt: number;

    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
};

export type geoType = {
    coords: {
        latitude: number;
        longitude: number;
    };
};
