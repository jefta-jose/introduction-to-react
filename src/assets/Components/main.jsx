import './main.css';
import Leftgrid from './Leftgrid';
import Rightgrid from './Rightgrid';

const Main = () => {
    return (
        <div className='mainContent'>
            <Leftgrid />
            <Rightgrid />
        </div>
    )
}

export default Main;