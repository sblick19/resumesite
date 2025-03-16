import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  devCommand: "next dev --port {PORT}", // Correct Next.js dev command
  buildCommand: "next build", // Add a build command
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname, // Ensure it's pointing to the correct directory
      contentDirs: ["/"],  // Root directory for content
      models: [
        {
          name: "ResumePage",
          type: "page",
          urlPath: "/resume",
          filePath: "index.html",  // Main page is index.html
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
