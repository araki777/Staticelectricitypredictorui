import { azureHonoHandler } from "@marplex/hono-azurefunc-adapter";
import { app } from "@azure/functions";
import honoApp from "../../index";

app.http("httpTrigger", {
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
