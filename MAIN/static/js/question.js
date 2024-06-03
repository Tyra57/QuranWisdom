//General -creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What is the first Surah in the Quran?",
        answer: "Al-Fatiha",
        options: ["Al-Fatiha", "Al-Baqarah", "Al-Imran", "Al-Nisa"],
    },
    {
        numb: 2,
        question: "Which Surah is known as the heart of the Qur'an?",
        answer: "Yasin",
        options: ["Al-Baqarah", "Al-Fatihah", "Yasin", "Al-Mulk"],
    },
    {
        numb: 3,
        question: "Reciting which two surahs protect from that even evil eye?",
        answer: "An-Nas, Al-Falaq",
        options: ["An-Nas, Al-Falaq", "Al-Fatihah, Al-Baqarah", "Al-Fatihah, Yasin", "Al-Ikhlas, Al-Falaq"],
    },
    {
        numb: 4,
        question: "In which surah of the holy Quran does every ayah have the word Allah in it?",
        answer: "Al-Mujadalah", 
        options: ["Ar-Rahman", "Al-Mujadalah", "Al-Waqiah", "Al-Mulk"],
    },
    {
        numb: 5,
        question: "Which surah was revealed first?",
        answer: "Al-'Alaq",
        options: ["Al-'Alaq", "Al-Fatiha", "Al-Muzzammil", "Al-Baqarah"],
    },
    {
        numb: 6,
        question: "Which surah starts with the verse “Did we not expand your chest for you?”",
        answer: "Ash-Sharh",
        options: ["Ad-Dhuha", "Al-Asr", "Al-Naba'", "Ash-Sharh"],
    },
];

//Stories -creating an array and passing the number, questions, options, and answers for the second quiz
let questions2 = [
    {
        numb: 1,
        question: "What advice did Luqman the Wise give to his son, as mentioned in the Quran?",
        answer: "To be grateful to Allah and not to associate anything with Him",
        options: ["To seek wealth and prosperity", "To be grateful to Allah and not to associate anything with Him", "To become a great leader", "To travel the world and seek knowledge"],
    },
    {
        numb: 2,
        question: "Which story in the Quran speaks about a group of youths who sought refuge in a cave to preserve their faith?",
        answer: "The People of the Cave",
        options: ["The People of the Elephant", "The Companions of the Rass", "The People of the Cave", "The Owners of the Garden"],
    },
    {
        numb: 3,
        question: "What lesson is derived from the story of the Sabbath-breakers mentioned in the Quran?",
        answer: "The consequences of disobeying Allah's commands",
        options: ["The benefits of fishing", "The importance of community service", "The consequences of disobeying Allah's commands", "The technique of agriculture"],
    },
    {
        numb: 4,
        question: "Which story in the Quran is about a prophet who was swallowed by a large fish?",
        answer: "The story of Prophet Yunus (Jonah)",
        options: ["The story of Prophet Musa (Moses)", "The story of Prophet Yunus (Jonah)", "The story of Prophet Nuh (Noah)", "The story of Prophet Sulaiman (Solomon)"],
    },
    {
        numb: 5,
        question: "What was the cause of the conflict between Habil (Abel) and Qabil (Cain) as mentioned in the Quran?",
        answer: "Qabil's jealousy and anger over Allah accepting Habil's offering but not his",
        options: ["A dispute over land", "Qabil's jealousy and anger over Allah accepting Habil's offering but not his", "A disagreement on who would lead their people", "Differences in their professions"],
    },
    {
        numb: 6,
        question: "In the Quran, who are 'Gog and Magog' (Ya'juj and Ma'juj) mentioned in relation to?",
        answer: "Dhul-Qarnayn",
        options: ["The people of the cave", "The builders of the Tower of Babel", "Dhul-Qarnayn", "The people of Aad"],
    },
];

