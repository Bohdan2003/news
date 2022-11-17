import Header from "../header/Header";
import Footer from "../footer/Footer";
import Stat from "../stat/Stat";
import Slider from "../slider/Slider";
import './app.scss';

const App = () => {
    return (
        <>
            <Header/>
                <div className="main">
                    <Stat/>
                    <Slider/>
                </div>
            <Footer/>
        </>
    )
}

export default App;