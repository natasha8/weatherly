import Forecast from "./components/Forecast";
import { useForecast } from "./components/hook/useForeast";
import Search from "./components/Search";

const App = (): JSX.Element => {
  const {
    city,
    options,
    forecast,
    onInputChange,
    onSelect,
    onSubmit,
  } = useForecast();
  console.log("forecast", forecast);

  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-green-300 via-sky-500 to-yellow-200 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-7xl font-lorina text-transparent bg-clip-text bg-gradient-to-br from-yellow-400  via-pink-500 to-lime-500 ">
        Weatherly
      </h1>
      <section className="z-50ounded-lg w-2/3 flex flex-col items-center">
        <Search
          city={city}
          options={options}
          onInputChange={onInputChange}
          onSelect={onSelect}
          onSubmit={onSubmit}
        />

      </section>
      <section className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-lg w-2/3 h-[80vh] flex flex-col items-center justify-center" >
        {forecast && <Forecast data={forecast} />}
{}
      </section>
    </div>
  );
};

export default App;
