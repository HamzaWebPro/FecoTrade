

const personImageOne = "https://i.ibb.co/LSYS36V/male-man-icon.png"

const personData = [
    { image: personImageOne, name: "John Cambell", title: "FOUNDER / CEO", description: "John is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
    { image: personImageOne, name: "Lucy Wong", title: "FOUNDER / CFO", description: "Lucy is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
    { image: personImageOne, name: "Joshua Stevens", title: "ENGINEER", description: "Joshua is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
    { image: personImageOne, name: "Sara Jackson", title: "FOUNDER / CEO", description: "Sara is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
    { image: personImageOne, name: "Mike Kovalsky", title: "FOUNDER / CEO", description: "Mike Kobalsky is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
    { image: personImageOne, name: "Sandra Bernard", title: "FOUNDER / CEO", description: "Sandra is a Crypto enthusiast. He was one of the first bolckchain actors in the world." },
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