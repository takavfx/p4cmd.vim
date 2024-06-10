if exists('g:loaded_p4cmd')
  finish
endif
let g:loaded_p4cmd = 1

augroup denops=p4cmd
  autocmd!
  autocmd User DenopsPluginPost:p4cmd call denops#notify('p4cmd', 'init', [])
augroup END
