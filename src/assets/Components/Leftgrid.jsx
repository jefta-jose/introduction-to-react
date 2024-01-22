import './Leftgrid.css';
import Uppergrid from './Uppergrid';
import Middlegrid from './Middlegrid';
import Lowergrid from './Lowergrid';

const Leftgrid = () => {
    return (
        <div className='leftdiv'>
            <Uppergrid />
            <Middlegrid />
            <Lowergrid />
        </div>
    )
}

export default Leftgrid;