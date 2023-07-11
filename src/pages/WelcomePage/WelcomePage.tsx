import React, {ChangeEvent, FC, useState} from 'react';
import styles from './WelcomePage.module.scss';
import cn from "classnames";
import {RegularSubtitle} from "../../Components/Typography/Typography";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router";

interface WelcomePageProps {}

const WelcomePage: FC<WelcomePageProps> = () => {

    const [location,setLocation]=useState<string>("")

    const [error,setError]=useState("")

    const navigate = useNavigate();

    const rootCls=cn(
        styles.WelcomePage,
        "flex flex-col",
        "h-screen",
        "justify-center",
        "w-screen",
        "items-center"
    )

    const changeLocationHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setLocation(e.target.value)
    }

    const searchHandler=()=>{
        if(location===""){
            setError("Please provide your location");
            return
        }
        navigate(`/dashboard/${location}`)
    }

    const handleKeyPress = (e:KeyboardEvent) => {
        if (e.key === 'Enter') {
            searchHandler()
        }
    };

    // @ts-ignore
    return(<div className={rootCls} onKeyDown={handleKeyPress}>
        <RegularSubtitle className={"text-xl"} bold={true}>Type Location</RegularSubtitle>
        <Input className={"w-1/3 mb-6"} type={"text"} placeholder={"Location"} label={""} value={location} name={"location"} onChange={changeLocationHandler}/>
            <Button type={"button"} onClick={searchHandler}>Search</Button>
        {error && <RegularSubtitle className={"text-red-600"}>{error}</RegularSubtitle>}
    </div>)
};

export default WelcomePage;
