# Logrb

**Logrb** is a small logging library for Ruby, inspired by Go's Zap.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'logrb'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install logrb

## Usage

Start by creating a new logger:

```ruby
require 'logrb'

logger = Logrb.new($stdout)

# Additionally, other options can be passed to the initializer:
# logger = Logrb.new($stdout, [format: :json], [level: :warn], [sample_field: :foo])
```

Then, call either `error`, `fatal`, `warn`, `info`, `debug`, or `dump`.

```ruby
logger.debug("Email dispatched", address: "foo@bar.com")
# => 2021-08-16T08:42:26.528-0300 DEBUG: <main>: Email dispatched {:address=>"foo@bar.com"}

logger.info("Operation completed", duration: 3.4)
# => 2021-08-16T08:43:00.790-0300 INFO: <main>: Operation completed {:duration=>3.4}

logger.warn("Attention is required", event: :something)
# => 2021-08-16T08:44:16.172-0300 WARN: <main>: Attention is required {:event=>:something}

logger.error("Something went wrong", StandardError.new("Boom"), user_id: 27)
# => 2021-08-16T08:47:09.968-0300 ERROR: <main>: Something went wrong {:user_id=>27}: Boom
#        (irb):2 in `<main>'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/workspace.rb:116 in `eval'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/workspace.rb:116 in `evaluate'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/context.rb:450 in `evaluate'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:567 in `block (2 levels) in eval_input'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:751 in `signal_status'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:548 in `block in eval_input'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:251 in `block (2 levels) in each_top_level_statement'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:233 in `loop'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:233 in `block in each_top_level_statement'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:232 in `catch'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:232 in `each_top_level_statement'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:547 in `eval_input'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:481 in `block in run'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:480 in `catch'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:480 in `run'
#        /usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:409 in `start'

logger.dump("Received data", "\xC0\xFF\xEE\xBA\xBE")
# => 2021-08-16T08:49:52.371-0300 DUMP: <main>: Received data
#        00000000  c0 ff ee ba be                                   |.....|
#        00000005
#
```

For production environments, it is recommended to use a JSON format, which spans
one line per entry:

```ruby
logger.debug("Email dispatched", address: "foo@bar.com")
# => {"level":"debug","caller":"(irb):10","msg":"Email dispatched","ts":1629115513,"address":"foo@bar.com"}

logger.info("Operation completed", duration: 3.4)
# => {"level":"info","caller":"(irb):11","msg":"Operation completed","ts":1629115513,"duration":3.4}

logger.warn("Attention is required", event: :something)
# => {"level":"warn","caller":"(irb):12","msg":"Attention is required","ts":1629115513,"event":"something"}

logger.error("Something went wrong", StandardError.new("Boom"), user_id: 27)
# => {"level":"error","caller":"(irb):13","msg":"Something went wrong","ts":1629115514,"stacktrace":"(irb):13 in `<main>'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/workspace.rb:116 in `eval'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/workspace.rb:116 in `evaluate'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/context.rb:450 in `evaluate'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:567 in `block (2 levels) in eval_input'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:751 in `signal_status'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:548 in `block in eval_input'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:251 in `block (2 levels) in each_top_level_statement'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:233 in `loop'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:233 in `block in each_top_level_statement'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:232 in `catch'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb/ruby-lex.rb:232 in `each_top_level_statement'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:547 in `eval_input'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:481 in `block in run'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:480 in `catch'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:480 in `run'\n/usr/local/Cellar/ruby/3.0.2/lib/ruby/3.0.0/irb.rb:409 in `start'","user_id":27}

logger.dump("Received data", "\xC0\xFF\xEE\xBA\xBE")
# => {"level":"dump","caller":"(irb):14","msg":"Received data","ts":1629115514,"dump":"00000000  c0 ff ee ba be                                   |.....|\n00000005"}

```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/heyvito/logrb. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/heyvito/logrb/blob/master/CODE_OF_CONDUCT.md).

## Code of Conduct

Everyone interacting in the Logrb project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/heyvito/logrb/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

```
The MIT License (MIT)

Copyright (c) 2021 Victor Gama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```
