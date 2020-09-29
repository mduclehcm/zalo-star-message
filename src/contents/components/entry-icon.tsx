import { useContext } from "@zalo/extension-sdk";

const icon = <i class="fa fa-shop" style={{ "font-size": "23px" }} />;

export function EntryIcon(props) {
  const ctx = useContext();

  function onClick() {
    ctx.commands.run({
      target: "app",
      command: "set-active-size-bar",
    });
  }

  return (
    <div className={props.class} onClick={onClick}>
      {icon}
    </div>
  );
}
