# frozen_string_literal: true

module Mixin::OpenGraph
  def opengraph(context)
    erb "partials/opengraph.html.erb", local_assigns(context)
  end

  def local_assigns(context)
    {title: "In memory of Terry",
     description: "Terry Davis (1969 – 2018) was a talented computer programmer " \
                  "who dedicated a large part of his life to the creation of TempleOS. " \
                  "Despite suffering from schizophrenia, Terry left this world with " \
                  "impressive accomplishments, and as an inspiration to many.",
     url: "https://terry.reflectslight.io/",
     image: "https://terry.reflectslight.io/i/TempleOS.png"}
  end
end
