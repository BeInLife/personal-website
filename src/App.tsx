import React from 'react';

import './assets/main.css';
import myImg from './assets/photo_me_black.jpg';

function App() {
    return (
        <div className="w-full h-screen bg-black">
            <div className="flex flex-row px-20 pt-20 max-w-screen-2xl mx-auto xl:px-40">
                <div className="flex-1 self-end">
                    <h1 className="font-sans text-gray-200 text-6xl">
                        Hello,
                        <br /> I'm Eugene
                    </h1>
                    <p className="text-gray-500 mt-4">
                        I’m a frontend developer at{' '}
                        <a
                            href="https://arrival.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 underline transition duration-300 ease-in-out hover:text-gray-100"
                        >
                            Arrival
                        </a>
                        . Most of the time work with React, but had some experience with Angular. Result oriented.
                    </p>
                    <p className="text-gray-500 mt-4">Fan of learning new languages.</p>
                    <p className="text-gray-500 mt-4">
                        Received a CS bachelor degree at{' '}
                        <a
                            href="https://university.innopolis.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 underline transition duration-300 ease-in-out hover:text-gray-100"
                        >
                            Innopolis University
                        </a>{' '}
                        in 2017.
                    </p>
                </div>
                <div className="flex-1">
                    <img src={myImg} alt="Me" />
                </div>
            </div>
        </div>
    );
}

export default App;
