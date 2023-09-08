import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "n6d5rzfn",
  dataset: "production",
  title: "Consultant Website Next.js & Sanity",
  apiVersion: "2023-09-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
