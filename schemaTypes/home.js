import {defineArrayMember, defineField, defineType} from 'sanity'

export const home = defineType({
    name: "home",
    type: "document",
    fields: [
        defineField({
            name: "heroTitle",
            type: "string",
            title: "Hero Section title",
        }),
        defineField({
            name: "heroText",
            type: "text",
            title: "Hero Section text",
        }),
        defineField({
            name: "btnText",
            type: "string",
            title: "Hero Section Button text",
        }),
        defineField({
            name: 'videoLessons',
            type: 'number',
        }),
        defineField({
            name: 'courses',
            type: 'number',
        }),
        defineField({
            name: 'hours',
            type: 'number',
        }),
        defineField({
            name: "cards",
            type: "array",
            title: "Card",
            of: [
                defineArrayMember({
                    name: 'card',
                    type: 'object',
                    fields: [{
                        name: 'title',
                        title: 'Card title',
                        type: 'string',
                        },
                        {
                            name: 'icon',
                            title: 'Card icon',
                            type: 'string',
                            options: {
                                list: ['leaf', 'rocket', 'bolt'],
                                layout: 'radio',
                            },
                        },
                        {
                            name: "options",
                            type: "array",
                            title: "Cards ",
                            of: [
                                defineArrayMember({
                                    type: 'object',
                                    name: 'card',
                                    fields: [
                                        {type: 'boolean', initialValue: false, name: 'checkbox'},
                                        {type: 'string', name: 'title'},
                                        {type: 'boolean', initialValue: false , name: 'textBold'},
                                    ]
                                })
                            ]
                        }
                    ]
                })
            ]
        })
        // defineField({
        //     name: "options",
        //     type: "object",
        //     title: "Card 1",
        //     fields: [{
        //             name: 'title',
        //             title: 'Card title',
        //             type: 'string',
        //     },
        //         {
        //             name: 'icon',
        //             title: 'Card icon',
        //             type: 'string',
        //             options: {
        //                 list: ['leaf', 'rocket', 'bolt'],
        //                 layout: 'radio',
        //             },
        //         },
        //         {
        //             name: "options",
        //             type: "array",
        //             title: "Cards ",
        //             of: [
        //                 defineArrayMember({
        //                     type: 'object',
        //                     name: 'card',
        //                     fields: [
        //                         {type: 'boolean', initialValue: false, name: 'checkbox'},
        //                         {type: 'string', name: 'title'},
        //                         {type: 'boolean', initialValue: false , name: 'textBold'},
        //                     ]
        //                 })
        //             ]
        //         }
        //     ]
        // })
    ],
})
