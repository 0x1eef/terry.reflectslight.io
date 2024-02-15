load "tasks/nanoc.rake"
load "tasks/deploy.rake" if File.readable? File.join(Dir.getwd, "tasks", "deploy.rake")

desc "Serve build/ on localhost"
task :server do
  sh "bundle exec adsf --root build/"
end
