import React, { FC, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";

const Navigation: FC = () => {
    const [coordinates,setCoordinates]=useState('')
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                setCoordinates(position.coords.longitude+","+position.coords.latitude)
                setIsNavigating(true);
            } catch (error) {
                console.log(error);
                setIsNavigating(false);
            }
        };

        fetchCoordinates();
    }, []);

    console.log(coordinates)

    return (
        <div>
            {/*<Header/> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        isNavigating ? (
                            <Navigate to={`/dashboard/${coordinates}`} replace />
                        ) : (
                            <WelcomePage />
                        )
                    }
                />

                <Route path="/dashboard/:location" element={<DashboardPage />} />

                <Route path="*" element={<WelcomePage />} />
            </Routes>
        </div>
    );
};

export default Navigation;
