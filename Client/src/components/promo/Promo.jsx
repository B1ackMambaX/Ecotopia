import './promo.scss';
import stones from '../../resources/img/stones.png';
import park from '../../resources/img/park.png';
import lake from '../../resources/img/lake.png'

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <h1 className="promo__heading">Вместе мы сможем изменить Екатеринбург к лучшему!</h1>
                    <div className="promo__photo-group">
                        <img src={stones} alt="stones" className="promo__photo" />
                        <img src={park} alt="park" className="promo__photo" />
                        <img src={lake} alt="lake" className="promo__photo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;