import { z, getContext } from "@zalo/extension-sdk";
import { createState, Switch, Match } from "solid-js";

const CHECKING = 0,
  ERROR = 1,
  STARED = 2,
  UNSTAR = 3;

export function ContextMenu(props) {
  const ctx = getContext();

  const [state, setState] = createState({
    status: CHECKING,
  });

  ctx.action
    .dispatch<boolean>({
      type: "check-message",
      args: [props.msg.msgId],
    })
    .then((result) => {
      setState({
        status: result ? STARED : UNSTAR,
      });
    })
    .catch(() => {
      setState({
        status: ERROR,
      });
    });

  function handleUnStar() {
    ctx.action.dispatch({
      type: "unstar-message",
      args: [props.msg.msgId],
    });
  }

  function handleStar() {
    ctx.action.dispatch({
      type: "star-message",
      args: [props.msg],
    });
  }

  return (
    <Switch>
      <Match when={state.status === STARED}>
        <z.ContextMenuItem onclick={handleUnStar}>
          <z.Typo>Unstar</z.Typo>;
        </z.ContextMenuItem>
      </Match>
      <Match when={state.status === UNSTAR}>
        <z.ContextMenuItem onclick={handleStar}>
          <z.Typo>Star</z.Typo>;
        </z.ContextMenuItem>
      </Match>
    </Switch>
  );
}
