import { azureHonoHandler } from "@marplex/hono-azurefunc-adapter";
import { app } from "@azure/functions";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import jmaRoute from "../../routes/jma.route";

// Hono アプリ（Prisma を使わないルートのみ）
const honoApp = new OpenAPIHono();
honoApp.use("/*", cors());

const api = new OpenAPIHono();
api.route("/jma", jmaRoute);

honoApp.route("/api", api);
honoApp.route("/", api);

honoApp.get("/health", (c) => c.text("OK"));

// Azure Functions エントリ
app.http("api", {
  methods: ["GET", "POST", "DELETE", "HEAD", "PATCH", "PUT", "OPTIONS"],
  authLevel: "anonymous",
  route: "{*proxy}",
  handler: azureHonoHandler(honoApp.fetch),
});

// 診断用（残しておく）
app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return { body: "Hello from Azure Functions!" };
  },
});
