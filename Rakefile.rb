load "tasks/nanoc.rake"
load "tasks/server.rake"
load "tasks/deploy.rake" if File.readable? File.join(Dir.getwd, "tasks", "deploy.rake")
