import React from 'react';
import doctor from '../../../assets/icons/i/doctor.png';


const MakeAppointment = () => {
    return (
        <section className=' my-28 flex justify-center items-center' style={{
            backgroundColor: 'rgb(148 163 184)'
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-4'>
                <h3 className="text-xl text-primary font-bold mb-3">
                    Appointment
                </h3>
                <h2 className="text-3xl mb-5">Make an Appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-active btn-accent">Appointment</button>

            </div>
        </section>
    );
};

export default MakeAppointment;