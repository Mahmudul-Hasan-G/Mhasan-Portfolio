import react from 'react';

const Certifications = () => {
  return (
    <div className=" bg-orange-50">
    
<div className="grid grid-cols-2  mx-6 gap-6">
<div>
<div className="text-2xl text-center">
    <h1 className="pt-6">WEB-DEVELOPER </h1><br />
    <h1>
DCI DIGITAL CAREER INSTITUTE GMBH, BERLIN, GERMANY</h1><br />
<h1>
2023-2024</h1><br />
<h1>HTML, CSS, JavaScript, React, MongoDB,  REST API,
FireBase, JWT etc</h1><br />
    </div>
<img className="my-6" src="DCI_E.jpg" alt="" />
</div>
      <div>
      <div className="text-2xl text-center">
    <h1 className="pt-6">Data Analytics</h1><br />
    <h1>
Google Coursera</h1><br />
<h1>
2022-2022</h1><br />
<h1>Spreadsheets, SQL, Tableau and R.Preparing, processing, analyzing and sharing data for thoughtful action. </h1><br />
    </div>
    <img className="my-6" src="Coursera_E.jpg" alt="" />
      </div>
      
    </div>
    </div>
    
  );
};

export default Certifications;