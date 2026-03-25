import { app } from "@azure/functions";

// 診断用：最小限の関数（Hono/Prisma なし）
app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return { body: "Hello from Azure Functions!" };
  },
});
