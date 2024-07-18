import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
    slug: "projects",
    fields: [
        {
            name: "Title",
            required: true,
            type: "text",
        },
        {
            name: "id",
            required: true,
            type: "text",
        },
        {
            name: "Key_Highlights",
            type: "array",
            fields: [
                {
                    name: "highlight",
                    type: "text"
                }
            ]
        }, 
        {
            name: "thumbnail",
            type: "upload", 
            relationTo: "media"
        }
    ],
    admin: {
        disableDuplicate: true,
        useAsTitle: "Title"
    }
}

export default Projects;