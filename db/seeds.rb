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

# post_types = [
#   {
#     name: "magazine",
#   }
# ]
# post_types.each do |pt|
#   p=PostType.create(pt)
#   puts "Some magic just craete a #{ p.name } with id #{ p.id }!"
# end
#
#
# categories = [
#   {
#     name: "Люди",
#     description: "",
#     post_type_id: "1",
#   },
#   {
#     name: "История",
#     description: "",
#     post_type_id: "1",
#   },
#   {
#     name: "Атмосфера",
#     description: "",
#     post_type_id: "1",
#   },
#   {
#     name: "Полезное",
#     description: "",
#     post_type_id: "1",
#   },
#   {
#     name: "Путешествия",
#     description: "",
#     post_type_id: "1",
#   },
#   {
#     name: "Шорт-ы",
#     description: "",
#     post_type_id: "1",
#   },
#
# ]
# categories.each do |cat|
#   c=Category.create(cat)
#   puts "Some magic just craete a #{ c.name } with id #{ c.id }!"
# end


# posts = [
#   {
#   	name: "New Album",
#   	title: "Съемки фильма Прибой в Арктике",
#     category_id: "1",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#sea",
#     user_id: "1",
#   	content: " Вопросы - просто невероятный инструмент. Очень много интересных мыслей рождается в моей голове, после того, как меня о чем-то спрашивают. Вот, казалось бы, я и не думал об этой теме, но когда меня, в очередной раз, спросили о том, кого можно считать серфером -  я серьезно задумался. Захотелось сформулировать определение настоящего серфера. Последней каплей стало то, что мой друг Костя Кокорев неожиданно прислал мне сообщение: Я не считаю людей серферами, которые просто катаются на досках. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'post-0.png'))
#   },
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
#     image: File.open(Rails.root.join('public', 'images', 'post-1.png'))
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
#     image: File.open(Rails.root.join('public', 'images', 'post-2.png'))
#   },
#   {
#   	name: "New Album",
#   	title: "Кто такой настоящий серфер?",
#     category_id: "6",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#nature",
#     user_id: "1",
#   	content: " Вопросы - просто невероятный инструмент. Очень много интересных мыслей рождается в моей голове, после того, как меня о чем-то спрашивают. Вот, казалось бы, я и не думал об этой теме, но когда меня, в очередной раз, спросили о том, кого можно считать серфером -  я серьезно задумался. Захотелось сформулировать определение настоящего серфера. Последней каплей стало то, что мой друг Костя Кокорев неожиданно прислал мне сообщение: Я не считаю людей серферами, которые просто катаются на досках. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'post-3.png'))
#   },
#   {
#   	name: "New Album",
#   	title: "Упаковка серф доски",
#     category_id: "3",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#begginers",
#     user_id: "1",
#   	content: " В предверии очередной поездки я решил написать еще о сборах в дорогу. Сегодняшний совет будет о том, как паковать вашу доску. Все серферы сталкиваются с проблемами не очень аккуратных грузчиков. Часто просто чехол не спасает, что еще можно сделать, что бы защитить свою доску от повреждений при транспортировке. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'post-4.png')),
#   },
#   {
#   	name: "New Album",
#   	title: "Холодный серфинг в Питере",
#     category_id: "4",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#profi",
#     user_id: "1",
#   	content: " В предверии очередной поездки я решил написать еще о сборах в дорогу. Сегодняшний совет будет о том, как паковать вашу доску. Все серферы сталкиваются с проблемами не очень аккуратных грузчиков. Часто просто чехол не спасает, что еще можно сделать, что бы защитить свою доску от повреждений при транспортировке. Серферы - это те, кто что-то делают в серфинге. Доски крутые, путешествия сложные, волны редкие, кино, фотки классные. Понимают в досках сильно!))) Мне захотелось разобраться с этим вопросом. Я вспомнил, что Женя Крейд тоже размышлял на эту тему. Попросил его и Костю поделиться своими мыслями.",
#     image: File.open(Rails.root.join('public', 'images', 'post-5.png')),
#   },
#   {
#   	name: "New Album",
#   	title: "История скейтбординга в СССР",
#     category_id: "5",
#     post_type_id: "1",
#   	author: "Surface",
#     topic: "где вы любите серфить?",
#     tagline: "#sport",
#     user_id: "1",
#   	content: " Возможно некоторым это покажется странным, но скейтбординг каким то волшебным образом просочился к нам с запада. Его не только не отрицали в советской стране, а даже официально развивали. Поговорить о скейте, жизни и истории я предложил наверное самому глубоко погруженному в тему человеку Глебу Бенциовскому. Возможно некоторым это покажется странным, но скейтбординг каким то волшебным образом просочился к нам с запада. Его не только не отрицали в советской стране, а даже официально развивали. Поговорить о скейте, жизни и истории я предложил наверное самому глубоко погруженному в тему человеку Глебу Бенциовскому.",
#     image: File.open(Rails.root.join('public', 'images', 'post-6.png'))
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
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Петербург",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Камчатка",
#     description: "0 школ",
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
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Владивосток",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Анапа",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Крым",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Сахалин",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Калининград",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Мурманск",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#   {
#     name: "Курилы",
#     description: "0 школ",
#     image: File.open(Rails.root.join('public', 'images', 'pic-seed.jpg')),
#   },
#
# ]
# cities.each do |cit|
#   city=City.create(cit)
#   puts "Some magic just craete a #{ city.name } with id #{ city.id }!"
# end


surftypes = [
  {
    name: "классика"
  },
  {
    name: "сап"
  },
  {
    name: "вейк"
  },
  {
    name: "кайт"
  },
  {
    name: "винд"
  },
  {
    name: "скейт"
  },
  {
    name: "искусственная волна"
  },
]

surftypes.each do |surftype|
  sur = Surftypes.create(surftype)
  puts "Some magic just craete a #{ sur.name } with id #{ sur.id }!"
end


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
