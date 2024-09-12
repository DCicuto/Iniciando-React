//roteamento é basicamente a prática de decidir como um aplicativo responde a uma URL específica.

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { Cart } from './pages/Cart';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;