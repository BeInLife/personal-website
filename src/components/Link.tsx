import React from 'react';

function Link({ text, href }: { text: string; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 underline transition duration-300 ease-in-out hover:text-gray-100"
        >
            {text}
        </a>
    );
}

export default Link;
