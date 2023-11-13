require 'omniauth'
Rails.application.config.middleware.use OmniAuth::Builder do
    provider :twitter, "v8wATkSfKVNBjbq34RtyVrlzH", "wAP3DK7CLclHqXmJYvjQx6KjsWhY2rJEs81ELnqTXP4e0yKqv6"
end