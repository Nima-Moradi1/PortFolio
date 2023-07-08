import picture from "../assets/aboutPic.png";

const About = () => {
    return (
        <div className='lg:flex lg:w-[85vw] md:mx-auto mt-72'>
            <div className='hover:border-y-4 hover:border-gray-800 hover:scale-105 duration:500 flex items-center justify-center mx-auto bg-gradient-to-b from-transparent to-black rounded-full w-[230px] h-[230px] mt-32 md:mt-8 md:w-[360px] md:h-[360px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px]'>
                <img
                    src={picture}
                    className='rounded-[27%] w-[200px] h-3/4 object-cover overflow-hidden md:w-[300px] '
                />
            </div>
            <div className='flex flex-col gap-5 items-center justify-center mt-10 text-2xl ml-5 mr-5 lg:text-4xl'>
                <h3 className='animate-charcter border-b-2 border-blue-500 text-white lg:mb-14'>
                    About Me
                </h3>
                <p className='text-white opacity-70 text-base text-center max-w-2xl mx-auto lg:text-lg lg:mb-8'>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Commodi aspernatur facilis
                    placeat. Nisi ea minima non? Facilis
                    voluptatum, eligendi cum aliquam libero
                    placeat quibusdam consequatur accusantium,
                    nesciunt quod id dolor!
                </p>
                <div className='flex gap-10 items-center justify-between text-white w-[50vw] lg:justify-center lg:gap-48'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='opacity-75 text-lg'>
                            21
                        </div>
                        <div>Age</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='opacity-75 text-lg'>
                            Tehran
                        </div>
                        <div>City</div>
                    </div>
                </div>
            </div>
            <div id='projects'></div>
        </div>
    );
};

export default About;
