import { useContext, Match, Switch, For, UI } from "@zalo/extension-sdk";

function MessageItem() {}

function MessageGroup() {
  return (
    <div>
      {store.va}
      <ul>
        <For items={group.msgs}>{(msg) => <li>{msg.content}</li>}</For>
      </ul>
    </div>
  );
}

export function SideBar(props) {
  const ctx = useContext();
  const store = ctx.store.getStore("star-message");

  ctx.commands.run({
    command: "load-message",
  });

  return (
    <Switch>
      <Match value={store.loading}>
        <UI.Typo>Loading</UI.Typo>
      </Match>
      <Match value={!store.loading}>
        <For items={store.messageGroups}>
          {(group) => <MessageGroup msgs={group.msgs} />}
        </For>
      </Match>
    </Switch>
  );
}
