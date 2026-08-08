# frozen_string_literal: true

class Logrb
  class NoopLogger
    def initialize(*); end
    def with_fields(**) = self
    def error(*, **) = self
    def fatal(*, **) = self
    def unknown(*, **) = self
    def warn(*, **) = self
    def info(*, **) = self
    def debug(*, **) = self
    def reset(*, **) = self
    def dump(*, **) = self
  end
end
