# frozen_string_literal: true

module Mixin::OpenGraph
  def opengraph(context)
    erb "partials/opengraph.html.erb", local_assigns(context)
  end

  def local_assigns(context)
    {title: "In memory of Terry",
     description: "Terry Davis (1969 – 2018)",
     url: "https://terry.reflectslight.io/",
     image: "https://terry.reflectslight.io/i/TempleOS.png"}
  end
end