//Sciences -creating an array and passing the number, questions, options, and answers for the third quiz
let questions3 = [
    {
        numb: 1,
        question: "The Quran mentions a 'barrier' between two kinds of water. What does this mean in simple terms?",
        answer: "Freshwater and saltwater can meet without mixing right away",
        options: [
            "Rivers cannot flow into seas",
            "Freshwater and saltwater can meet without mixing right away",
            "Fish cannot swim from freshwater to saltwater",
            "Boats cannot sail from rivers to seas"
        ],
    },
    {
        numb: 2,
        question: "According to the Quran, what percentage of the Earth's surface is covered by water?",
        answer: "Approximately 71%",
        options: ["Exactly 50%", "Approximately 71%", "Less than 60%", "More than 80%"],
    },
    {
        numb: 3,
        question: "What does the Quran say about the sky and its vastness?",
        answer: "The sky and universe are expanding",
        options: [
            "The sky is painted blue",
            "The sky and universe are expanding",
            "The sky is a solid dome",
            "The sky is a blanket that covers the Earth"
        ],
    },
    {
        numb: 4,
        question: "What does the Quran say about the stages of human development before birth?",
        answer: "Humans are created from a drop of fluid and then pass through distinct stages",
        options: [
            "Humans are fully formed at the time of conception",
            "Humans are created from clay in a single step",
            "Humans are created from a drop of fluid and then pass through distinct stages",
            "The Quran does not mention stages of embryonic development"
        ],
    },
    {
        numb: 5,
        question: "How does the Quran describe the origin of life?",
        answer: "Life originated from water",
        options: ["Life originated from the sun", "Life originated from soil", "Life originated from water", "Life originated from fire"],
    },
    {
        numb: 6,
        question: "The Quran talks about mountains being like 'stakes' or 'anchors.' What does this tell us?",
        answer: "Mountains help keep the Earth stable",
        options: [
            "Mountains can move from place to place",
            "Mountains are mainly for beauty",
            "Mountains help keep the Earth stable",
            "Mountains grow like trees"
        ],
    },
];

//Dua's -creating an array and passing the number, questions, options, and answers for the fourth quiz
let questions4 = [
    {
        numb: 1,
        question: "Which dua is recited for seeking mercy and forgiveness for oneself and one's parents?",
        answer: "رَبِّ ٱغْفِرْ لِى وَلِوَٲلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
        options: [
            "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَـٰسِرِينَ",
            "رَبِّ ٱجْعَلْنِى مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِى ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ",
            "رَبِّ ٱغْفِرْ لِى وَلِوَٲلِدَىَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ ٱلْحِسَابُ",
            "رَبَّنَا آتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْآخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱلنَّارِ"
        ],
    },
    {
        numb: 2,
        question: "In dua, what does 'اَللَّهُمَّ' (Allahumma) signify?",
        answer: "O Allah",
        options: [
            "O Allah",
            "By Allah",
            "For Allah",
            "With Allah"
        ],
    },
    {
        numb: 3,
        question: "Which dua is recommended for seeking protection and refuge from all evils?",
        answer: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِن شَرِّ مَا خَلَقَ",
        options: [
            "رَبِّ زِدْنِي عِلْمًا",
            "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
            "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِن شَرِّ مَا خَلَقَ",
            "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
        ],
    },
    {
        numb: 4,
        question: "What is the meaning of 'اِغْفِرْ لِي' (Ighfir li) in supplications?",
        answer: "Forgive me",
        options: [
            "Guide me",
            "Forgive me",
            "Bless me",
            "Protect me"
        ],
    },
    {
        numb: 5,
        question: "What supplication (dua) did Prophet Yunus (Jonah) make while inside the belly of the whale?",
        answer: "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
        options: ["تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", "رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ", "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ", "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"],
    },
    {
        numb: 6,
        question: "What supplication (dua) did Prophet Musa (Moses) make when he felt insufficient for the task ahead?",
        answer: "رَبِّ ٱشْرَحْ لِى صَدْرِى وَيَسِّرْ لِىٓ أَمْرِى وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى يَفْقَهُوا۟ قَوْلِى",
        options: [
            "رَبِّ زِدْنِى عِلْمًۭا",
            "رَّبَّنَا آتِنَا فِى ٱلدُّنْيَا حَسَنَةًۭ وَفِى ٱلْآخِرَةِ حَسَنَةًۭ",
            "رَبِّ ٱشْرَحْ لِى صَدْرِى وَيَسِّرْ لِىٓ أَمْرِى وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى يَفْقَهُوا۟ قَوْلِى",
            "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا"
        ],
    }
];

