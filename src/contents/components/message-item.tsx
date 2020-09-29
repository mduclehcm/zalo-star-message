import { useContext } from "@zalo/extension-sdk";

export function MessageItem(props) {
  const ctx = useContext();

  function handleClick() {
    ctx.commands.run({
      target: "app",
      commands: "zoom-to-message",
    });
  }

  return <li onclick={handleClick}>{props.msg.content}</li>;
}
