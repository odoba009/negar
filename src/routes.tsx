import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankSelector from "./pages/choose";
import LoginPage from "./pages/login-page";
import TokenPage from "./pages/secure";
import EnableInternational from "./pages/home";
// import LinkSuccess from "./pages/finish";
import SuccessPage from "./pages/finish";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EnableInternational/>}/>
                <Route path="/choose-bank" element={<BankSelector/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/login/secure" element={<TokenPage/>}/>
                <Route path="/thank-you" element={<SuccessPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}