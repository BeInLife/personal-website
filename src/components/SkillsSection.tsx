import React from 'react';

interface SkillCategory {
    category: string;
    skills: string[];
}

interface SkillsSectionProps {
    skillCategories: SkillCategory[];
}

function SkillsSection({ skillCategories }: SkillsSectionProps) {
    return (
        <div className="rounded bg-gray-900 py-6 px-6 hover:bg-gray-800 transform hover:scale-105 transition ease-in duration-300 max-w-full">
            <h3 className="text-gray-200 text-2xl cursor-default mb-4">Skills</h3>
            {skillCategories.map((category, index) => (
                <div key={index} className="mb-4">
                    <h4 className="text-gray-300 text-lg font-semibold mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="text-sm inline-block text-center font-medium bg-gray-700 py-1 px-3 rounded text-gray-400 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsSection;
