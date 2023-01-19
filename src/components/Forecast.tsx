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
        <div className="bg-yellow-500/20 w-full h-full space-y-4 backdrop-blur-lg drop-shadow-lg flex flex-col items-center justify-center">
            <div className="w-11/12 flex items-center justify-center py-4">
                <h1 className="font-bold text-3xl">
                    {data.name}
                    <span className="font-extralight px-4">{data.country}</span>
                </h1>
                <div className="flex items-center justify-center space-x-4">
                    <h2 className="font-bold text-4xl">
                        {Math.ceil(data.list[0].main.temp)}&#176;
                    </h2>
                    <p>
                        {Math.round(data.list[0].main.temp_max)}&#176; /{" "}
                        {Math.floor(data.list[0].main.temp_min)}
                    </p>
                    <h3 className="font-light uppercase">
                        {data.list[0].weather[0].description}
                    </h3>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center" >
                <section className="w-full flex overflow-x-hidden overflow-y-hidden pb-4">
                    {data.list &&
                        data.list.map((item, index) => (
                            <div
                                key={index}
                                className="w-[200px] flex flex-col items-center justify-center"
                            >
                                <p>
                                    {index === 0
                                        ? "Now"
                                        : new Date(item.dt * 1000).getHours()}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt={item.weather[0].description}
                                />
                                <p>
                                    {Math.round(data.list[index].main.temp_max)}&#176; /{Math.floor(data.list[0].main.temp_min)} &#176;
                                </p>
                            </div>
                        ))}
                </section>
                <section className="w-full flex justify-evenly bg-white/50 ">
                    <div className=" flex items-center justify-center bg-white">
                        <img src={sunrise} alt="sunrise" className="" />
                        <p className="absolute text-3xl pt-5">
                            {getSunTime(data.sunrise)}
                        </p>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-white">
                        <img src={sunset} alt="sunset" className="w-5/6" />
                        <p className="absolute text-3xl pt-5">
                            {getSunTime(data.sunset)}
                        </p>
                    </div>
                    <div className="flex flex-col p-4 ">
                        <div className="flex space-x-3 items-center">
                            <p className="text-xl font-bold uppercase">wind</p>{" "}
                            <WiStrongWind className="text-4xl" />
                        </div>
                        <p>direction: {getWindDir(data.list[0].wind.deg)} </p>

                        <p>gust: {data.list[0].wind.gust} km/h</p>
                        <p>speed: {data.list[0].wind.speed} km/h</p>

                    </div>
                    <div className="flex flex-col py-4">
                        <div className="flex space-x-3 items-center pl-1">
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
                </section>

            </div>
        </div>
    );
};

export default Forecast;
