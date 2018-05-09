FactoryBot.define do
  factory :group do
    name "Hello world"
    description { Faker::Lorem.sentence(3) }
    user
  end
end
