import React from 'react';

const Header = () => {
    return (
        <div className="hero mt-5 max-w-[1300px] mx-auto">
            <div className="p-2 flex hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-5/12 ml-auto'>
                    <img src="https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000" className="rounded-lg w-full pt-5" />
                </div>
                <div className='lg:w-6/12 text-center lg:text-left mr-auto'>
                    <h1 className=" text-5xl font-bold">Lorem ipsum</h1>
                    <p className="py-6">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <button className="btn btn-error mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;