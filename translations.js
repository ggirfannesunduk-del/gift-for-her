// ==================================================
// НАСТРОЙКИ — меняй под себя!
// ==================================================

// Пароль для входа (регистр имеет значение!)
const SITE_PASSWORD = "love";

// ==================================================
// ТЕКСТЫ
// ==================================================

const translations = {
  ru: {
    mainTitle: "Самая красивая вьетнамка в Китае",
    tabGeneral: "📸 Сборник общих фото",
    tabBest: "✨ Лучшие фотографии",
    tabLetter: "💌 Кое-что для тебя",
    lockTitle: "Введи пароль, чтобы войти",
    lockPlaceholder: "Пароль",
    lockBtn: "Войти 💖",
    lockError: "Неверный пароль, попробуй ещё раз 💔",
    musicOn: "Выключить музыку",
    musicOff: "Включить музыку",
    letterTitle: "Тихо, только для тебя",
    letterSign: "— всегда рядом",
    letterBody: `Знаешь, есть вещи, которые сложно сказать вслух. Не потому что страшно — а потому что в обычной жизни всё время что-то отвлекает.

Я часто ловлю себя на мысли, что просто смотрю на тебя. Как ты хмуришься, когда что-то не получается. Как оживляешься, когда рассказываешь о чём-то своём. Как тихо улыбаешься, когда думаешь, что никто не видит.

Я не буду говорить громких слов — ты и так всё чувствуешь. Просто хочу, чтобы ты знала: рядом с тобой мне спокойно. И это, наверное, самое ценное, что вообще бывает.

Спасибо, что ты есть.`,
  },
  vi: {
    mainTitle: "Người Việt xinh đẹp nhất ở Trung Quốc",
    tabGeneral: "📸 Album ảnh chung",
    tabBest: "✨ Những bức ảnh đẹp nhất",
    tabLetter: "💌 Có điều muốn nói",
    lockTitle: "Nhập mật khẩu để vào",
    lockPlaceholder: "Mật khẩu",
    lockBtn: "Vào 💖",
    lockError: "Mật khẩu sai, thử lại nhé 💔",
    musicOn: "Tắt nhạc",
    musicOff: "Bật nhạc",
    letterTitle: "Nhẹ nhàng, chỉ dành cho em",
    letterSign: "— luôn ở bên em",
    letterBody: `Em biết không, có những điều khó nói thành lời. Không phải vì sợ — mà vì trong cuộc sống thường ngày luôn có điều gì đó khiến ta lỡ mất.

Anh thường bắt gặp mình chỉ ngồi nhìn em. Cách em cau mày khi có điều gì đó không suôn sẻ. Cách em bừng sáng khi kể về điều gì đó của riêng em. Cách em mỉm cười nhẹ khi nghĩ rằng không ai nhìn thấy.

Anh sẽ không nói những lời to tát — em vốn đã cảm nhận được rồi. Anh chỉ muốn em biết: ở bên em, anh thấy bình yên. Và đó có lẽ là điều quý giá nhất trên đời.

Cảm ơn em, vì em đã đến.`,
  },
  en: {
    mainTitle: "The Most Beautiful Vietnamese Girl in China",
    tabGeneral: "📸 General Photos",
    tabBest: "✨ Best Photos",
    tabLetter: "💌 Something for you",
    lockTitle: "Enter password to continue",
    lockPlaceholder: "Password",
    lockBtn: "Enter 💖",
    lockError: "Wrong password, try again 💔",
    musicOn: "Turn off music",
    musicOff: "Turn on music",
    letterTitle: "Quietly, just for you",
    letterSign: "— always near",
    letterBody: `You know, there are things that are hard to say out loud. Not because it's scary — but because everyday life always has something that gets in the way.

I often catch myself just watching you. The way you frown when something doesn't work out. The way you light up when you talk about something of your own. The way you smile quietly when you think no one is looking.

I won't say big words — you already feel them anyway. I just want you to know: next to you, I feel calm. And that, maybe, is the most precious thing there is.

Thank you for being here.`,
  }
};

