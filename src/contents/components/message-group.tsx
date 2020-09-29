import { For } from "@zalo/extension-sdk";
import { MessageItem } from "./message-item";

export function MessageGroup(props) {
  return (
    <ul>
      <For items={props.msgs}>{(msg) => <MessageItem msg={msg} />}</For>
    </ul>
  );
}
