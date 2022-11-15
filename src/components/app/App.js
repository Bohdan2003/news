import Header from "../header/Header";
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
            
        </>
    )
}

export default App;