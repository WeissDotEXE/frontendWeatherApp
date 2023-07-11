import React, {FC} from 'react';
import cn from "classnames";
import DayForecastItem from "../DayForecastItem/DayForecastItem";
import Card from "../Card/Card";

interface DayForecastCardProps {
    hour: {
        time: string
        temp_c: string
        condition: {
            icon: string
            text: string
        }
    }[]
    className?:string
}

const DayForecastCard: FC<DayForecastCardProps> = (props: DayForecastCardProps) => {

    const {hour,className} = props;

    const rootCls = cn(
        className,
        "flex",
        "w-full",
        "overflow-x-auto",
        "snap-x"
    )

    return (
        <Card className={rootCls}>
            {hour && hour.map((item, index: number) => {
                return <DayForecastItem key={index} time={item.time} temp_c={item.temp_c} condition={item.condition}/>
            })}
        </Card>
    )
};

export default DayForecastCard;
