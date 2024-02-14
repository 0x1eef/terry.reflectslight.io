# frozen_string_literal: true

module Mixin
  require_relative "mixin/opengraph"
  require_relative "mixin/erb"
  include Mixin::ERB
  include OpenGraph
end
use_helper Mixin
