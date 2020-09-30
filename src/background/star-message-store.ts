import { State, SetStateFunction, createState } from "solid-js";
import { SystemTime, IMessage } from "@zalo/extension-sdk";
import { IMessageStore } from "../common/messages-store";

export class MessageStore {
  state: State<IMessageStore>;
  setState: SetStateFunction<IMessageStore>;

  constructor() {
    const [state, setState] = createState<IMessageStore>({
      loading: true,
      errorMessage: "",
      groups: [],
    });
    this.state = state;
    this.setState = setState;
  }

  async loadStarMessage(
    limit: number,
    lastTime: number = SystemTime.getTimeNow()
  ) {
    this.setState({ loading: true });
    // fetch from db
    // await db.fetch();
    this.setState({
      loading: false,
      groups: [],
    });
  }
  async addStarMessages(msg: IMessage, time: number) {}
  async unstaredMessages(msgId: number) {}
  async checkStarMessage(msgId: number) {
    return false;
  }
}
