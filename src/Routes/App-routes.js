import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CustomLayout } from "../Components/Layout/custom-layout"
import { City } from "../Pages/City"
import { Home } from "../Pages/Home"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<CustomLayout> <Home/> </CustomLayout>}/>
            <Route path="/city" element={<CustomLayout> <City/> </CustomLayout>}/>
            <Route path="/city2" element={<CustomLayout> <div>this is city2</div> </CustomLayout>}/>
            </Routes>
        </BrowserRouter>

    )
}