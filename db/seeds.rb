# Post.destroy_all
# Category.destroy_all
# User.destroy_all
# puts "Destroyed everything you touch"

#-----USERS-----USERS-----USERS-----USERS-----USERS-----USERS
# users = [
#   {
#     email: "shevoles@list.ru",
#     username: "Олеся Шевченко",
#     isadmin: true,
#     password: "123456789",
#   },
# ]
# users.each do |us|
#   r=User.create(us)
#   puts "Some magic just craete a #{ r.username } with id #{ r.id }!"
# end


# ---MEDIA------MEDIA------MEDIA------MEDIA------MEDIA------MEDIA------

post_types = [
  {
    name: "magazine",
  }
]
post_types.each do |pt|
  p=PostType.create(pt)
  puts "Some magic just craete a #{ p.name } with id #{ p.id }!"
end


categories = [
  {
    name: "Люди",
    description: "",
    post_type_id: "1",
  },
  {
    name: "История",
    description: "",
    post_type_id: "1",
  },
  {
    name: "Атмосфера",
    description: "",
    post_type_id: "1",
  },
  {
    name: "Полезное",
    description: "",
    post_type_id: "1",
  },
  {
    name: "Путешествия",
    description: "",
    post_type_id: "1",
  },
  {
    name: "Шорт-ы",
    description: "",
    post_type_id: "1",
  },

]
categories.each do |cat|
  c=Category.create(cat)
  puts "Some magic just craete a #{ c.name } with id #{ c.id }!"
end


# posts = [
#   {
#   	name: "New Album",
#   	title: "Кто такой настоящий серфер?",
#     category_id: "1",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#surf",
#     user_id: "1",
#   	content: " Вопросы - просто невероятный инструмент. Очень много интересных мыслей рождается в моей голове, после того, как меня о чем-то спрашивают. Вот, казалось бы, я и не думал об этой теме, но когда меня, в очередной раз, спросили о том, кого можно считать серфером -  я серьезно задумался. Захотелось сформулировать определение настоящего серфера. Последней каплей стало то, что мой друг Костя Кокорев неожиданно прислал мне сообщение: Я не считаю людей серферами, которые просто катаются на досках. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg'))
#   },
#   {
#   	name: "New Album",
#   	title: "Ремонт доски для серфинга",
#     category_id: "2",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#kamchatka",
#     user_id: "1",
#   	content: " Вопросы - просто невероятный инструмент. Очень много интересных мыслей рождается в моей голове, после того, как меня о чем-то спрашивают. Вот, казалось бы, я и не думал об этой теме, но когда меня, в очередной раз, спросили о том, кого можно считать серфером -  я серьезно задумался. Захотелось сформулировать определение настоящего серфера. Последней каплей стало то, что мой друг Костя Кокорев неожиданно прислал мне сообщение: Я не считаю людей серферами, которые просто катаются на досках. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg'))
#   },
#   {
#   	name: "New Album",
#   	title: "Упаковка серф доски",
#     category_id: "2",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#begginers",
#     user_id: "1",
#   	content: " В предверии очередной поездки я решил написать еще о сборах в дорогу. Сегодняшний совет будет о том, как паковать вашу доску. Все серферы сталкиваются с проблемами не очень аккуратных грузчиков. Часто просто чехол не спасает, что еще можно сделать, что бы защитить свою доску от повреждений при транспортировке. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#   	name: "New Album",
#   	title: "Упаковка серф доски",
#     category_id: "2",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#profi",
#     user_id: "1",
#   	content: " В предверии очередной поездки я решил написать еще о сборах в дорогу. Сегодняшний совет будет о том, как паковать вашу доску. Все серферы сталкиваются с проблемами не очень аккуратных грузчиков. Часто просто чехол не спасает, что еще можно сделать, что бы защитить свою доску от повреждений при транспортировке. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#
# ]
# posts.each do |post|
# 	postik = Post.create(post)
# 	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
# end



# ---SHOOLL------SHOOLL--------SHOOLL----------SHOOLL-------------

# cities = [
#   {
#     name: "Москва",
#     description: "0 школ",
#     longitude: "55.751574",
#     latitude: "37.573856",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Петербург",
#     description: "0 школ",
#     longitude: "30.188478′",
#     latitude: "59.563178′",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Камчатка",
#     description: "0 школ",
#     longitude: "158.3902",
#     latitude: " 53.0239",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Хабаровск",
#     description: "0 школ",
#     longitude: "135.10117",
#     latitude: "48.51578",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Сочи",
#     description: "0 школ",
#     longitude: "39.4313",
#     latitude: "43.3507",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Владивосток",
#     description: "0 школ",
#     longitude: "131.88692",
#     latitude: "43.11981",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Анапа",
#     description: "0 школ",
#     longitude: "37.31992",
#     latitude: "44.8857",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Крым",
#     description: "0 школ",
#     longitude: "39.309822",
#     latitude: "47.18015",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Сахалин",
#     description: "0 школ",
#     longitude: "77.550002",
#     latitude: "53.199998​",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Калининград",
#     description: "0 школ",
#     longitude: "20.300000",
#     latitude: "54.431200",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Мурманск",
#     description: "0 школ",
#     longitude: "33.08266",
#     latitude: "68.95852",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Курилы",
#     description: "0 школ",
#     longitude: "147.9089355",
#     latitude: "45.1381645",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },

