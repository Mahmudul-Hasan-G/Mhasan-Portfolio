import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Project = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-12 pt-12  bg-orange-50">
    <div className="col-span-4">
      <h1>description</h1>
    </div>
      <Carousel className="col-span-8">
                <div>
                    <img src="/public/HOME.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/public/HOME_2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/public//PLACES.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  );
};

export default Project;