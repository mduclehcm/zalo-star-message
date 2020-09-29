import {
  activateBackground,
  WorkerContext,
  IMessage,
} from "@zalo/extension-sdk";
import { store as messagesStore } from "./star-message-store";

activateBackground((ctx: WorkerContext) => {
  ctx.store.sync(messagesStore);
  ctx.commands.on("load-message", () => {
    messagesStore.loadStarMessage();
  });
  ctx.commands.on("star-message", (msgs: IMessage[]) => {
    messagesStore.addStarMessages(msgs);
  });
  ctx.commands.on("unstar-message", (msgIds: string[]) => {
    return messagesStore.unstaredMessages(msgIds);
  });
  ctx.commands.on("check-message", (msgIds: string[]) => {
    return messagesStore.checkStarMessage(msgIds);
  });
});
