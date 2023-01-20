import { geoType, forecastType } from "./types/types";

type Props = {
    info: forecastType
};
const Header = ({ info }: Props): JSX.Element => {

    return (
        <div className="w-full xl:w-2/3 flex items-center justify-center pl-4">


            <div className={`w-1/2 xl:w-2/5 pr-2 xl:pr-0 order-2 xl:order-1 flex flex-col items-end justify-center xl:items-start ${info !== null && info.weather} `}>
                {info !== null && (
                    <>
                        <div className="flex items-center justify-center space-x-2 xl:space-x-4">
                            <img
                                src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
                                alt={info.weather[0].description}
                            />
                            <h2 className="font-bold text-2xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 ">
                                {Math.round(info.main.temp)}&#176;
                            </h2>
                            <p>
                                {Math.floor(info.main.temp_max)}&#176; /{" "}
                                {Math.ceil(info.main.temp_min)}
                            </p>
                        </div>
                        <p>
                            {info.name} <span className="hidden xl:inline">, {info.sys.country}</span>
                        </p></>
                )}
            </div>
            <div className="w-1/2 xl:w-3/5 order-1 xl:order-2 flex items-center justify-center">
                <h1 className="xl:rotate-0 text-4xl xl:text-7xl font-lorina font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-cyan-500 ">
                    Weatherly
                </h1>
            </div>

        </div>
    );
};

export default Header;

export const Widget = (coords: geoType): JSX.Element => {
    return <p>widget</p>;
};
