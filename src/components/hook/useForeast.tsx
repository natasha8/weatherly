import { useState, ChangeEvent, useEffect } from "react"
import { forecastType, optionType } from "../types/types"

export const useForecast = () => {

    const [city, setCity] = useState<string>("")
    const [options, setOptions] = useState<[]>([])
    const [selectedCity, setSelectedCity] = useState<optionType | null>(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)


    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setCity(value)
        if (value === "") return
        getOptions(value)

    }

    const getOptions = async (option: string) => {
        try {
            const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${option}&limit=5&appid=${import.meta.env.VITE_WEATHER_API}`)
            const data = await res.json()
            setOptions(data)
        } catch (error) {
            console.log(error)
        }
    }
    const onSelect = (option: optionType) => {
        // console.log(option.name + " " + option.country, option.lat, option.lon)
        setCity(option.name)
        console.log("XXX " + option.name);

        setSelectedCity(option)


    }

    const getForecast = async (city: optionType) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`)
            const data = await res.json()

            console.log("SELECTED", { data })

            const fcData = {
                ...data.city,
                list: data.list.slice(0, 7)
            }
            setForecast(fcData)
            setCity("")

        } catch (err) {
            console.error(err)
        }
    }

    const onSubmit = () => {

        if (!selectedCity) return

        getForecast(selectedCity)
    }

    useEffect(() => {

        if (selectedCity) {
            setCity(selectedCity.name)
            setOptions([])
        }
    }, [selectedCity])
    return { city, options, forecast, onInputChange, onSelect, onSubmit }
}