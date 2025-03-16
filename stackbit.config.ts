import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git"; // Ensure this import is correct.
require('dotenv').config();

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom", // Custom framework

  // Commands for development and build
  devCommand: "next dev --port {PORT}",
  buildCommand: "next build",
  nodeVersion: "18",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,  // Root path for your project
      contentDirs: ["/"],   // Root directory for content
      models: [],           // No models, as you don't need any

      // Assets configuration for handling static files
      assetsConfig: {
        referenceType: "static",    // Use static assets
        staticDir: "images",       // Folder containing your images
        uploadDir: "images",       // Directory for uploaded assets
        publicPath: "/images"      // Public path for assets in your app
      }
    })
  ]
});
