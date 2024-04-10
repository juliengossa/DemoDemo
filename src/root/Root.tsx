import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (<>

        <ul>
            <Link to="/PIBPays" id="nav">info du pays</Link><br/>
            <Link to="/infoCitoyens" id="nav">info citoyens</Link>
        </ul>
        <Outlet/>
    </>);
}
