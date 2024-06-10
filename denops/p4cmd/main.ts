import { batch, Denops } from "./deps.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async init() {
      await batch.batch(denops, async (denops) => {
        await denops.cmd(
          `command! -nargs=0 P4Add call denops#request('${denops.name}', 'add', [])`,
        );
      });
    },

    async add(args: unknown) {
      denops.cmd("echo 'Hello, P4!'");
    },
  };
}
