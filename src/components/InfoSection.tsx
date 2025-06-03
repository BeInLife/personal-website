import React from 'react';

interface InfoItem {
    title: string;
    subtitle?: string;
    description?: string;
}

interface InfoSectionProps {
    title: string;
    items: InfoItem[];
}

function InfoSection({ title, items }: InfoSectionProps) {
    return (
        <div className="rounded bg-gray-900 py-6 px-6 hover:bg-gray-800 transform hover:scale-105 transition ease-in duration-300 max-w-full">
            <h3 className="text-gray-200 text-2xl cursor-default mb-4">{title}</h3>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index}>
                        <h4 className="text-gray-300 text-lg">{item.title}</h4>
                        {item.subtitle && <p className="text-gray-400 text-sm">{item.subtitle}</p>}
                        {item.description && <p className="text-gray-500 text-sm mt-1">{item.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoSection;
