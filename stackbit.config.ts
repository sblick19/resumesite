export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  apiKey: process.env.STACKBIT_API_KEY, // Ensure authentication
  devCommand: "next dev --port {PORT}",
  buildCommand: "next build",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["/"],
      models: [
        {
          name: "ResumePage",
          type: "page",
          urlPath: "/resume",
          filePath: "index.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "summary", type: "string" },
            { name: "body", type: "markdown", required: true }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "images",
        uploadDir: "images",
        publicPath: "/images"
      }
    })
  ]
});
