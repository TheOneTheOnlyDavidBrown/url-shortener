class TinyUrl < ApplicationRecord
    validates_presence_of :long_url, :tiny_url
    validates :long_url, format: URI::regexp(%w[http https])
    validates_uniqueness_of :tiny_url
end
