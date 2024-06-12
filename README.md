# p4cmd.vim

Perforce (Helix Core) commands support for Vim.

## Installation

You have to install [Helix Core Command-Line Client (p4)](https://www.perforce.com/products/helix-core-apps/command-line-client) to use this plugin.

### dein.vim

```toml
[[plugins]]
repo = 'vim-denops/denops.vim'

[[plugins]]
repo = 'takavfx/dailynote.vim'
depends = 'denops.vim'
```

### lazyvim

```lua
return {
  {'vim-denops/denops.vim'},
  {
    'takavfx/p4cmd.vim',
    depends = 'denops.vim',
  },
}
```

## Documentation

[Document](doc/p4cmd.txt)

