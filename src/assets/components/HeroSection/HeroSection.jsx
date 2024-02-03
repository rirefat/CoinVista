import heroImg from '../../../assets/header.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <header>
            <div className="left">
                <h1>Let's Buy Some <span>AsmrGraph</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eaque harum. Nobis ipsam magni labore?
                </p>
                <a href="#">
                    <i className='bx bx-basket'></i>
                    <span>Buy Now</span>
                </a>
            </div>
            <img src={heroImg} />
        </header>
    );
};

export default HeroSection;