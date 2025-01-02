import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mainsection from './components/Mainsection';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="main-container">
            <Sidebar />
            <Mainsection />
            </div>
        </div>
    );
}

export default App;

