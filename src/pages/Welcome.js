import CarouselMod from "../components/Carousel";
import Navigation from "../components/Navigation";

const Welcome = () => {
    return [
        <Navigation type="login" />,
        <div class="d-block justify-content-center">
            <CarouselMod />
        </div>
    ];
}

export default Welcome;