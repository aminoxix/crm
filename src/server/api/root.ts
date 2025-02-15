import { createTRPCRouter } from "~/server/api/trpc";

import { crmListRouter } from "./routers/crmList";
import { leadDocumentRouter } from "./routers/document";
import { leadRouter } from "./routers/lead";
import { leadFieldStructureRouter } from "./routers/leadStructure";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  leadFieldStructure: leadFieldStructureRouter,
  lead: leadRouter,
  // leadCommunication: communicationRouter,
  leadDocument: leadDocumentRouter,
  crmList: crmListRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
