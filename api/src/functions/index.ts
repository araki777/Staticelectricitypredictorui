import { azureHonoHandler } from "@marplex/hono-azurefunc-adapter";
import { app } from "@azure/functions";
import honoApp from "../../index";

// Main API entry
app.http("api", {
  methods: [
    "GET",
    "POST",
    "DELETE",
    "HEAD",
    "PATCH",
    "PUT",
    "OPTIONS",
    "TRACE",
    "CONNECT",
  ],
  authLevel: "anonymous",
  route: "{*proxy}",
  handler: azureHonoHandler(honoApp.fetch),
});

// 診断用の純粋な Azure Function
app.http("hello", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    return { body: "Hello from direct Azure Function!" };
  },
});