# ]
# cities.each do |cit|
#   city=City.create(cit)
#   puts "Some magic just craete a #{ city.name } with id #{ city.id }!"
# end


# surftypes = [
#   {
#     name: "классика"
#   },
#   {
#     name: "сап"
#   },
#   {
#     name: "вейк"
#   },
#   {
#     name: "кайт"
#   },
#   {
#     name: "винд"
#   },
#   {
#     name: "скейт"
#   },
#   {
#     name: "искусственная волна"
#   },
# ]
#
# surftypes.each do |surftype|
#   sur = Surftypes.create(surftype)
#   puts "Some magic just craete a #{ sur.name } with id #{ sur.id }!"
# end


# schools = [
#   {
#     name: "QUIKSILVER SURF CAMP&SCHOOL",
#     description: "Камчатка - единственное место в России, берега которого омываются водами Тихого Океана. Именно здесь вы найдете самые стабильные условия для занятия серфингом в нашей стране.Пустые лайнапы тихого океана, вулканические пески халактырского бичбрейка, фантастические рассветы.Мы приглашаем вас в незабываемое путешествие по Камчатке.",
#     longitude: "классика",
#     latitude: "классика",
#     city_id: "1",
#     surftype_id: "1",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#     inst: "kamchatka.surf",
#     tg: "kamchatka_surf",
#     fb: "классика",
#     website: "https://kamchatkasurf.ru/",
#     email: "классика",
#     tel: "+79147871116",
#     service: "everything",
#     price: "от 4200руб",
#     season: "Август - Сентябрь",
#     wind: "19°С",
#     water: "16°С",
#     wetsuit: "1.5 –2.3 м",
#     cafe: "true",
#     shower: "true",
#     room: "true",
#     shop: "true",
#     equip: "true",
#     car: "true",
#     gallery: "",
#   },
#   {
#     name: "QUIKSILVER SURF CAMP&SCHOOL",
#     description: "Камчатка - единственное место в России, берега которого омываются водами Тихого Океана. Именно здесь вы найдете самые стабильные условия для занятия серфингом в нашей стране.Пустые лайнапы тихого океана, вулканические пески халактырского бичбрейка, фантастические рассветы.Мы приглашаем вас в незабываемое путешествие по Камчатке.",
#     longitude: "классика",
#     latitude: "классика",
#     city_id: "2",
#     surftype_id: "3",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#     inst: "kamchatka.surf",
#     tg: "kamchatka_surf",
#     fb: "классика",
#     website: "https://kamchatkasurf.ru/",
#     email: "классика",
#     tel: "+79147871116",
#     service: "everything",
#     price: "от 4200руб",
#     season: "Август - Сентябрь",
#     wind: "19°С",
#     water: "16°С",
#     wetsuit: "1.5 –2.3 м",
#     cafe: "true",
#     shower: "true",
#     room: "true",
#     shop: "true",
#     equip: "true",
#     car: "true",
#     gallery: "",
#   },
#   {
#     name: "QUIKSILVER SURF CAMP&SCHOOL",
#     description: "Камчатка - единственное место в России, берега которого омываются водами Тихого Океана. Именно здесь вы найдете самые стабильные условия для занятия серфингом в нашей стране.Пустые лайнапы тихого океана, вулканические пески халактырского бичбрейка, фантастические рассветы.Мы приглашаем вас в незабываемое путешествие по Камчатке.",
#     longitude: "классика",
#     latitude: "классика",
#     city_id: "3",
#     surftype_id: "4",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#     inst: "kamchatka.surf",
#     tg: "kamchatka_surf",
#     fb: "классика",
#     website: "https://kamchatkasurf.ru/",
#     email: "классика",
#     tel: "+79147871116",
#     service: "everything",
#     price: "от 4200руб",
#     season: "Август - Сентябрь",
#     wind: "19°С",
#     water: "16°С",
#     wetsuit: "1.5 –2.3 м",
#     cafe: "true",
#     shower: "true",
#     room: "true",
#     shop: "true",
#     equip: "true",
#     car: "true",
#     gallery: "",
#   },
# ]
# schools.each do |school|
#   scho = Surftypes.create(school)
#   puts "Some magic just craete a #{ scho.name } with id #{ scho.id }!"
# end
