import { Store, SystemTime, IMessage } from "@zalo/extension-sdk";

export const store = Store.create({
  initial: {
    loading: true,
    obj: {
      v: 0,
    },
    errorMessage: "",
    messageGroups: [],
  },
  method: {
    async loadStarMessage(
      limit: number,
      lastTime: number = SystemTime.getTimeNow()
    ) {
      // TODO: load from indexdb
      this.setState("messageGroups", []);
    },
    async addStarMessages(msg: IMessage[], time) {
      this.setState("messageGroups", (messageGroups) => {
        // TODO: add msgs
        return messageGroups;
      });
    },
    async unstaredMessages(msgs: IMessage[]) {
      this.setState("messageGroups", (messageGroups) => {
        // TODO: remove msgs
        return messageGroups;
      });
    },
    async checkStarMessage(msgId: IMessage[]) {
      // TODO: check
      return false;
    },
  },
});
