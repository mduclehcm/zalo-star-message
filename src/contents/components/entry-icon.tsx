import { getContext, ZaloUIPosition } from "@zalo/extension-sdk";

const icon = <i class="fa fa-shop" style={{ "font-size": "23px" }} />;

export function EntryIcon(props) {
  const ctx = getContext();

  return (
    <div
      className={props.class}
      onClick={() => ctx.views.show(ZaloUIPosition.SIDE_BAR)}
    >
      {icon}
    </div>
  );
}
