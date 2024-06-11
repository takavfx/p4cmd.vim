import { Denops } from "./deps.ts";

export async function info(denops: Denops): Promise<void> {
  let response = await denops.cmd("!p4 info");
  console.log(response);
}

export async function add(denops: Denops): Promise<void> {
  let currentFile = await denops.call("expand", "%:p");
  let response = await denops.cmd(`!p4 add ${currentFile}`);
  // console.log(response);
}

export async function edit(denops: Denops): Promise<void> {
  let currentFile = await denops.call("expand", "%:p");
  let response = await denops.cmd(`!p4 edit ${currentFile}`);
  // console.log(response);
}

export async function revert(denops: Denops): Promise<void> {
  let currentFile = await denops.call("expand", "%:p");
  let response = await denops.cmd(`!p4 revert ${currentFile}`);
  // console.log(response);
}
