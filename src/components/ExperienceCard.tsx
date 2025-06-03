import React from 'react';

interface ExperienceCardProps {
    company: string;
    role: string;
    location: string;
    dates: string;
    responsibilities: string[];
    achievements?: string[];
    tags?: string[];
    link?: string;
}

function ExperienceCard({
    company,
    role,
    location,
    dates,
    responsibilities,
    achievements,
    tags,
    link,
}: ExperienceCardProps) {
    return (
        <div className="rounded bg-gray-900 py-6 px-6 hover:bg-gray-800 transform hover:scale-105 transition ease-in duration-300 max-w-4xl mb-6">
            {link ? (
                <a
                    className="text-gray-200 text-2xl transition ease-in duration-300 hover:text-gray-100 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                >
                    {company}
                </a>
            ) : (
                <h3 className="text-gray-200 text-2xl cursor-default">{company}</h3>
            )}
            <p className="text-gray-300 text-lg py-1 cursor-default">{role}</p>
            <p className="text-gray-500 text-sm pb-2 cursor-default font-mono">
                {dates} • {location}
            </p>

            {responsibilities.length > 0 && (
                <div className="mt-4">
                    <ul className="text-gray-400 text-sm space-y-1">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-gray-500 mr-3 flex-shrink-0">•</span>
                                <span>{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {achievements && achievements.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-gray-300 text-sm font-semibold mb-2">Key achievements:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-green-500 mr-3 flex-shrink-0">▸</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {tags && tags.length > 0 && (
                <div className="pt-4 pb-1 tags">
                    {tags.map((tag) => (
                        <span
                            className="text-sm inline-block text-center font-medium bg-gray-700 py-1 px-2 mr-2 mb-2 rounded text-gray-400 align-middle cursor-default"
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExperienceCard;
