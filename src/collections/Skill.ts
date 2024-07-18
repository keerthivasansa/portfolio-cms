import { CollectionConfig } from "payload/types";

const Skills: CollectionConfig = {
    slug: "skills",
    fields: [
        {
            name: "id",
            type: "text",
        }, 
        {
            name: "color",
            type: "text",
            
        }
    ],
    admin: {
        useAsTitle: "id",
        preview: (doc, opts) => {
            return `${doc.color}`
        }
    }
}

export default Skills;
