import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git"; // Ensure this import is correct.
require('dotenv').config();
const apiKey = process.env.STACKBIT_API_KEY;

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
          name: "DefaultPage", // You can name this anything that makes sense
          type: "page", // Define it as a page type
          urlPath: "/", // Main URL path, you can change this if you have different paths
          filePath: "index.html", // The HTML file you want to use
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        }
        assetsConfig: {
  referenceType: "static",
  staticDir: "images", // Folder containing images
  uploadDir: "images", // Keep the upload directory the same
  publicPath: "/images"
}

      ]
    })
  ]
});
