import { forecastType } from "./types/types";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

import { getHumidity, getSunTime, getWindDir } from "./helpers";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import {
    TbArrowDown,
    TbArrowUp,
    TbCloudRain,
    TbTemperatureMinus,
} from "react-icons/tb";

type Props = {
    data: forecastType;

};

const Forecast = ({ data }: Props): JSX.Element => {
    return (
        <div className="bg-pink-500/20 w-full h-full space-y-4 backdrop-blur-lg drop-shadow-lg flex flex-col items-center justify-center">
            <div className="w-11/12 flex items-center justify-between py-4">
                <h1 className="font-bold xl:text-3xl">
                    {data.name}
                    <span className="hidden xl:inline font-extralight px-4">{data.country}</span>
                </h1>
                <div className="flex items-center justify-center space-x-4">
                    <h2 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-cyan-500">
                        {Math.round(data.list[0].main.temp)}&#176;
                    </h2>
                    <p>
                        {Math.floor(data.list[0].main.temp_max)}&#176; /{" "}
                        {Math.ceil(data.list[0].main.temp_min)}
                    </p>
                    <h3 className="font-light uppercase">
                        {data.list[0].weather[0].description}
                    </h3>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center" >
                <section className="w-full flex overflow-x-scroll bg-darkish scroll-smooth scrollbar-hide overflow-y-hidden pb-4">
                    {data.list &&
                        data.list.map((item, index) => (
                            <div
                                key={index}
                                className="w-56 flex flex-col items-center justify-center border-2"
                            >
                                <p>
                                    {index === 0
                                        ? "Now"
                                        : `${new Date(item.dt * 1000).getHours()}:00`}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                                    alt={item.weather[0].description}
                                />
                                <p>
                                    {Math.floor(data.list[index].main.temp_max)}&#176; /{Math.ceil(data.list[0].main.temp_min)} &#176;
                                </p>
                            </div>
                        ))}
                </section>
                <section className="w-full flex flex-col xl:flex-row justify-evenly bg-white/50 ">
                    <div className="w-full xl:w-1/3 flex items-center justify-center bg-white">

                        <div className=" flex items-center justify-center">
                            <img src={sunrise} alt="sunrise" className="" />
                            <p className="absolute text-3xl pt-5">
                                {getSunTime(data.sunrise)}
                            </p>
                        </div>
                        <div className="flex items-center justify-center bg-white">
                            <img src={sunset} alt="sunset" className="" />
                            <p className="absolute text-3xl pt-5">
                                {getSunTime(data.sunset)}
                            </p>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/3 flex flex-col p-4">
                        <div className="w-1/2 flex space-x-3 items-center pl-2">
                            <TbTemperatureMinus className="text-4xl text-gray-600" />{" "}
                            <p className="text-xl font-bold uppercase">
                                Feels like
                            </p>
                            <div className="flex items-center">
                                <p className="pl-1 text-4xl">
                                    {Math.round(data.list[0].main.feels_like)}
                                </p>
                                {Math.round(data.list[0].main.feels_like) >
                                    Math.round(data.list[0].main.temp) ? (
                                    <TbArrowUp className="text-xl text-red-500" />
                                ) : (
                                    <TbArrowDown className="text-xl text-cyan-500" />
                                )}
                            </div>
                        </div>

                        <div className="py-4 flex space-x-3 items-center">
                            <WiHumidity className="text-4xl text-cyan-500" />
                            <p>
                                Humidity: {data.list[0].main.humidity}% -{" "}
                                {getHumidity(data.list[0].main.humidity)}
                            </p>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <TbCloudRain className="text-4xl text-gray-500" />
                            <p>
                                Precipitation{" "}
                                {Math.round(data.list[0].pop * 100)}% - clouds
                                at {data.list[0].clouds.all}%
                            </p>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/3 flex flex-col pl-6 py-6 space-y-3">
                        <div className="flex space-x-3 items-center">
                            <p className="text-xl font-bold uppercase">wind</p>{" "}
                            <WiStrongWind className="text-4xl" />
                        </div>
                        <p>direction: {getWindDir(data.list[0].wind.deg)} </p>

                        <p>gust: {data.list[0].wind.gust} km/h</p>
                        <p>speed: {data.list[0].wind.speed} km/h</p>

                    </div>
                    
                </section>

            </div>
        </div>
    );
};

export default Forecast;
