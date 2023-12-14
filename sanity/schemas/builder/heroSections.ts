import { defineField } from "sanity";

export const HeroSelector = [
    // Select which hero section you wantz
    defineField({
        name: 'heroType',
        title: 'Hero Type',
        type: 'string',
        options: {
            list: [
                { title: 'Hero 1', value: 'hero1' },
                { title: 'Hero 2', value: 'hero2' },
                { title: 'Hero 3', value: 'hero3' },
            ],
        },
        hidden: ({ parent }) => { return parent?.section !== 'hero' },
    }),

    // Fields
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        hidden: ({ parent }) => { return parent?.heroType == undefined },
    }),

    defineField({
        name: 'text',
        title: 'Text',
        type: 'text',
        hidden: ({ parent }) => { return parent?.heroType == undefined },
    }),

    defineField({
        name: 'button',
        title: 'Button',
        type: 'object',
        fields: [
            defineField({
                name: 'text',
                title: 'Text',
                type: 'string',
            }),
            defineField({
                name: 'link',
                title: 'Link',
                type: 'string',
            }),
            defineField({
                name: 'variant',
                title: 'Variant',
                type: 'string',
                options: {
                    list: [
                        { title: 'Primary', value: 'primary' },
                        { title: 'Secondary', value: 'secondary' },
                        { title: 'Dark', value: 'dark' },
                        { title: 'Light', value: 'light' },
                    ]
                }
            }),
        ],
        hidden: ({ parent }) => { return parent?.heroType == undefined },
    }),
    
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        hidden: ({ parent }) => { return parent?.heroType == undefined },
    }),
]


    