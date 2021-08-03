import "./style.css";
import { useHistory } from 'react-router-dom';


function HomePage() {
    
    const history = useHistory();

    function handleClick() {
        history.push({ pathname: '/materiator'})
    }

    return (

    <div className="MSelector">
        <h2 className="question"> Materiator</h2>

        <button className="generateButton" onClick={handleClick}>
            {" "}
            Começar
        </button>
    </div>

    );
}

export default HomePage;