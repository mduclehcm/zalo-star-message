import { activateRenderer, RendererContext, VIEWS } from "@zalo/extension-sdk";

import { EntryIcon } from "./components/entry-icon";
import { SideBar } from "./components/side-bar";
import { ContextMenu } from "./components/context-menu";

activateRenderer((ctx: RendererContext) => {
  // add but not show
  // args: slot, component, tag: sidebar1, sidebar2,v.v..
  ctx.views.register(VIEWS.SIDE_BAR, SideBar);

  // add and show
  ctx.views.add(VIEWS.ENTRY_ICON, EntryIcon);
  ctx.views.add(VIEWS.MESSAGE_CONTEXT_MENU, ContextMenu);
});
