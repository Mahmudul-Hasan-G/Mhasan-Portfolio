import react from 'react';

const Home = () => {
  return (
    <div style={{
      backgroundImage: 'url("/public/header_bg.png")',  backgroundSize: 'cover'}} className="grid grid-cols-12 gap-4 content-center  bg-orange-50">
    <img className="col-span-1" src="/public/developer.png" alt="" />
    <div className="col-span-7 grid content-center ">
    <h1 className="text-4xl mb-6">Hi, I am</h1>
    <h1 className="text-8xl mb-6 font-bold">Mahmudul Hasan</h1>
    <h1 className="text-4xl mb-12">Ready to engage with the team and company.Easy to
                        connect.Adopting the situation with a smile.</h1>
                        <a className="btn bg-orange-500 h-12 w-44 text-xl font-bold">Download CV</a>
    </div>
      <div  className="col-span-4 grid content-center">
      <img className="rounded-full" src="/public/hasan.jpg" alt="" />
      </div>
      
    </div>
  );
};

export default Home;