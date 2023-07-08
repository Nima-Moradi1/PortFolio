import { useRef } from "react";
import picture from "../assets/headerimage.png";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
    let myPicture = useRef(null);

    //useEffect
    useEffect(() => {
        gsap.from(myPicture, {
            opacity: 0,
            display: "relative",
        });
        gsap.to(myPicture, {
            opacity: 1,
            display: "absolute",
            duration: 5,
        });
    });

    return (
        <div className='mt-32 heroSection relative flex flex-col items-center justify-center lg:h-screen h-[60vh] '>
            <div className='bigTitle absolute'>
                <div>
                    <h1 className='animate-charcter opacity-30 lg:text-[100px] font-bold md:text-[80px] sm:text-[50px] text-[40px]'>
                        FRONT-END
                        <br />{" "}
                        <span className=' lg:text-[150px] md:text-[110px] sm:text-[70px] text-[55px]'>
                            DEVELOPER
                        </span>
                    </h1>
                </div>
            </div>
            <div className='contentWrapper absolute'>
                <div className='content flex flex-col items-center justify-end'>
                    <div className=' bg-inherit lg:w-[540px] lg:h-[720] md:w-[420px] md:h-[650] sm:w-[320px] sm:h-[550] w-[250px]'>
                        <img
                            className='myPicture'
                            ref={(el) => (myPicture = el)}
                            src={picture}
                        />
                    </div>
                    <div className='md:text-5xl text-[25px] mb-5 font-extrabold'>
                        <h2 className="animate-charcter">Nima Moradi</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:mt-6'>
                    <h2 className='waviy font-bold lg:text-4xl mb-4 mt-4 text-white md:text-2xl sm:text-xl text-[16px]'>
                        Creative &nbsp;
                        <span style={{ "--i": 1 }}>F</span>
                        <span style={{ "--i": 2 }}>r</span>
                        <span style={{ "--i": 3 }}>o</span>
                        <span style={{ "--i": 4 }}>n</span>
                        <span style={{ "--i": 5 }}>t</span>
                        <span style={{ "--i": 6 }}>-</span>
                        <span style={{ "--i": 7 }}>E</span>
                        <span style={{ "--i": 8 }}>n</span>
                        <span style={{ "--i": 9 }}>d</span> &nbsp;
                        Developer
                    </h2>
                    <button className='text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl px-6 py-3 my-8 mx-auto flex items-center justify-center hover:scale-110 duration-500'>
                        Contact Me
                    </button>
                </div>
            </div>
            <div id='about'></div>
        </div>
    );
};

export default Hero;
