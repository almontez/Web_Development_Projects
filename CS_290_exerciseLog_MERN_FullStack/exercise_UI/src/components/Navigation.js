import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <table id="navigation">
            <thead>
                <tr>
                    <th className="link"><Link to="/">Home</Link></th>
                    <th className="link"><Link to="/add-exercise">Add</Link></th>
                </tr>
            </thead>
        </table>
        </>
    );
}

export default Navigation