import React from 'react';

function CardsRow({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <>
            <h2 className="font-sans text-gray-200 text-4xl">{title}</h2>
            <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-6">{children}</div>
        </>
    );
}

export default CardsRow;
