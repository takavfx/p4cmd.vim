import { batch, Denops } from "./deps.ts";
import { add, edit, info, revert } from "./perforce.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async init() {
      await batch.batch(denops, async (denops) => {
        // P4Info
        await denops.cmd(
          `command! -nargs=0 P4Info call denops#request('${denops.name}', 'info', [])`,
        );

        // P4Add
        await denops.cmd(
          `command! -nargs=0 P4Add call denops#request('${denops.name}', 'add', [])`,
        );

        // P4Edit
        await denops.cmd(
          `command! -nargs=0 P4Edit call denops#request('${denops.name}', 'edit', [])`,
        );

        // P4Revert
        await denops.cmd(
          `command! -nargs=0 P4Revert call denops#request('${denops.name}', 'revert', [])`,
        );
      });
    },

    async info(args) {
      info(denops);
    },

    async add(args) {
      add(denops);
    },

    async edit(args) {
      edit(denops);
    },

    async revert(args) {
      revert(denops);
    },
  };
}
