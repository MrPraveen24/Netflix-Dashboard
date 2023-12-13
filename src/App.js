import "./App.scss"
import Home from "./components/Home/Home";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Movies from "./Movies";
import RecentlyAdded from "./RecentlyAdded";
import MyList from "./MyList";
import Footer from "./Footer";
function App(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/recently" element={<RecentlyAdded />} />
            <Route path="/mylist" element={<MyList />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}
export default App;