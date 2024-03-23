import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className=" bg-orange-50">
    <div className="grid grid-cols-12 gap-4 px-12 pt-12">
    <div className="col-span-4 text-2xl">
    <h1><span className="font-bold">Name:</span> GERMAN EYE</h1><br />
      <h1><span className="font-bold">Link : </span><Link className="text-blue-500 underline" to="https://germaneye.netlify.app">germaneye.netlify.app</Link></h1><br />
      <h1><span className="font-bold">Description: </span>Welcome to German Eye.At German Eye, we believe in more than just showcasing the beauty of Germany; we strive to capture the essence of our travels and share them through the eyes of the beholder. Born out of a deep love for wandering through the picturesque landscapes and embracing the rich culture of Germany, this platform is a testament to our unwavering enthusiasm for adventure. Beyond the visual journey, we invite you to discover the heart of German Eye within our cozy virtual library. German Eye is not just a travel website; it`s an immersive experience where every click unfolds the magic of Germany both visually and intellectually.<br/><br/> This website is by the people, for the people and to the people.</h1>
    </div>
    <div className="col-span-8">
      <Carousel>
                <div>
                    <img src="/public/HOME.png" />
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src="/public/ALART.png" />
                    <p className="legend">Alert For Activity </p>
                </div>
                <div>
                    <img src="/public/HOME-2.png" />
                    <p className="legend">Home Page After LogIn</p>
                </div>
                <div>
                    <img src="/public/PLACES.png" />
                    <p className="legend">Places People Had Inserted</p>
                </div>
                <div>
                    <img src="/public/SIGNIN.png" />
                    <p className="legend">SignIn Page</p>
                </div>
                
                <div>
                    <img src="/public/INSERT.png" />
                    <p className="legend">Anyone Can Insert Data After SignUp</p>
                </div>
                <div>
                    <img src="/public/LIBRARY.png" />
                    <p className="legend">Read And Publish New Books</p>
                </div>
                <div>
                    <img src="/public/PLACE_DETAIL.png" />
                    <p className="legend">Little Description Of The Place You Visited</p>
                </div>
                <div>
                    <img src="/public/SIGNUP.png" />
                    <p className="legend">SignUp To Enjoy And Experience More</p>
                </div>
            </Carousel>
            </div>
    </div>
    <div className="grid grid-cols-12 gap-4 px-12 pt-12">
    <div className="col-span-4 text-2xl">
    <h1><span className="font-bold">Name:</span> EMA-JOHN</h1><br />
      <h1><span className="font-bold">Link : </span><Link className="text-blue-500 underline" to="https://ema-john-by-hasan.netlify.app">ema-john-by-hasan.netlify.app</Link></h1><br />
      <h1><span className="font-bold">Description: </span>Welcome to German Eye.At German Eye, we believe in more than just showcasing the beauty of Germany; we strive to capture the essence of our travels and share them through the eyes of the beholder. Born out of a deep love for wandering through the picturesque landscapes and embracing the rich culture of Germany, this platform is a testament to our unwavering enthusiasm for adventure. Beyond the visual journey, we invite you to discover the heart of German Eye within our cozy virtual library. German Eye is not just a travel website; it`s an immersive experience where every click unfolds the magic of Germany both visually and intellectually.<br/><br/> This website is by the people, for the people and to the people.</h1>
    </div>
      <Carousel className="col-span-8">
                <div>
                    <img src="/public/EJ_1.png" />
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src="/public/EJ_2.png" />
                    <p className="legend">Alert For Activity </p>
                </div>
                <div>
                    <img src="/public/EJ_3.png" />
                    <p className="legend">Home Page After LogIn</p>
                </div>
                <div>
                    <img src="/public/EJ_4.png" />
                    <p className="legend">Places People Had Inserted</p>
                </div>
                <div>
                    <img src="/public/EJ_5.png" />
                    <p className="legend">SignIn Page</p>
                </div>
            </Carousel>
    </div>
    </div>
  );
};

export default Project;