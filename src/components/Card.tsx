import React from 'react';

function Card({
    title,
    subtitle,
    misc,
    tags,
    link,
}: {
    title: string;
    subtitle: string;
    misc?: string;
    tags?: Array<string>;
    link?: string;
}) {
    return (
        <div className="rounded bg-gray-900 py-4 px-6 hover:bg-gray-800 transform hover:scale-105 transition ease-in duration-300 max-w-full">
            {link ? (
                <a
                    className="text-gray-200 text-2xl transition ease-in duration-300 hover:text-gray-100 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                >
                    {title}
                </a>
            ) : (
                <h3 className="text-gray-200 text-2xl cursor-default">{title}</h3>
            )}
            <p className="text-gray-400 py-2 cursor-default">{subtitle}</p>
            <p className="text-gray-500 text-xs pb-2 cursor-default font-mono">{misc}</p>
            {tags && (
                <div className="pt-2 pb-1 tags">
                    {tags.map((tag) => (
                        <span
                            className="text-sm inline-block text-center font-medium bg-gray-700 py-1 px-2 rounded text-gray-400 align-middle cursor-default"
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

export default Card;
