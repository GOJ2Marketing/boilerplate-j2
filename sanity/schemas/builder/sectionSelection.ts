import { defineField } from 'sanity';
import { HeroSelector } from './heroSections';
import { CTASelector } from './CTASelection';

export const sectionSelection = {
    name: 'sectionSelection',
    title: 'Section Selection',
    type: 'object',
    fields: [
        // Select a section type
        defineField({
            name: 'section',
            title: 'Section',
            type: 'string',
            options: {
                list: [
                    { title: 'Hero', value: 'hero' },
                    { title: 'CTA', value: 'cta' },
                    { title: 'Image with Text', value: 'imageWithText' },
                    { title: 'Plain Text', value: 'planeText' },
                    { title: 'Blog', value: 'blog' },
                    { title: 'Video', value: 'video' },
                ],
                direction: 'vertical'
            },
        }),

        // Provide Hero Information
        ...HeroSelector,

        // Choose a CTA
        CTASelector,
    ],
};