import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PostsPage from "./pages/PostsPage";
import {NavBar} from "./components/NavBar";
import FooterPage from "./pages/FooterPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="posts" element={<PostsPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="contacts" element={<ContactsPage/>}/>
                <Route path="footer" element={<FooterPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App