import React, {FC} from 'react';
import ForecastItem from "../ForecastItem/ForecastItem";
import Card from "../Card/Card";
import {RegularSubtitle} from "../Typography/Typography";

export interface ForecastCardProps {
    forecastday:{
        date: string;
        day: {
            maxtemp_c: number
            mintemp_c: number
            condition: {
                text: string
                icon: string
            }
        }
    }[]
}

const ForecastCard:FC<ForecastCardProps> = ({forecastday}) => {

    return (
        <Card>
            <RegularSubtitle bold={true}>7-Day Forecast</RegularSubtitle>
            {forecastday && forecastday.map((item:any,index:number)=>{
                return <ForecastItem key={index} date={item.date} day={item.day}/>
            })}
        </Card>)
}

export default ForecastCard;