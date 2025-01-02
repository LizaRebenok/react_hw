import img1 from '../assets/img1.svg';

function Mainsection() {
    return (
        <main>
            <div className="img-container">
            <img src={img1} alt="bag" />
            </div>
            <div className="info">
            <h2 className="info-header"> Style and durability </h2>
            <p className="info-text">Discover unique handmade accessories and choose a style that speaks to you.</p>
            </div>
        </main>
    );
}

export default Mainsection;
