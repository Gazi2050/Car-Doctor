import person from '../../.././assets/images/about_us/person.jpg'
import parts from '../../.././assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg " />
                        <img src={parts} className="absolute right-5 top-1/2 border-8 border-white w-1/2 rounded-lg " />
                    </div>
                    <div className='lg:w-1/2 space-y-8 p-4'>
                        <h3 className='text-[#FF3811] font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white hover:bg-black">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;