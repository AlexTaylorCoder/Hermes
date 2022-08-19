
USERITER = 15
CHANNELITER = 5
MESSAGEITER = 10
SUBCHANNELITER = 10
MEMBERSITER = 12
REQUESTITER = 10
MESSAGEMERGEITER = 5


def find_rand table, iter
    table.find(rand(iter)+1)
end

def randBool
    ["True","False"].sample
end

def randLikes num
    rand(num)
end


USERITER.times do
    User.create(first_name:Faker::Name.first_name,last_name:Faker::Name.last_name,
        email:Faker::Internet.email,username:Faker::Internet.username,
        password_digest:Faker::Internet.password,bio:Faker::Lorem.sentences(number: 2))
end
CHANNELITER.times do
    Channel.create(name:Faker::Superhero.name,isPinned:randBool)
end

MESSAGEITER.times do
    Message.create(user:find_rand(User,USERITER),channel:find_rand(Channel,CHANNELITER),
    post:Faker::Lorem.sentences(number: 1),isPinned:randBool,likes:randLikes(20))
end

MEMBERSITER.times do
    Member.create(user:find_rand(User,USERITER),channel:find_rand(Channel,CHANNELITER),isAdmin:randBool)
end

SUBCHANNELITER.times do
    SubChannel.create(post:Faker::Lorem.sentences(number: 1),likes:randLikes(10))
end

REQUESTITER.times do
    Request.create(message:Faker::Lorem.sentences(number: 1),status:["pending","accepted","denied"].sample,member:find_rand(Member,MEMBERSITER),user:find_rand(User,USERITER))
end

MESSAGEMERGEITER.times do
    MessageMerge.create(message:find_rand(Message,MESSAGEITER),sub_channel:find_rand(SubChannel,SUBCHANNELITER))
end