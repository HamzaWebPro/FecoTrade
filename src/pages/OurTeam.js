

const personImageOne = "https://i.ibb.co/LSYS36V/male-man-icon.png"

const personData = [
    { image: personImageOne, name: "PC Daniel", title: "FOUNDER & CEO", description: "PC is our passionate CEO and leads Fecotrade Ecosystem for the revoulationary change." },
    { image: personImageOne, name: "Shang Cheng", title: "Co-Founder", description: "Our core team leader is Shang Cheng and he has the pioneer knowledge about crypto mining." },
    { image: personImageOne, name: "Nash Josef", title: "Cheif Technical Officer", description: "Nash Josef is one of the best CTO of the world. He leads Feco Technically." },
    { image: personImageOne, name: "Criss Jordan", title: "Cheif Marketing Officer", description: "Criss is our Cheif Technical Officer. He leads the core marketing team." },
    { image: personImageOne, name: "Rosario Lion", title: "Operations Manager", description: "Rosario Lion is our Operations Manager. She works for the operational management." },
    { image: personImageOne, name: "Alex Sam", title: "Finance Manager", description: "Finance Manager is a Finance and Administration expert. He is one of the best team member of Fecotrade." },
]


const OurTeam = () => {
    return (
        <>
            {personData.map((data, index) => (
                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp hover-color" data-wow-delay="0.2s" key={index}>

                    <div className="icon-bx-wraper style-1 box-model box-hover">
                        <div className="persondata-img-style">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="text-box"><div className='text-center'>
                            <h5>{data.name}</h5>
                            <h6>{data.title}</h6>
                            <p className='text-black'><small>{data.description}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default OurTeam;
