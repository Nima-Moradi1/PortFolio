import reactlogo from "../assets/reactlogo.png";
import reduxlogo from "../assets/reduxlogo.png";
import sasslogo from "../assets/sasslogo.png";
import javascriptlogo from "../assets/jslogo.png";
import tailwindlogo from "../assets/tailwindlogo.png";
import typescriptlogo from "../assets/typescriptlogo.svg";
import gitlogo from "../assets/gitlogo.png";
import githublogo from "../assets/githublogo.png";
import restapilogo from "../assets/restapilogo.png";

const Tools = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-48 w-[80vw] mx-auto'>
            <div className='animate-charcter border-b-2 border-blue-500 tools-title text-white font-bold text-xl mb-12 md:text-2xl lg:text-4xl'>
                My Tools
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center py-10 px-14 sm:px-4'>
                <div className='shadow-md shadow-yellow-400 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto '
                        src={javascriptlogo}
                        alt='JSLogo'
                    />
                </div>
                <div className='shadow-md shadow-blue-400 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto'
                        src={reactlogo}
                        alt='reactLogo'
                    />
                </div>
                <div className='shadow-md shadow-purple-500 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto'
                        src={reduxlogo}
                        alt='reduxLogo'
                    />
                </div>
                <div className='shadow-md shadow-pink-500 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto'
                        src={sasslogo}
                        alt='sassLogo'
                    />
                </div>
                <div className='shadow-md shadow-blue-200 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto'
                        src={typescriptlogo}
                        alt='sassLogo'
                    />
                </div>
                <div className=' shadow-md shadow-cyan-300 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto '
                        src={tailwindlogo}
                        alt='tailwindLogo'
                    />
                </div>
                <div className=' shadow-md shadow-blue-400 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto '
                        src={restapilogo}
                        alt='restapilogo'
                    />
                </div>
                <div className=' shadow-md shadow-red-400 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto '
                        src={gitlogo}
                        alt='gitlogo'
                    />
                </div>
                <div className=' shadow-md shadow-gray-600 rounded-lg py-2 hover:translate-y-[-20px] hover:transition ease-in-out duration-500'>
                    <img
                        className=' w-20 mx-auto h-auto '
                        src={githublogo}
                        alt='githublogo'
                    />
                </div>
            </div>
            <div id="contact"></div>
        </div>
    );
};

export default Tools;