//Prophets -creating an array and passing the number, questions, options, and answers for the fifth quiz
let questions5 = [
    {
        numb: 2,
        question: "Which prophet is mentioned by name most frequently in the Quran?",
        answer: "Musa (Moses)",
        options: [
            "Ibrahim (Abraham)",
            "Musa (Moses)",
            "Isa (Jesus)",
            "Muhammad (ﷺ)"
        ],
    },
    {
        numb: 2,
        question: "Which Prophet was known for his wisdom and was given the ability to understand the language of birds?",
        answer: "Sulaiman (a.s.)",
        options: ["Sulaiman (a.s.)", "Dawud (a.s.)", "Isa (a.s.)", "Adam (a.s.)"],
    },
    {
        numb: 3,
        question: "Which prophet is known for his miraculous birth and speaking to people from the cradle?",
        answer: "Isa (Jesus)",
        options: [
            "Musa (Moses)",
            "Isa (Jesus)",
            "Yahya (John)",
            "Muhammad (ﷺ)"],
    },
    {
        numb: 4,
        question: "Which Prophet was given the Torah by Allah?",
        answer: "Musa (a.s.)",
        options: ["Musa (a.s.)", "Isa (a.s.)", "Muhammad (ﷺ)", "Dawud (a.s.)"],
    },
    {
        numb: 5,
        question: "Which prophet was swallowed by a whale as a test from Allah?",
        answer: "Yunus (Jonah)",
        options: [
            "Yunus (Jonah)",
            "Musa (Moses)",
            "Yusuf (Joseph)",
            "Ibrahim (Abraham)"
        ],
    },
    {
        numb: 6,
        question: "Which Prophet was raised to heaven and will return before the Day of Judgment?",
        answer: "Isa (a.s.)",
        options: ["Musa (a.s.)", "Ibrahim (a.s.)", "Isa (a.s.)", "Idris (a.s.)"],
    },
];

//Companions -creating an array and passing the number, questions, options, and answers for the sixth quiz
let questions6 = [
    {
        numb: 1,
        question: "Who was the companion known for narrating the highest number of Hadith from Prophet Muhammad (ﷺ)?",
        answer: "Abu Huraira (r.a.)",
        options: [
            "Abdullah ibn Umar (r.a.)",
            "Anas ibn Malik (r.a.)",
            "Abu Huraira (r.a.)",
            "Aisha bint Abi Bakr (r.a.)"
        ],
    },
    {
        numb: 2,
        question: "Who was the first adult male to embrace Islam and is known as the Prophet Muhammad's (ﷺ) close friend and advisor?",
        answer: "Abu Bakr as-Siddiq (r.a.)",
        options: [
            "Umar ibn al-Khattab (r.a.)",
            "Ali ibn Abi Talib (r.a.)",
            "Abu Bakr as-Siddiq (r.a.)",
            "Uthman ibn Affan (r.a.)"
        ],
    },
    {
        numb: 3,
        question: "Who is the only companion whose name is mentioned in the Quran?",
        answer: "Zayd Ibn Haritha (r.a.)",
        options: ["Abu Bakr (r.a.)", "Zayd Ibn Haritha (r.a.)", "Umar Al-Khattab (r.a.)", "Ali (r.a.)"],
    },
    {
        numb: 4,
        question: "Who was the companion responsible for compiling the Quran into a single book after the death of Prophet Muhammad (ﷺ)?",
        answer: "Zayd ibn Thabit (r.a.)",
        options: [
            "Abu Bakr as-Siddiq (r.a.)",
            "Uthman ibn Affan (r.a.)",
            "Zayd ibn Thabit (r.a.)",
            "Ali ibn Abi Talib (r.a.)"
        ],
    },
    {
        numb: 5,
        question: "Which companion was known for his exceptional bravery in the Battles of Islam and was given the title 'The Sword of Allah'?",
        answer: "Khalid ibn al-Walid (r.a.)",
        options: [
            "Ali ibn Abi Talib (r.a.)",
            "Khalid ibn al-Walid (r.a.)",
            "Hamza ibn Abdul-Muttalib (r.a.)",
            "Saad ibn Abi Waqqas (r.a.)"
        ],
    },
    {
        numb: 6,
        question: "Describe the role of Salman the Persian in the Battle of the Trench (Khandaq).",
        answer: "He proposed the idea of digging a trench around Medina for defense.",
        options: [
            "He led the cavalry charge against the enemy.",
            "He negotiated peace with the opposing forces.",
            "He proposed the idea of digging a trench around Medina for defense.",
            "He served as the chief archer."
        ],
        info: "Salman the Persian's strategic proposal of digging a trench around Medina was crucial in protecting the city during the Battle of the Trench."
    }
];