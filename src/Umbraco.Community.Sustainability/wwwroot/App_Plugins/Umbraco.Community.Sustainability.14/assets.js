const i = {
  type: "workspaceView",
  alias: "Umbraco.Community.Sustainability.Workspace",
  name: "Sustainability Workspace",
  js: () => import("./sustainability-workspace-view-exh5n8wB.js"),
  weight: 10,
  meta: {
    icon: "icon-eco",
    pathname: "sustainability",
    label: "Sustainability"
  },
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: "Umb.Workspace.Document"
    }
  ]
}, a = [i], s = [
  {
    type: "globalContext",
    alias: "sustainability.context",
    name: "Sustainability context",
    js: () => import("./sustainability.context-ADG4GVgm.js")
  }
], n = [...s], e = (o, t) => {
  t.registerMany([
    ...n,
    ...a
  ]);
};
export {
  e as onInit
};
//# sourceMappingURL=assets.js.map