// ==================================================
// ФОТО
// ==================================================

const photosData = {
  general: [
    {
      src: "1g.jpg",
      descriptions: {
        ru: "Даже когда ты просто смотришь в телефон, мир вокруг как будто замирает.",
        vi: "Ngay cả khi em chỉ nhìn vào điện thoại, thế giới xung quanh dường như ngừng lại.",
        en: "Even when you're just looking at your phone, the world around seems to pause."
      }
    },
    {
      src: "2g.jpg",
      descriptions: {
        ru: "Ты смотришь на воду, а я смотрю на тебя. И мне этого достаточно.",
        vi: "Em nhìn xuống nước, còn anh nhìn em. Và thế là đủ.",
        en: "You look at the water, and I look at you. And that's enough for me."
      }
    },
    {
      src: "3g.jpg",
      descriptions: {
        ru: "Люблю моменты, когда ты о чём-то задумываешься. В такие секунды ты особенно настоящая.",
        vi: "Anh thích những lúc em đang suy nghĩ điều gì đó. Những giây phút ấy em thật đến lạ.",
        en: "I love the moments when you're lost in thought. In those seconds, you're especially real."
      }
    },
    {
      src: "4g.jpg",
      descriptions: {
        ru: "Ветер в волосах и солнце на лице. Обычный день, который стал любимым.",
        vi: "Gió trong tóc và nắng trên mặt. Một ngày bình thường đã trở thành ngày anh thích nhất.",
        en: "Wind in your hair and sun on your face. An ordinary day that became my favorite."
      }
    },
    {
      src: "5g.jpg",
      descriptions: {
        ru: "Твоя улыбка здесь — как это море. Такая же светлая и бескрайняя.",
        vi: "Nụ cười của em ở đây giống như biển vậy. Tươi sáng và vô tận.",
        en: "Your smile here is like this sea. Just as bright and endless."
      }
    }
  ],
  best: [
    {
      src: "1b.jpg",
      descriptions: {
        ru: "Этот вечерний свет, это платье, этот взгляд... Ты как картина великого художника.",
        vi: "Ánh sáng chiều tối này, chiếc váy này, ánh mắt này... Em như một bức tranh của danh họa.",
        en: "This evening light, this dress, this look... You're like a masterpiece painting."
      }
    },
    {
      src: "2b.jpg",
      descriptions: {
        ru: "Немного загадочная, немного задумчивая. И безумно красивая.",
        vi: "Một chút bí ẩn, một chút trầm tư. Và đẹp vô cùng.",
        en: "A little mysterious, a little thoughtful. And incredibly beautiful."
      }
    },
    {
      src: "3b.jpg",
      descriptions: {
        ru: "Ты подставляешь лицо солнцу, и в этот момент я завидую солнечному свету.",
        vi: "Em đưa mặt đón nắng, và ngay lúc đó anh ghen tị với ánh nắng mặt trời.",
        en: "You lift your face to the sun, and in that moment I envy the sunlight."
      }
    },
    {
      src: "4b.jpg",
      descriptions: {
        ru: "Твой профиль, твой взгляд вдаль. Я мог бы смотреть на это бесконечно.",
        vi: "Góc nghiêng của em, ánh mắt nhìn xa xăm. Anh có thể nhìn mãi không chán.",
        en: "Your profile, your gaze into the distance. I could look at this forever."
      }
    },
    {
      src: "5b.jpg",
      descriptions: {
        ru: "Ты протягиваешь мне руку. И я готов идти за тобой куда угодно.",
        vi: "Em đưa tay về phía anh. Và anh sẵn sàng đi theo em đến bất cứ đâu.",
        en: "You reach out your hand to me. And I'm ready to follow you anywhere."
      }
    },
    {
      src: "6b.jpg",
      descriptions: {
        ru: "Один из тех дней, которые хочется сохранить подольше.",
        vi: "Một trong những ngày mà anh muốn giữ lại lâu hơn.",
        en: "One of those days I want to hold on to a little longer."
      }
    }
  ]
};
