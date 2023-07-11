import React, {FC} from 'react';
import cn from "classnames";
import {RegularSubtitle} from "../Typography/Typography";

interface DayForecastItemProps {
    time: string
    temp_c: string
    condition: {
        icon: string
        text: string
    }
}

const DayForecastItem: FC<DayForecastItemProps> = (props: DayForecastItemProps) => {

    const {time, temp_c, condition} = props;

    const rootCls = cn(
        "flex-col",
        "justify-center",
        "items-center",
        "border-r-2",
        "p-5"
    )

    return (
        <div className={rootCls}>
            <RegularSubtitle>{time.slice(10)}</RegularSubtitle>
            <img src={condition.icon} alt={""}/>
            <RegularSubtitle>{condition.text}</RegularSubtitle>
            <RegularSubtitle>{temp_c}</RegularSubtitle>
        </div>
    )
};

export default DayForecastItem;
