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

export async function submit(
  denops: Denops,
  changelist: number,
): Promise<void> {
  let response = await denops.cmd(`!p4 submit -c ${changelist}`);
  console.log(response);
}

export async function changelist(denops: Denops): Promise<number> {
  let response = await denops.cmd("!p4 changelist -o");
  let changelist = response.match(/Change:\s+(\d+)/);
  if (changelist) {
    return parseInt(changelist[1]);
  } else {
    return -1;
  }
}

export async function sync(denops: Denops): Promise<void> {
  let response = await denops.cmd("!p4 sync");
  console.log(response);
}
