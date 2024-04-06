import react from 'react';

const AboutMe = () => {
  return (
    <div className=" bg-orange-50">
    <div className="grid grid-cols-12 gap-4 mx-6">
      <div className="col-span-8 my-6">
      <div className="text-2xl">
      <h1>I am passionate about creating innovative web solutions. Committed to delivering high- quality web applications using JavaScript, React, and SQL, my analytical mindset, combined with my problem-solving skills, allows me to do so.</h1><br />
      <h1>I recently finished my web development course from DCI Digital Career Institute. So I am ready to put all my energy into helping out with your projects. I am good at both frontend and backend design, meaning I can work with stuff like HTML, CSS, JavaScript, PHP, Node and React. I also did a course in Data Analytics on Coursera, so I can pitch in with SQL, NoSQL, Python, and R if you need it.</h1>
    <br />
    <h1>I am pretty good at math and physics too, which helps me solve problems quickly. Even though I have done different jobs before, coding is what I am really passionate about. I am sure I can do great things in this field.</h1><br />
    <h1>This help me to think out of the box and face new challenges.English is my second language.</h1><br />
    <h1>I love working with a team because I believe it is the best way to learn and grow. And honestly, I just love coding . It keeps me motivated every single day.</h1><br />
    <h1>I come from a good family where I learned to respect everyone, especially women, at work. I love learning new things and I am really friendly. Writing poems is one of my favorite hobbies.</h1>
      </div>
      </div>
    <div className="col-span-4 my-6 h-screen">
    <img className="w-full h-1/3" src="hasan.jpg" alt="" />
    <img className="w-full h-1/3" src="DCI.jpg" alt="" />
    <img className="w-full h-1/3" src="coursera.png" alt="" />
    </div>
    </div>
    </div>
  );
};

export default AboutMe;