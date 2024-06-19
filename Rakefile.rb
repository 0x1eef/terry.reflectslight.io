begin
  load "rake/tasks/deploy.rake"
rescue LoadError => ex
  warn "[warn] #{ex.class}: #{ex.message}"
end
load "rake/tasks/nanoc.rake"
load "rake/tasks/server.rake"
