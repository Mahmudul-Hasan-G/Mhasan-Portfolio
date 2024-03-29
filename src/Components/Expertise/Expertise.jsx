import { SiReact } from "react-icons/si";

const Expertise = () => {
  return (
    <div className="p-12 bg-orange-50">
    <div className="grid grid-rows-6 gap-2 justify-items-center shadow-md w-36">
    <div className="h-16 w-16 row-span-2">
    <h1 className="text-cyan-400 text-6xl shadow-md"><SiReact /></h1>
    </div>  
    <h1 className="text-2xl font-bold row-span-1">React</h1>
    <h1 className="row-span-3 text-center">Excellent experience of learning and working. </h1>
    </div>
    </div>
  );
};

export default Expertise;