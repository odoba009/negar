import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionRequired from "./pages/home";
import BankSelector from "./pages/choose";
import LoginPage from "./pages/login-page";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ActionRequired/>}/>
                <Route path="/choose-bank" element={<BankSelector/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}