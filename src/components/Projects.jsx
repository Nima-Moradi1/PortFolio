import { useRef } from "react";
import gsap from "gsap";
import nimovie from "../assets/nimovie.webp";
import ecommerce from "../assets/ecommerce.webp";
import todolist from "../assets/todolist.webp";
import musicplayer from "../assets/mplayer.webp";

const Projects = () => {
    let projectImage = useRef(null);
    let projectImage2 = useRef(null);
    let projectImage3 = useRef(null);
    let projectImage4 = useRef(null);

    const EnterHandler = () => {
        gsap.to(projectImage, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        });
    };
    const leaveHandler = () => {
        gsap.to(projectImage, {
            display: "none",
        });
    };
    const EnterHandler2 = () => {
      gsap.to(projectImage2, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
      });
  };
  const leaveHandler2 = () => {
      gsap.to(projectImage2, {
          display: "none",
      });
  };
  const EnterHandler3 = () => {
    gsap.to(projectImage3, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
};
const leaveHandler3 = () => {
    gsap.to(projectImage3, {
        display: "none",
    });
};
const EnterHandler4 = () => {
    gsap.to(projectImage4, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
};
const leaveHandler4 = () => {
    gsap.to(projectImage4, {
        display: "none",
    });
};

    return (
        <div className='flex flex-col items-center justify-center w-[80vw] mx-auto lg:h-[50vh]'>
            <h1 className='animate-charcter border-b-2 border-blue-500 bigTitle flex items-center justify-center font-bold text-lg text-white mb-12 md:text-2xl lg:text-4xl '>
                My Recent Works
            </h1>
            <div className='worksContainer flex-wrap flex gap-16 items-center justify-between w-[70vw] mx-auto md:flex md:w-[80vw] md:items-center md:justify-center md:mx-auto sm:w-[55vw]'>
                <div className='work1 flex flex-col items-center justify-center rounded-2xl relative shadow-md shadow-orange-700 hover:scale-110 duration-500 md:basis-1/3 lg:basis-1/5'>
                    <div
                        onMouseEnter={EnterHandler}
                        onMouseLeave={leaveHandler}>
                        <img
                            className='projectImage rounded-2xl w-auto '
                            src={nimovie}
                        />
                    </div>
                    <div
                        ref={(el) => (projectImage = el)}
                        className='absolute hidden bg-black rounded-[10%] w-1/2  font-bold text-2xl'>
                        <a
                            href='https://ni-movie.vercel.app'
                             target = "_blank" 
                             rel="noreferrer"
                            className=' cursor-pointer text-red-500 text-base '>
                            <span className='text-white'>
                                See Demo
                            </span>
                            <br />
                            <span className="text-base">**USE VPN**</span>
                        </a>
                    </div>
                    <div className='workTitle1 font-bold text-sm text-white'>
                        NiMovie Website
                    </div>
                    <div className='text-white opacity-60 text-center text-sm'>
                        Tech: React, Redux, RESTful API{" "}
                    </div>
                    <div className='text-white opacity-60 text-sm'>
                        UI : SASS
                    </div>
                </div>
                <div className='work2 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-gray-500 hover:scale-110 duration-500 relative md:basis-1/3 lg:basis-1/5'>
                    <div onMouseEnter={EnterHandler2}
                        onMouseLeave={leaveHandler2}> 
                    <img
                        className='rounded-2xl w-auto '
                        src={musicplayer}
                    /></div>
                    <div
                        ref={(el) => (projectImage2 = el)}
                        className='absolute hidden bg-black rounded-[10%] w-1/2  font-bold text-2xl'>
                        <a
                            href='/'
                             target = "_blank" 
                             rel="noreferrer"
                            className=' cursor-pointer text-red-500 '>
                            <span className='text-white'>
                                See Demo
                            </span>
                        </a>
                    </div>
                    <div className='workTitle2 font-bold text-sm text-white'>
                        Tiny Music Player
                    </div>
                    <div className='text-white opacity-60 text-center text-sm'>
                        Tech: React, Custom-Made API{" "}
                    </div>
                    <div className='text-white opacity-60 text-sm'>
                        UI: SASS{" "}
                    </div>
                </div>
                <div className=' work3 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-yellow-300 hover:scale-110 duration-500 relative md:basis-1/3 lg:basis-1/5'>
                    <div onMouseEnter={EnterHandler3}
                        onMouseLeave={leaveHandler3}><img
                        className='rounded-2xl w-auto'
                        src={ecommerce}
                    /></div>
                    <div
                        ref={(el) => (projectImage3 = el)}
                        className='absolute hidden bg-black rounded-[10%] w-1/2  font-bold text-2xl'>
                        <a
                            href='/'
                             target = "_blank" 
                             rel="noreferrer"
                            className=' cursor-pointer text-red-500 '>
                            <span className='text-white'>
                                See Demo
                            </span>
                        </a>
                    </div>
                    <div className='workTitle3 font-bold text-sm text-white text-center'>
                        E-Commerce 
                    </div>
                    <div className='text-white opacity-60 text-center text-sm'>
                        Tech: React, Redux, RESTful API{" "}
                    </div>
                    <div className='text-white opacity-60 text-sm'>
                        UI: Tailwind CSS
                    </div>
                </div>
                <div className=' work4 flex flex-col items-center justify-center rounded-2xl shadow-md shadow-blue-300 relative hover:scale-110 duration-500 md:basis-1/3 lg:basis-1/5'>
                    <div onMouseEnter={EnterHandler4}
                        onMouseLeave={leaveHandler4}><img
                        className='rounded-2xl w-auto'
                        src={todolist}
                    /></div>
                    <div
                        ref={(el) => (projectImage4 = el)}
                        className='absolute hidden bg-black rounded-[10%] w-1/2  font-bold text-2xl'>
                        <a
                            href='/'
                             target = "_blank" 
                             rel="noreferrer"
                            className=' cursor-pointer text-red-500 '>
                            <span className='text-white'>
                                See Demo
                            </span>
                        </a>
                    </div>
                    <div className='workTitle4 font-bold text-sm text-white'>
                        To-Do List App
                    </div>
                    <div className='text-white opacity-60 text-center text-sm'>
                        Tech: JavaScript, React
                    </div>
                    <div className='text-white opacity-60 text-sm'>
                        UI: Tailwind CSS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
