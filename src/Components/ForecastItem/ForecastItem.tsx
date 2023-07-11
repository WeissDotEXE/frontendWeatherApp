import React, {FC} from 'react';
import {RegularSubtitle} from "../Typography/Typography";
import cn from "classnames";

interface ForecastItemProps{
    date: string;
    day: {
        maxtemp_c: number
        mintemp_c: number
        condition: {
            text: string
            icon: string
        }
    }
}

const ForecastItem: FC<ForecastItemProps> = (props:ForecastItemProps) => {

    const {date,day}=props;

    const rootCls=cn(
        "flex",
        "justify-between",
        "items-center",
        "border-b-2",
        "py-4"
    )

    return (
        <div className={rootCls}>
            <RegularSubtitle>{date}</RegularSubtitle>
            <div className={"flex justify-center items-center"}>
                <img src={day.condition.icon} alt={""}/>
                <RegularSubtitle>{day.condition.text}</RegularSubtitle>
            </div>
            <div className={"flex"}>
                <RegularSubtitle >{day.maxtemp_c}/</RegularSubtitle>
                <RegularSubtitle className={"text-gray-500"}>{day.mintemp_c}</RegularSubtitle>
            </div>
        </div>
    )
};

export default ForecastItem;
