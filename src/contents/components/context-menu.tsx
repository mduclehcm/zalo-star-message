import { UI, useContext, Switch, Match } from "@zalo/extension-sdk";

const CHECKING = 0,
  ERROR = 1,
  STARED = 2,
  UNSTAR = 3;

export function ContextMenu(props) {
  const ctx = useContext();

  const [state, setState] = ctx.states.create({
    status: CHECKING,
  });

  ctx.commands
    .run({
      command: "check-message",
      args: [[props.msg.msgId]],
    })
    .then((result) => {
      setState({
        checking: false,
        stared: result,
      });
    });

  function handleUnStar() {
    ctx.commands.run({
      command: "unstar-message",
      args: [[props.msg.msgId]],
    });
  }
  function handleStar() {
    ctx.commands.run({
      command: "star-message",
      args: [[props.msg]],
    });
  }

  return (
    <Switch>
      <Match value={state.status === STARED}>
        <UI.ContextMenuItem onclick={handleUnStar}>
          <UI.Typo>Unstar</UI.Typo>;
        </UI.ContextMenuItem>
      </Match>
      <Match value={state.status === UNSTAR}>
        <UI.ContextMenuItem onclick={handleStar}>
          <UI.Typo>Star</UI.Typo>;
        </UI.ContextMenuItem>
      </Match>
    </Switch>
  );
}
