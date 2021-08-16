# frozen_string_literal: true

RSpec.describe Logrb do
  it "has a version number" do
    expect(Logrb::VERSION).not_to be nil
  end

  context "text logger" do
    let(:buf) { StringIO.new }
    subject { described_class.new(buf) }

    it "writes output messages" do
      subject.debug("This is a test", with: :fields)
      expect(buf.string).to match(/^([^\s]+) [^D]+DEBUG[^:]+: <top \(required\)>: This is a test {:with=>:fields}\n$/)
    end

    it "writes dumps" do
      subject.dump("\x10\x20\x30")
      expect(buf.string.chomp).to include(<<~LOG)
        \e[37mDUMP\e[0m: <top (required)>:
                00000000  10 20 30                                         |. 0|
                00000003
      LOG
    end
  end

  context "json logger" do
    let(:buf) { StringIO.new }
    subject { described_class.new(buf, format: :json) }

    it "writes output messages" do
      time = double
      allow(time).to receive(:utc).and_return(0)
      allow(Time).to receive(:now).and_return(time)
      subject.debug("This is a test", with: :fields)
      data = JSON.parse(buf.string)
      # CAVEAT: Asserting this JSON as one Hash cause problems since
      # the "caller" key will change quite regularly. Instead, we will test
      # each key separately.
      expect(data["level"]).to eq("debug")
      expect(data["caller"]).to match(%r{.*/spec/logrb_spec.rb:\d+})
      expect(data["msg"]).to eq("This is a test")
      expect(data["ts"]).to eq(0)
      expect(data["with"]).to eq("fields")
    end
  end

  context "fields" do
    let(:buf) { StringIO.new }
    subject { described_class.new(buf, foo: :bar, fux: :bax) }

    it "merges fields" do
      inst = subject.with_fields(bar: :baz, foo: :fnord)
      expect(inst.fields).to eq({ foo: :fnord, bar: :baz, fux: :bax })
    end
  end
end
