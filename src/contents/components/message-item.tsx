import { IMessage, getContext } from "@zalo/extension-sdk";

export function MessageItem(props: { msg: IMessage }) {
  function handleClick() {
    const ctx = getContext();
    ctx.action.dispatch({
      target: "app",
      type: "zoom-to-message",
    });
  }

  return <li onClick={handleClick}>{props.msg.content}</li>;
}
