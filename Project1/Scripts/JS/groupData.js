const groups = {
  moms: {
    title: 'Kfar Aza Moms✌🏻❤️',
    hebrewName: 'אימהות',
    englishName: 'moms'
  },
  youngPrivate: {
    title: 'Young Generation Private',
    hebrewName: 'דור-צעיר-פרייבט',
    englishName: 'youngPrivate'
  },
  young: {
    title: 'Young Generation 🐫',
    hebrewName: 'דור-צעיר',
    englishName: 'young'
  },
  bulgaria: {
    title: 'Trip to Bulgaria',
    hebrewName: 'טיול-בולגריה',
    englishName: 'bulgaria'
  },
  secondHand: {
    title: 'Kfar Aza Second Hand🛋 ',
    hebrewName: 'יד-שנייה',
    englishName: 'secondHand'
  },
  idf: {
    title: 'IDF Forces',
    hebrewName: 'כוחות-צהל',
    englishName: 'idf'
  },
  tzach: {
    title: 'Kfar Aza Emergency Team',
    hebrewName: 'צוות-צחי',
    englishName: 'tzach'
  },
  tweeters: {
    title: '🐣Tweeters in the Village🐔',
    hebrewName: 'מצייצות',
    englishName: 'tweeters'
  }
};

function translate(input) {
  for (const group of Object.values(groups)) {
    if (group.hebrewName === input) return group.englishName;
    if (group.englishName === input) return group.hebrewName;
  }
  console.warn(`Translation not found for: "${input}"`);
  return input;
}

function getGroupName(name) {
  const group = groups[name];
  if (group) {
    return group.title;
  } else {
    console.warn(`Group name not found for: "${name}"`);
    return name;
  }
}

//module.exports = { translate, getGroupName, groups };