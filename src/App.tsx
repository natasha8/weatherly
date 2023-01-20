import Forecast from "./components/Forecast";
import { useForecast } from "./components/hook/useForeast";
import NavSearch from "./components/NavSearch";
import Clouds from "./assets/Clouds.png";
import CloudNight from "./assets/CloudNight.png";
import ClearNight from "./assets/ClearNight.png";
import Rain from "./assets/Rain.png";
import Clear from "./assets/Sun.png";
import Snow from "./assets/Snow.png";


const App = (): JSX.Element => {
  const {
    city,
    options,
    forecast,
    info,
    onInputChange,
    onSelect,
    onSubmit,
  } = useForecast();

  console.log(info);

  const hours = new Date().getHours();
  const isDayTime: boolean = hours > 6 && hours < 18;

  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-green-300 via-sky-500 to-yellow-200 flex flex-col items-center space-y-4">
      <section className="z-50 rounded-lg w-11/12 xl:w-2/3 flex flex-col items-center">
        <NavSearch
          info={info}
          city={city}
          options={options}
          onInputChange={onInputChange}
          onSelect={onSelect}
          onSubmit={onSubmit}
        />
      </section>
      <section
        className={`relative backdrop-blur-lg drop-shadow-lg rounded-lg w-11/12 xl:w-2/3 h-[80vh] flex flex-col items-center justify-center`}
      >
        {forecast && <Forecast data={forecast} />}
        {info && !forecast && (
          <div className="w-full bg-white/20 rounded-xl">
            <p className="font-lorina font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-cyan-500 ">
              It seems to be {info.weather[0].description}
            </p>
            <div className={`${isDayTime ? "bg-white/20": "bg-black/20"} w-full flex items-center justify-center`}>
              {info.weather[0].main === "Clouds" && isDayTime && (
                <img

                  src={Clouds}
                  alt={info.weather[0].description}
                />

              )}
              {info.weather[0].main === "Clouds" && !isDayTime && (


                <img

                  src={CloudNight}
                  alt={info.weather[0].description}
                />


              )}
              {info.weather[0].main === "Rain" && (
                <img
                  className=""
                  src={Rain}
                  alt={info.weather[0].description}
                />
              )}{" "}
              {info.weather[0].main === "Clear" && isDayTime && (
                <img
                  className=""
                  src={Clear}
                  alt={info.weather[0].description}
                />

              )}
              {info.weather[0].main === "Clear" && !isDayTime && (
                <div className="bg-black">

                  <img
                    className=""
                    src={ClearNight}
                    alt={info.weather[0].description}
                  />
                </div>

              )}
              {info.weather[0].main === "Snow" && (
                <img
                  className=""
                  src={Snow}
                  alt={info.weather[0].description}
                />
              )}
            </div>

            <p className="font-lorina font-bold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-cyan-500">
              in {info.name}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
