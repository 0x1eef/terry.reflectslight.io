load "tasks/nanoc.rake"

desc "Serve build/ on localhost"
task :server do
  sh "bundle exec adsf --root build/"
end
