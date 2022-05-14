import React from 'react';
import HomeLeft from '../HomeLeft/HomeLeft';
import './Home.css';

const Home = () => {
    return (
        <div className='bg-body'>
            <div className=' pt-4 mt-5 px-3 bg-secondary'>
                <div className=' row pt-2'>
                    <div className='col-2 col-lg-3  rounded-2 my-2'><HomeLeft></HomeLeft></div>
                    <div className='col-10 col-lg-9  rounded-2 my-2'>right</div>
                </div>
            </div>
        </div>
    );
};

export default Home;