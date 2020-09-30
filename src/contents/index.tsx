import {
  activateRenderer,
  RendererContext,
  ZaloUIPosition,
} from "@zalo/extension-sdk";

import { EntryIcon } from "./components/entry-icon";
import { SideBar } from "./components/side-bar";
import { ContextMenu } from "./components/context-menu";

activateRenderer((ctx: RendererContext) => {
  ctx.views.register(ZaloUIPosition.SIDE_BAR, SideBar);
  ctx.views.register(ZaloUIPosition.ENTRY_ICON_BOTTOM, EntryIcon);
  ctx.views.register(ZaloUIPosition.MESSAGE_CONTEXT_MENU, ContextMenu);
});
