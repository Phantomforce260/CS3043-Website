import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../homePage/homePage.tsx';
import { Layout} from "./layout.tsx";
import { Example } from "../routeExample.tsx";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/CS3043-Website" element={<Layout/>}>
                    <Route index element={<HomePage/>} />
                    <Route path={"info"} element={<Example/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
