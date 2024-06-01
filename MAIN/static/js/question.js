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
        question: "Which Prophet is known as the 'Father of Prophets'?",
        answer: "Ibrahim (a.s.)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Musa (a.s.)"],
    },
    {
        numb: 2,
        question: "Which Prophet is known as the 'Father of Humanity'?",
        answer: "Adam (a.s.)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Musa (a.s.)"],
    },
    {
        numb: 3,
        question: "Which Prophet is known as the 'Father of the Poor'?",
        answer: "Muhammad (ﷺ)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
    {
        numb: 4,
        question: "Which Prophet is known as the 'Father of the Orphans'?",
        answer: "Muhammad (ﷺ)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
    {
        numb: 5,
        question: "Which Prophet is known as the 'Father of the Fishermen'?",
        answer: "Yunus (a.s.)",
        options: ["Yunus (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
];

//Sciences -creating an array and passing the number, questions, options, and answers for the third quiz
let questions3 = [
    {
        numb: 1,
        question: "Which Surah is known as the heart of the Qur'an?",
        answer: "Yasin",
        options: ["Al-Baqarah", "Al-Fatihah", "Yasin", "Al-Mulk"],
    },
    {
        numb: 2,
        question: "Reciting which two surahs protect from that even evil eye?",
        answer: "An-Nas, Al-Falaq",
        options: ["An-Nas, Al-Falaq", "Al-Fatihah, Al-Baqarah", "Al-Fatihah, Yasin", "Al-Ikhlas, Al-Falaq"],
    },
    {
        numb: 3,
        question: "Which surah starts with the verse “Did we not expand your chest for you?”",
        answer: "Ash-Sharh",
        options: ["Ad-Dhuha", "Al-Asr", "Al-Naba'", "Ash-Sharh"],
    },
    {
        numb: 4,
        question: "In which surah of the holy Quran does every ayah have the word Allah in it?",
        answer: "Al-Mujadalah", 
        options: ["Ar-Rahman", "Al-Mujadalah", "Al-Waqiah", "Al-Mulk"],
    },
    {
        numb: 5,
        question: "What supplication (dua) did Prophet Yunus (Jonah) make while inside the belly of the whale?",
        answer: "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
        options: ["تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", "رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ", "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ", "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"],
    },
];

//Dua's -creating an array and passing the number, questions, options, and answers for the fourth quiz
let questions4 = [
    {
        numb: 1,
        question: "Which Surah is known as the heart of the Qur'an?",
        answer: "Yasin",
        options: ["Al-Baqarah", "Al-Fatihah", "Yasin", "Al-Mulk"],
    },
    {
        numb: 2,
        question: "Reciting which two surahs protect from that even evil eye?",
        answer: "An-Nas, Al-Falaq",
        options: ["An-Nas, Al-Falaq", "Al-Fatihah, Al-Baqarah", "Al-Fatihah, Yasin", "Al-Ikhlas, Al-Falaq"],
    },
    {
        numb: 3,
        question: "Which surah starts with the verse “Did we not expand your chest for you?”",
        answer: "Ash-Sharh",
        options: ["Ad-Dhuha", "Al-Asr", "Al-Naba'", "Ash-Sharh"],
    },
    {
        numb: 4,
        question: "In which surah of the holy Quran does every ayah have the word Allah in it?",
        answer: "Al-Mujadalah", 
        options: ["Ar-Rahman", "Al-Mujadalah", "Al-Waqiah", "Al-Mulk"],
    },
    {
        numb: 5,
        question: "What supplication (dua) did Prophet Yunus (Jonah) make while inside the belly of the whale?",
        answer: "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
        options: ["تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", "رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ", "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ", "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"],
    },
];

//Prophets -creating an array and passing the number, questions, options, and answers for the fifth quiz
let questions5 = [
    {
        numb: 1,
        question: "Which Prophet's name is mentioned in the Quran the most?",
        answer: "Musa (a.s.)",
        options: ["Yusuf (a.s.)", "Muhammad (ﷺ)", "Isa (a.s.)", "Musa (a.s.)"],
    },
    {
        numb: 2,
        question: "Which Prophet is known as the 'Father of Prophets'?",
        answer: "Ibrahim (a.s.)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Musa (a.s.)"],
    },
    {
        numb: 3,
        question: "Which Prophet is known as the 'Father of Humanity'?",
        answer: "Adam (a.s.)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Musa (a.s.)"],
    },
    {
        numb: 4,
        question: "Which Prophet is known as the 'Father of the Poor'?",
        answer: "Muhammad (ﷺ)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
    {
        numb: 5,
        question: "Which Prophet is known as the 'Father of the Orphans'?",
        answer: "Muhammad (ﷺ)",
        options: ["Adam (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
    {
        numb: 6,
        question: "Which Prophet is known as the 'Father of the Fishermen'?",
        answer: "Yunus (a.s.)",
        options: ["Yunus (a.s.)", "Ibrahim (a.s.)", "Yusuf (a.s.)", "Muhammad (ﷺ)"],
    },
];

//Companions -creating an array and passing the number, questions, options, and answers for the sixth quiz
let questions6 = [
    {
        numb: 1,
        question: "Which Surah is known as the heart of the Qur'an?",
        answer: "Yasin",
        options: ["Al-Baqarah", "Al-Fatihah", "Yasin", "Al-Mulk"],
    },
    {
        numb: 2,
        question: "Reciting which two surahs protect from that even evil eye?",
        answer: "An-Nas, Al-Falaq",
        options: ["An-Nas, Al-Falaq", "Al-Fatihah, Al-Baqarah", "Al-Fatihah, Yasin", "Al-Ikhlas, Al-Falaq"],
    },
    {
        numb: 3,
        question: "Who is the only companion whose name is mentioned in the Quran?",
        answer: "Zayd Ibn Haritha (r.a.)",
        options: ["Abu Bakr (r.a.)", "Zayd Ibn Haritha (r.a.)", "Umar Al-Khattab (r.a.)", "Ali (r.a.)"],
    },
    {
        numb: 4,
        question: "In which surah of the holy Quran does every ayah have the word Allah in it?",
        answer: "Al-Mujadalah", 
        options: ["Ar-Rahman", "Al-Mujadalah", "Al-Waqiah", "Al-Mulk"],
    },
    {
        numb: 5,
        question: "What supplication (dua) did Prophet Yunus (Jonah) make while inside the belly of the whale?",
        answer: "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
        options: ["تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", "رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ", "لَّآ إِلَـٰهَ إِلَّآ أَنتَ  سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ", "قُلْ إِنَّ صَلَاتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ"],
    },
];