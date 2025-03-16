import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git"; // Ensure this import is correct.

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom", // Custom framework
 
  devCommand: "next dev --port {PORT}",
  buildCommand: "next build",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["/"], // Root directory for content
      models: [
        {
          name: "ResumePage",
          type: "page",
          urlPath: "/resume",
          filePath: "index.html", // Main page is index.html
          fields: [
            { name: "title", type: "string", required: true },
            { name: "summary", type: "string" },
            { name: "body", type: "markdown", required: true }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "images", // Folder containing images
        uploadDir: "images", // Keep the upload directory the same
        publicPath: "/images"
      }
    })
  ]
});
