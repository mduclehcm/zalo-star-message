import { For } from "solid-js";
import { IMessageGroup } from "../../common/messages-store";
import { MessageItem } from "./message-item";

export function MessageGroup(props: IMessageGroup) {
  return (
    <div>
      <h3>{props.date}</h3>
      <ul>
        <For each={props.msgs}>{(msg) => <MessageItem msg={msg} />}</For>
      </ul>
    </div>
  );
}
