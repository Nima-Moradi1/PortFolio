import location from '../assets/location.png';
import phone from '../assets/phone.png';
import emaill from '../assets/email.png';


const Contact = () => {
    return (
        <div className=' flex flex-col items-center justify-center text-center mx-auto max-w-[85vw] mt-48'>
            <div className='animate-charcter border-b-2 border-blue-500 font-bold text-xl text-white mb-12 md:text-2xl lg:text-4xl'>
                Contact Me
            </div>
            <p className='text-white opacity-70 text-sm mb-12 max-w-2xl lg:text-lg lg:mb-8'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima error rerum totam nobis
                dolorem eveniet, fugiat voluptates? Voluptate ea,
                deleniti fugiat expedita distinctio doloribus rem
                recusandae itaque ab perferendis a! Dolore saepe
                suscipit voluptatum libero porro, cumque
                excepturi sed.
            </p>
            <div className="flex items-center justify-center">
                <div className="contactSvg flex flex-col justify-between items-center w-full md:grid md:grid-cols-3">
                    <div className='flex flex-col items-center justify-center text-center text-white pb-12'><img className="opacity-60 w-20 " src={location}/><div className='border-b-2 border-blue-500'>Location</div><div className=' opacity-80'>Tehran, Iran</div></div>
                    <div className='flex flex-col items-center justify-center text-center text-white pb-12' ><img className="opacity-60 w-20 md:pt-4" src={emaill}/><div className='border-b-2 border-blue-500 pt-3 md:pt-4'>Email Address</div><div className='opacity-80'>mnima8100@gmail.com</div></div>
                    <div className='flex flex-col items-center justify-center text-center text-white pb-12'><img className="opacity-60 w-20 " src={phone}/><div className='border-b-2 border-blue-500 pt-2 '>Phone Number</div><div className='opacity-80'>+98 9036837788</div></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
