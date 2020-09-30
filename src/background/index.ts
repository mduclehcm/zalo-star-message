import {
  activateBackground,
  WorkerContext,
  IMessage,
} from "@zalo/extension-sdk";
import { MessageStore } from "./star-message-store";

activateBackground(async (ctx: WorkerContext) => {
  const msgStore = new MessageStore();
  ctx.store.register("star-message-store", msgStore.state);

  ctx.action.on("load-message", async (limit: number, lastTime: number) => {
    msgStore.loadStarMessage(limit, lastTime);
  });

  ctx.action.on("star-message", async (msg: IMessage, time: number) => {
    msgStore.addStarMessages(msg, time);
  });
  ctx.action.on("unstar-message", (id: number) => {
    msgStore.unstaredMessages(id);
  });
  ctx.action.on("check-message", (id: number) => {
    return msgStore.checkStarMessage(id);
  });
});
