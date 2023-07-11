import React, {FC} from 'react';
import {RegularSubtitle} from "../Typography/Typography";
import cn from "classnames";

interface GeneralInfoCardProps {
    name: string
    precip_mm: number
    feelslike_c: number
    icon:string
}

const GeneralInfoCard: FC<GeneralInfoCardProps> = (props: GeneralInfoCardProps) => {

    const {name,precip_mm,feelslike_c,icon}=props;

    const currentInfoCls=cn(
        "flex",
        "justify-between",
        "items-center"
    )

    return (

        <div className={currentInfoCls}>
            <div>
                <RegularSubtitle className={"text-5xl mt-6"} bold={true} position={"text-start"}>{name}</RegularSubtitle>
                <RegularSubtitle className={"text-lg mb-10"} position={"text-start"}>Precipitation: {precip_mm}</RegularSubtitle>
                <RegularSubtitle position={"text-start"}>{feelslike_c}°C</RegularSubtitle>
            </div>
            <img className={"w-44 h-44"} src={icon} alt={""}/>
        </div>
    )
}

export default GeneralInfoCard;
