import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './DashboardPage.module.scss';
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";
import Input from "../../Components/Input/Input";
import cn from "classnames";
import ForecastCard from "../../Components/ForecastCard/ForecastCard";
import GeneralInfoCard from "../../Components/GeneralInfoCard/GeneralInfoCard";
import {useNavigate} from "react-router";
import Button from "../../Components/Button/Button";
import DayForecastCard from "../../Components/DayForecastCard/DayForecastCard";

const DashboardPage: FC = () => {

    const {location} = useParams();

    const [weatherData, setWeatherData] = useState<AxiosResponse>();
    const [locationState, setLocationState] = useState(location)

    const navigate = useNavigate();


    const rootCls = cn(
        styles.DashboardPage,
        "px-10"
    )

    const contentCls = cn(
        "grid",
         "grid-cols-1 md:grid-cols-5",
        "mt-10",
    )

    const changeLocationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocationState(e.target.value)
    }

    const fetchWeatherData = async () => {
        try {
            const URL = `http://api.weatherapi.com/v1/forecast.json?key=8630ff89e58549dba2d82630230707&q=${location}&days=7&aqi=no&alerts=yes`
            const response = await axios.get(URL);
            setWeatherData(response)
        } catch (error) {
            console.log(error)
        }
    }

    const searchHandler=()=>{
        if(locationState===""){
            return
        }
        console.log("navigate")
        navigate(`/dashboard/${locationState}`)
    }

    useEffect(() => {
        fetchWeatherData()
    }, [location])

    return (
        <div className={rootCls}>
            <div className={"flex items-center justify-center"}>
                <Input className={"w-3/4"} type={"text"} placeholder={"Search Location"} label={""} value={locationState} name={"location"}
                       onChange={changeLocationHandler}/>
                <Button onClick={searchHandler} className={"mt-4"} type={"button"}>Search</Button>
            </div>
            {weatherData && <div className={contentCls}>
                <div className={"col-span-3"}>
                    <GeneralInfoCard
                        name={weatherData?.data.location.name}
                        precip_mm={weatherData?.data.current.precip_mm}
                        feelslike_c={weatherData?.data.current.feelslike_c}
                        icon={weatherData?.data.current.condition.icon}/>
                    <DayForecastCard className={"mt-10"} hour={weatherData?.data.forecast.forecastday[0].hour}/>
                </div>
                <div className={"col-span-2 mt-8 md:mt-0 md:ml-10"}>
                    <ForecastCard forecastday={weatherData?.data.forecast.forecastday}/>
                </div>
            </div>}


        </div>
    )
};

export default DashboardPage;
