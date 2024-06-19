namespace :nanoc do
  require "bundler/setup"
  require "nanoc"
  cwd = File.realpath File.join(__dir__, "..", "..")

  desc "Clean the build/ directory"
  task :clean do
    Dir.chdir(cwd) do
      sh "rm -rf node_modules/.cache/"
      sh "rm -rf build/"
    end
  end

  desc "Produce the build/ directory"
  task :build, [:buildenv] do |t, args|
    ENV["buildenv"] = args.buildenv || ENV["buildenv"] || "development"
    Nanoc::CLI.run(["compile"])
  end

  desc "Produce the build/ directory on-demand"
  task :watch, %i[buildenv] => %i[nanoc:build]  do |t, args|
    require "listen"
    path = File.join(Dir.getwd, "src")
    Listen.to(path) do
      Bundler.with_unbundled_env do
        ENV["buildenv"] = args.buildenv || ENV["buildenv"] || "development"
        Nanoc::CLI.run(["compile"])
      end
    end.start
    sleep
  rescue Interrupt
    warn "SIGINT: exit"
    exit
  end
end
