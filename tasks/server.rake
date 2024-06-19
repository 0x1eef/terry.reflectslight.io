desc "Start web server"
task :server, [:protocol] do |_t, args|
  require "yaml"
  require "ryo"
  require "server"
  nanoc = Ryo.from(YAML.load_file("./nanoc.yaml"))
  h = args.to_h
  o = if h[:protocol] == 'unix'
        {unix: nanoc.server.unix.path}
      else
        {host: nanoc.server.tcp.host, port: nanoc.server.tcp.port}
      end
  s = Server.dir(nanoc.output_dir, o)
  s.start(block: true)
rescue Interrupt
  s.stop
end
