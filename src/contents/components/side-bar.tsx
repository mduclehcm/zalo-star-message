import { getContext, z } from "@zalo/extension-sdk";
import { For, Switch, Match } from "solid-js";
import { IMessageStore } from "../../common/messages-store";
import { MessageGroup } from "./message-group";

export function SideBar() {
  const ctx = getContext();
  const [state] = ctx.store.get<IMessageStore>("star-message");

  ctx.action.dispatch({
    type: "load-message",
  });

  return (
    <Switch>
      <Match when={state.loading}>
        <z.Typo>Loading</z.Typo>
      </Match>
      <Match when={!state.loading}>
        <For each={state.groups}>
          {(group) => <MessageGroup date={group.date} msgs={group.msgs} />}
        </For>
      </Match>
    </Switch>
  );
}
