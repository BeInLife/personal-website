import React from 'react';

import './assets/main.css';
import myImg from './assets/photo_me_black.jpg';
import Card from './components/Card';
import CardsRow from './components/CardsRow';
import ExperienceCard from './components/ExperienceCard';
import InfoSection from './components/InfoSection';
import Link from './components/Link';
import SkillsSection from './components/SkillsSection';

function App() {
    const skillCategories = [
        {
            category: 'Technical',
            skills: [
                'Node.js',
                'JavaScript (ES6+)',
                'React',
                'micro-frontends (Module Federation)',
                'Cypress',
                'Jest',
                'REST & GraphQL APIs',
                'CI/CD (GitLab CI)',
                'ExtJS',
            ],
        },
        {
            category: 'Leadership',
            skills: [
                'Team leadership',
                'mentorship',
                'architectural decision-making',
                'agile planning',
                'onboarding processes',
            ],
        },
        {
            category: 'Other',
            skills: [
                'Full-Stack Development',
                'UI/UX Design Patterns',
                'Test Automation',
                'Scalable System Architecture',
            ],
        },
    ];

    const languages = [
        { title: 'English', subtitle: 'fluent' },
        { title: 'Russian', subtitle: 'native' },
    ];

    const certifications = [
        { title: 'First Step Korean' },
        { title: 'Machine Learning Foundations: A Case Study Approach' },
    ];

    const education = [
        {
            title: "Bachelor's in Computer Science",
            subtitle: 'Innopolis University',
            description: '2015 – 2017',
        },
    ];

    return (
        <div className="w-full min-h-screen bg-black px-10 md:px-20 lg:px-30 xxl:px-64 mx-auto">
            <div className="flex flex-col-reverse pt-20 md:flex-row">
                <div className="flex-1 self-end">
                    <h1 className="font-sans text-gray-200 text-4xl md:text-5xl lg:text-6xl">
                        Hello,
                        <br /> I'm Eugene Korchagin
                    </h1>
                    <h2 className="text-gray-300 text-xl md:text-2xl mt-4 font-medium">Lead Fullstack Developer</h2>
                    <p className="text-gray-500 mt-6">
                        A full-stack developer with expertise in leading development teams, building scalable frontend
                        architectures (Node.js, micro-frontend), and mentoring engineers.
                    </p>
                    <p className="text-gray-500 mt-4">
                        Formerly at <Link text="Squire" href="https://getsquire.com" /> (YC 2016) and{' '}
                        <Link text="Arrival" href="https://arrival.com" />; ex-Front End Developer at{' '}
                        <Link text="Tinkoff" href="https://tinkoff.ru" />, Uptick Labs, and{' '}
                        <Link text="Acronis" href="https://acronis.com" />.
                    </p>
                    <p className="text-gray-500 mt-4">Fluent in English and Russian.</p>
                </div>
                <div className="flex-1">
                    <img src={myImg} alt="Eugene Korchagin" />
                </div>
            </div>

            <div className="mt-16">
                <h2 className="font-sans text-gray-200 text-4xl mb-8">Experience</h2>
                <div className="space-y-6">
                    <ExperienceCard
                        company="Chassis Technologies"
                        role="Head of Development"
                        location="Remote"
                        dates="July 2022 – December 2024"
                        responsibilities={[
                            'Led architectural decision-making and design of scalable systems.',
                            'Managed and mentored a distributed development team, fostering collaboration.',
                            'Collaborated with co-founders to prioritize and plan the product roadmap.',
                            'Spearheaded infrastructure setup and optimized development pipelines.',
                            'Established and refined development processes to maintain high productivity.',
                        ]}
                        tags={['Leadership', 'Architecture', 'Team Management', 'Infrastructure']}
                    />

                    <ExperienceCard
                        company="Squire"
                        role="Web Engineer"
                        location="USA, Remote"
                        dates="January 2021 – January 2025"
                        responsibilities={[
                            'Led UI development for two in-house fintech projects (6-member team), building both desktop and mobile interfaces from scratch.',
                            'Built KYC workflows to ensure barbers get paid smoothly.',
                            'Maintained and refactored the main barber-facing application; added new features and optimized existing modules.',
                            'Developed an appointment-booking app (mobile and embeddable).',
                            'Wrote and supported API code for new and existing projects.',
                            'Mentored and onboarded new hires.',
                        ]}
                        achievements={[
                            'Introduced Cypress end-to-end tests, greatly improving production stability.',
                            'Designed and implemented a reusable UI library now used across multiple projects.',
                            'Adopted a micro-frontend (Module Federation) architecture to allow web modules in mobile apps until native solutions were ready.',
                        ]}
                        tags={['React', 'TypeScript', 'Fintech', 'Micro-frontends', 'Cypress', 'Mentorship']}
                        link="https://getsquire.com"
                    />

                    <ExperienceCard
                        company="Arrival"
                        role="Frontend Developer"
                        location="St. Petersburg"
                        dates="March 2019 – December 2020"
                        responsibilities={[
                            'Served as lead UI engineer on the in-vehicle diagnostic tool team.',
                            'Developed the frontend with a custom UI kit built from scratch.',
                            'Wrote technical specifications and planned frontend team activities.',
                            'Set up development flow and continuous integration (GitLab CI).',
                        ]}
                        achievements={[
                            'Cleaned up and modularized legacy code, improving maintainability.',
                            'Built a UI kit that was adopted by other teams within the company.',
                            'Added unit tests (Jest) and instituted a CI process to catch regressions early.',
                        ]}
                        tags={['React', 'TypeScript', 'UI Kit', 'GitLab CI', 'Jest', 'Team Lead']}
                        link="https://arrival.com"
                    />

                    <ExperienceCard
                        company="Tinkoff Bank"
                        role="Front End Developer"
                        location="Innopolis"
                        dates="March 2018 – February 2019"
                        responsibilities={[
                            "Developed and maintained the internal CRM web application's call-center module.",
                            'Served as acting Team Lead, mentoring two junior engineers who were promoted to middle level.',
                            'Built the Service Requests admin panel used by support staff.',
                        ]}
                        tags={['Angular', 'TypeScript', 'CRM', 'Team Lead', 'Mentorship']}
                        link="https://tinkoff.ru"
                    />

                    <ExperienceCard
                        company="Uptick Labs, Inc."
                        role="Frontend Developer"
                        location="St. Petersburg"
                        dates="June 2017 – February 2018"
                        responsibilities={[
                            'Developed the authorization part of a GraphQL backend service.',
                            'Built the Uptick CRM web application from scratch alongside a teammate, sharing code with the mobile app.',
                            'Integrated web and mobile codebases for a seamless cross-platform experience.',
                        ]}
                        tags={['React', 'React Native', 'GraphQL', 'CRM', 'Cross-platform']}
                        link="https://uptick.com"
                    />

                    <ExperienceCard
                        company="Acronis"
                        role="Frontend Developer"
                        location="Moscow"
                        dates="December 2016 – June 2017"
                        responsibilities={[
                            'Contributed to Acronis Backup 12 (ExtJS 4.x) by developing tape-related backup functionality.',
                            'Improved reliability and performance of backup storage modules.',
                        ]}
                        tags={['ExtJS', 'Backup Systems', 'Enterprise Software']}
                        link="https://acronis.com"
                    />
                </div>
            </div>

            <div className="mt-16">
                <h2 className="font-sans text-gray-200 text-4xl mb-8">Skills & Additional Information</h2>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                    <SkillsSection skillCategories={skillCategories} />
                    <div className="space-y-6">
                        <InfoSection title="Languages" items={languages} />
                        <InfoSection title="Certifications" items={certifications} />
                        <InfoSection title="Education" items={education} />
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-24">
                <CardsRow title="Get in touch">
                    <Card title="GitHub" subtitle="Code examples and projects" link="https://github.com/beinlife" />
                    <Card title="Email" subtitle="evgprogger@gmail.com" link="mailto:evgprogger@gmail.com" />
                    <Card
                        title="LinkedIn"
                        subtitle="Full career information"
                        link="https://www.linkedin.com/in/ekorchagin"
                    />
                </CardsRow>
            </div>
        </div>
    );
}

export default App;
