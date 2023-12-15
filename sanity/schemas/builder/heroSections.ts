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
        name: 'tagline',
        title: 'Tagline',
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
        ],
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
                        { title: 'Clear', value: 'clear' },
                    ]
                }
            }),
        ],
        hidden: ({ parent }) => { return parent?.heroType == undefined },
    }),

    defineField({
        name: 'button2',
        title: 'Button 2',
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
                        { title: 'Clear', value: 'clear' },
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

    defineField({
        name: 'hero1Position',
        title: 'Image Position',
        type: 'string',
        options: {
            list: [
                { title: 'Background', value: 'background' },
                { title: 'Bottom', value: 'bottom' },
            ]
        },
        hidden: ({ parent }) => { return parent?.heroType == undefined || parent?.heroType !== 'hero1' || parent?.image == undefined },
    }),

    defineField({
        name: 'hero2Position',
        title: 'Image Position',
        type: 'string',
        options: {
            list: [
                { title: 'Inside Row (Default)', value: 'default' },
                { title: 'Large - Inside Section', value: 'large' },
                { title: 'Large - Cover Side', value: 'cover' },
            ]
        },
        hidden: ({ parent }) => { return parent?.heroType == undefined || parent?.heroType !== 'hero2' || parent?.image == undefined },
    }),
]


    