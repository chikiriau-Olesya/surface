# School.destroy_all
# puts "Destroyed everything you touch"

# Create pages of pastTypes
# post_types = [
#   {
#     name: "sport"
#   },
#   {
#     name: "afisha"
#   }
#
# ]
#
# post_types.each do |pt|
#   r=PostType.create(pt)
#   puts "Some magic just craete a #{ r.name } with id #{ r.id }!"
# end


# users = [
#   {
#     email: "shevoles@list.ru",
#     username: "Olesya Shevchenko",
#     isadmin: true,
#     encrypted_password: "123456789"
#   }
#
# ]
#
# users.each do |us|
#   r=User.create(us)
#   puts "Some magic just craete a #{ r.username } with id #{ r.id }!"
# end

# posts = [
#   {
#   	name: "New Album",
#   	title: "The Bad Seeds",
#   	author: "Nick Cave",
#   	content: "Tracklist",
#     image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg'))
#   },
#   {
#   	name: "Old Album",
#   	title: "The Bad Seeds Old",
#   	author: "Nick Cave Old Too",
#   	content: "Some Old Tracklist",
#     image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg'))
#   },
#   {
#     name: "Album",
#     title: "The Seeds Old",
#     author: "Nick Cave Old Nick  Too",
#     content: "Some Old Tracklist",
#     image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg'))
#   },
#   {
#     name: "ONick ",
#     title: "The Bad Seeds Old",
#     author: "Nick Cave Old Too",
#     content: "Some Old Tracklist",
#     image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg'))
#   },
#   {
#     name: "Nlbum",
#     title: "The Bad Seeds Old",
#     author: "Nick Too",
#     content: "Some Old Tracklist",
#     image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg'))
#   }
# ]

# posts.each do |post|
# 	postik = Post.create(post)
# 	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
# end
