import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-12 pt-12  bg-orange-50">
    <div className="col-span-4 text-2xl">
    <h1><span className="font-bold">Name:</span> GERMAN EYE</h1><br />
      <h1><span className="font-bold">Link : </span><Link className="text-blue-500 underline" to="https://germaneye.netlify.app">germaneye.netlify.app</Link></h1><br />
      <h1><span className="font-bold">Description: </span></h1>
    </div>
      <Carousel className="col-span-8">
                <div>
                    <img src="/public/HOME.png" />
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src="/public/ALART.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/public/HOME-2.png" />
                    <p className="legend">Home page 2</p>
                </div>
                <div>
                    <img src="/public/PLACES.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/public/SIGNIN.png" />
                    <p className="legend">Legend 1</p>
                </div>
                
                <div>
                    <img src="/public/INSERT.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/public/LIBRARY.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/public/PLACE_DETAIL.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/public/SIGNUP.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  );
};

export default Project;