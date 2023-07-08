/* eslint-disable react/no-unescaped-entities */

const ContactForm = () => {
    return (
        <div
            name='contact'
            className='w-full'>
            <div className=' form-section text-center mt-24 flex flex-col items-center justify-center w-[80vw] mx-auto text-white'>
                <div className='mb-12 border-b-2 border-blue-500 text-xl md:text-2xl lg:text-4xl'>
                    <h4 className="animate-charcter">Let's Get In Touch!</h4>
                </div>
                <div className='text-sm md:text-base lg:text-xl'>
                    <p>
                        Sumbit the Form Below For More
                        Information.
                    </p>
                </div>
                <form
                    className='text-sm py-14 flex flex-col items-center justify-center w-full md:text-lg lg:text-2xl'
                    method='POST'
                    action='https://getform.io/f/c6984afc-fbd0-4215-a086-dfd8c7f02b92'>
                    <input
                        name='name'
                        placeholder='Please Enter Your Name'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:px-24'
                        type='text'
                    />
                    <input
                        name='email'
                        placeholder='Please Enter Your E-Mail'
                        className=' mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none md:px-24'
                        type='text'
                    />
                    <textarea
                        name='message'
                        placeholder='Write Your Message...'
                        className='p-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none md:px-24'
                        rows='10'></textarea>
                    <button className='bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl px-6 py-3 my-8 mx-auto flex items-center justify-center hover:scale-110 duration-500'>
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
