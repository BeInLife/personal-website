import React from 'react';

import './assets/main.css';
import myImg from './assets/photo_me_black.jpg';
import Card from './components/Card';
import CardsRow from './components/CardsRow';
import Link from './components/Link';

function App() {
    return (
        <div className="w-full min-h-screen bg-black px-10 md:px-20 lg:px-30 xxl:px-64 mx-auto">
            <div className="flex flex-col-reverse pt-20 md:flex-row">
                <div className="flex-1 self-end">
                    <h1 className="font-sans text-gray-200 text-4xl md:text-5xl lg:text-6xl">
                        Hello,
                        <br /> I'm Eugene
                    </h1>
                    <p className="text-gray-500 mt-4">
                        I’m a frontend developer at <Link text="Arrival" href="https://arrival.com" />. Most of the time
                        work with React, but had some experience with Angular. Result oriented.
                    </p>
                    <p className="text-gray-500 mt-4">Fan of learning new languages.</p>
                    <p className="text-gray-500 mt-4">
                        Received a CS bachelor degree at{' '}
                        <Link text="Innopolis University" href="https://university.innopolis.ru" /> in 2017.
                    </p>
                </div>
                <div className="flex-1">
                    <img src={myImg} alt="Me" />
                </div>
            </div>
            <div className="mt-10">
                <CardsRow title="Experience">
                    <Card
                        title="Arrival LTD"
                        subtitle="Frontend developer"
                        misc="from March, 2019"
                        tags={['React', 'Typescript', 'Unit Testing']}
                        link="https://arrival.com"
                    />
                    <Card
                        title="Tinkoff"
                        subtitle="Frontend developer"
                        misc="Feb, 2018 – Feb, 2019"
                        tags={['Angular', 'Typescript', 'Mentorship']}
                        link="https://tinkoff.ru"
                    />
                    <Card
                        title="Uptick"
                        subtitle="Frontend developer"
                        misc="Jun, 2017 – Feb, 2018"
                        tags={['React', 'React Native', 'CI/CD']}
                        link="https://uptick.com"
                    />
                    <Card
                        title="Acronis"
                        subtitle="Frontend developer"
                        misc="Dec, 2016 – Jun, 2017"
                        link="https://acronis.com"
                    />
                </CardsRow>
            </div>
            <div className="mt-10">
                <CardsRow title="Projects">
                    <Card
                        title="Achieved"
                        subtitle="Developer"
                        misc="from September, 2019"
                        tags={['React', 'Typescript', 'Fullstack']}
                        link="https://getachieved.com"
                    />
                </CardsRow>
            </div>
            <div className="pt-10 pb-24">
                <CardsRow title="Reach me out">
                    <Card title="Github" subtitle="@beinlife" link="https://github.com/beinlife" />
                    <Card title="Telegram" subtitle="@beinlife" link="https://t.me/beinlife" />
                </CardsRow>
            </div>
        </div>
    );
}

export default App;
