import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
    slug: 'tenants',
    admin: {
        useAsTitle: 'slug',
    },
    fields: [
        {
            name: "name",
            required: true,
            type: "text",
            label: "Store Name",
            admin: {
                description: "The name of your store (e.g. Rawtriangle068's Store)"
            }
        },
        {
            name: "slug",
            type: "text",
            index: true,
            required: true,
            unique: true,
            admin: {
                description: "The slug of your store (e.g. [slug].glimroad.com)"
            }
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "stripeAccountId",
            type: "text",
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            name: "stripeDetailsSubmitted",
            type: "checkbox",
            admin: {
                readOnly: true,
                description: "Ypu cannot create products until you submitted your Stripe details"
            }
        }
    ],
}
