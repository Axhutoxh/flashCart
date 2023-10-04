import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "../mainlayout/HomePage"
import PageNotFound from "../mainlayout/PageNotFound"

const MyRoute = ()=>{
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
    )

}

export default MyRoute