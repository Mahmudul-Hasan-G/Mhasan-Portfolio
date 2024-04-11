import react from 'react';

const pdf_File = "http://localhost:5173/cv.pdf";

const Home = () => {
  const downloadFile = (url) =>{
    
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', 'cv.pdf' );
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div style={{
      backgroundImage: 'url("header_bg.png")',  backgroundSize: 'cover'}} className="grid grid-cols-12 gap-4 content-center  bg-orange-50">
    <img className="col-span-1" src="developer.png" alt="" />
    <div className="col-span-7 grid content-center ">
    <h1 className="text-4xl mb-6">Hi, I am</h1>
    <h1 className="text-8xl mb-6 font-bold">Mahmudul Hasan</h1>
    <h1 className="text-4xl mb-12">Ready to engage with the team and company.Easy to
                        connect.Adopting the situation with a smile.</h1>
                        <button onClick={() => {downloadFile(pdf_File)}}><a className="btn bg-orange-500 h-12 w-44 text-xl font-bold">Download CV</a></button>
    </div>
      <div  className="col-span-4 grid content-center">
      <img className="rounded-full" src="hasan.jpg" alt="" />
      </div>
      
    </div>
  );
};

export default Home;