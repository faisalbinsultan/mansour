/* =========================================================
   MANSOUR MATH
   app.js
   الصف الثالث الابتدائي - الفصل الدراسي الأول
========================================================= */


/* =========================================================
   SCORE SYSTEM
========================================================= */

let totalScore = 0;

const scoreValue = document.getElementById("scoreValue");

function addScore(points) {
    totalScore += points;

    if (scoreValue) {
        scoreValue.textContent = totalScore;
    }

    showToast(`🎉 كفو يا بطل! حصلت على +${points} نقطة ⭐`);
}


/* =========================================================
   TOAST
========================================================= */

const toast = document.getElementById("toast");

let toastTimer = null;

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================================================
   CURRICULUM DATA
========================================================= */

const chapters = [

    {
        id: 1,
        title: "القيمة المنزلية",
        icon: "🔢",

        lessons: [

            {
                title: "القيمة المنزلية",
                explanation:
                    "كل رقم في العدد له قيمة تعتمد على منزلته. نبدأ من اليمين: الآحاد، ثم العشرات، ثم المئات، ثم الآلاف.",

                examples: [
                    {
                        title: "مثال 1",
                        problem: "العدد 352",
                        answer: "3 مئات + 5 عشرات + 2 آحاد"
                    },
                    {
                        title: "مثال 2",
                        problem: "قيمة الرقم 5 في 352",
                        answer: "500 لأنه في منزلة المئات"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=القيمة+المنزلية+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "ما القيمة المنزلية للرقم 6 في العدد 462؟",

                    options: [
                        "6",
                        "60",
                        "600"
                    ],

                    answer: 1
                }
            },


            {
                title: "مقارنة الأعداد",
                explanation:
                    "لمقارنة عددين نبدأ بمقارنة أكبر منزلة. إذا تساوت ننتقل إلى المنزلة التالية حتى نجد الفرق بين العددين.",

                examples: [
                    {
                        title: "مثال 1",
                        problem: "345 و 298",
                        answer: "345 أكبر من 298"
                    },
                    {
                        title: "مثال 2",
                        problem: "512 و 512",
                        answer: "العددان متساويان"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=مقارنة+الأعداد+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "أي عدد أكبر؟",

                    options: [
                        "427",
                        "472",
                        "407"
                    ],

                    answer: 1
                }
            },


            {
                title: "ترتيب الأعداد",
                explanation:
                    "يمكننا ترتيب الأعداد من الأصغر إلى الأكبر أو من الأكبر إلى الأصغر باستخدام المقارنة بين المنازل.",

                examples: [
                    {
                        title: "من الأصغر إلى الأكبر",
                        problem: "215 ، 125 ، 251",
                        answer: "125 ، 215 ، 251"
                    },
                    {
                        title: "من الأكبر إلى الأصغر",
                        problem: "310 ، 301 ، 130",
                        answer: "310 ، 301 ، 130"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=ترتيب+الأعداد+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "ما الترتيب الصحيح من الأصغر إلى الأكبر؟",

                    options: [
                        "321 ، 312 ، 231",
                        "231 ، 312 ، 321",
                        "312 ، 231 ، 321"
                    ],

                    answer: 1
                }
            },


            {
                title: "التقريب",
                explanation:
                    "عند التقريب إلى أقرب عشرة ننظر إلى رقم الآحاد. إذا كان 5 أو أكثر نزيد العشرات واحدًا، وإذا كان أقل من 5 تبقى العشرات كما هي.",

                examples: [
                    {
                        title: "مثال 1",
                        problem: "47 إلى أقرب عشرة",
                        answer: "50"
                    },
                    {
                        title: "مثال 2",
                        problem: "32 إلى أقرب عشرة",
                        answer: "30"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=التقريب+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "قرّب العدد 67 إلى أقرب عشرة.",

                    options: [
                        "60",
                        "70",
                        "67"
                    ],

                    answer: 1
                }
            }

        ]
    },


    {
        id: 2,
        title: "الجمع",
        icon: "➕",

        lessons: [

            {
                title: "جمع الأعداد",
                explanation:
                    "عند الجمع نرتب الأعداد حسب المنازل، ثم نجمع الآحاد أولًا، ثم العشرات، ثم المئات.",

                examples: [
                    {
                        title: "مثال 1",
                        problem: "24 + 13",
                        answer: "37"
                    },
                    {
                        title: "مثال 2",
                        problem: "245 + 120",
                        answer: "365"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=الجمع+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "ما ناتج 245 + 120؟",

                    options: [
                        "355",
                        "365",
                        "375"
                    ],

                    answer: 1
                }
            },


            {
                title: "الجمع مع إعادة التجميع",
                explanation:
                    "إذا كان مجموع رقمين في منزلة ما يساوي 10 أو أكثر، نعيد التجميع إلى المنزلة التالية.",

                examples: [
                    {
                        title: "مثال",
                        problem: "28 + 17",
                        answer: "45"
                    },
                    {
                        title: "مثال آخر",
                        problem: "156 + 78",
                        answer: "234"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=الجمع+مع+إعادة+التجميع+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 38 + 27؟",

                    options: [
                        "55",
                        "65",
                        "75"
                    ],

                    answer: 1
                }
            },


            {
                title: "تقدير نواتج الجمع",
                explanation:
                    "يمكننا تقدير ناتج الجمع بتقريب الأعداد أولًا، ثم إجراء عملية الجمع.",

                examples: [
                    {
                        title: "مثال",
                        problem: "48 + 31",
                        answer: "نقرّب إلى 50 + 30 = 80 تقريبًا"
                    },
                    {
                        title: "مثال",
                        problem: "63 + 28",
                        answer: "60 + 30 = 90 تقريبًا"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=تقدير+ناتج+الجمع+الصف+الثالث",

                challenge: {
                    question:
                        "ما أفضل تقدير لـ 47 + 32؟",

                    options: [
                        "60",
                        "80",
                        "100"
                    ],

                    answer: 1
                }
            },


            {
                title: "حل مسائل الجمع",
                explanation:
                    "نقرأ المسألة جيدًا، نحدد المعطيات والمطلوب، ثم نختار عملية الجمع ونحلها.",

                examples: [
                    {
                        title: "مسألة",
                        problem: "مع منصور 25 قلمًا واشترى 14 قلمًا. كم قلمًا أصبح لديه؟",
                        answer: "25 + 14 = 39 قلمًا"
                    },
                    {
                        title: "تذكّر",
                        problem: "ابحث عن الكلمات التي تدل على الزيادة أو الانضمام.",
                        answer: "قد تساعدك على اختيار الجمع"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=مسائل+الجمع+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "لدى أحمد 32 كرة، وأعطاه صديقه 15 كرة. كم أصبح لديه؟",

                    options: [
                        "37",
                        "47",
                        "57"
                    ],

                    answer: 1
                }
            }

        ]
    },


    {
        id: 3,
        title: "الطرح",
        icon: "➖",

        lessons: [

            {
                title: "طرح الأعداد",
                explanation:
                    "في الطرح نرتب الأعداد حسب المنازل، ثم نطرح الآحاد، ثم العشرات، ثم المئات.",

                examples: [
                    {
                        title: "مثال 1",
                        problem: "35 − 12",
                        answer: "23"
                    },
                    {
                        title: "مثال 2",
                        problem: "500 − 200",
                        answer: "300"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=الطرح+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "ما ناتج 65 − 23؟",

                    options: [
                        "32",
                        "42",
                        "52"
                    ],

                    answer: 1
                }
            },


            {
                title: "الطرح مع إعادة التجميع",
                explanation:
                    "إذا لم نستطع طرح رقم من رقم في المنزل نفسه، نعيد التجميع من المنزل الذي يليه.",

                examples: [
                    {
                        title: "مثال",
                        problem: "42 − 18",
                        answer: "24"
                    },
                    {
                        title: "مثال",
                        problem: "73 − 29",
                        answer: "44"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=الطرح+مع+إعادة+التجميع+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 52 − 27؟",

                    options: [
                        "15",
                        "25",
                        "35"
                    ],

                    answer: 1
                }
            },


            {
                title: "تقدير نواتج الطرح",
                explanation:
                    "نستطيع تقدير ناتج الطرح بتقريب الأعداد قبل إجراء العملية.",

                examples: [
                    {
                        title: "مثال",
                        problem: "68 − 31",
                        answer: "70 − 30 = 40 تقريبًا"
                    },
                    {
                        title: "مثال",
                        problem: "92 − 47",
                        answer: "90 − 50 = 40 تقريبًا"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=تقدير+ناتج+الطرح+الصف+الثالث",

                challenge: {
                    question:
                        "ما أفضل تقدير لـ 72 − 29؟",

                    options: [
                        "30",
                        "40",
                        "60"
                    ],

                    answer: 1
                }
            },


            {
                title: "حل مسائل الطرح",
                explanation:
                    "في مسائل الطرح نحدد الكمية الأصلية، والكمية التي نقصت أو أزيلت، ثم نوجد الباقي.",

                examples: [
                    {
                        title: "مسألة",
                        problem: "كان لدى منصور 50 بطاقة وأعطى صديقه 18 بطاقة.",
                        answer: "50 − 18 = 32 بطاقة"
                    },
                    {
                        title: "فكرة",
                        problem: "كم بقي؟",
                        answer: "غالبًا نحتاج إلى الطرح"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=حل+مسائل+الطرح+الصف+الثالث",

                challenge: {
                    question:
                        "كان لدى سارة 60 ملصقًا، استخدمت 25. كم بقي؟",

                    options: [
                        "25",
                        "35",
                        "45"
                    ],

                    answer: 1
                }
            }

        ]
    },


    {
        id: 4,
        title: "الضرب (1)",
        icon: "✖️",

        lessons: [

            {
                title: "فكرة الضرب",
                explanation:
                    "الضرب طريقة مختصرة للجمع المتكرر. عندما نكرر العدد نفسه عدة مرات يمكننا استخدام عملية الضرب.",

                examples: [
                    {
                        title: "مثال",
                        problem: "4 + 4 + 4",
                        answer: "3 × 4 = 12"
                    },
                    {
                        title: "مثال",
                        problem: "5 + 5 + 5 + 5",
                        answer: "4 × 5 = 20"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=فكرة+الضرب+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "ما العملية التي تمثل 6 + 6 + 6؟",

                    options: [
                        "2 × 6",
                        "3 × 6",
                        "6 × 6"
                    ],

                    answer: 1
                }
            },


            {
                title: "الضرب في 2",
                explanation:
                    "عند الضرب في 2 نكرر العدد مرتين. ويمكن التفكير فيه على أنه ضعف العدد.",

                examples: [
                    {
                        title: "مثال",
                        problem: "2 × 4",
                        answer: "8"
                    },
                    {
                        title: "مثال",
                        problem: "2 × 7",
                        answer: "14"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=جدول+الضرب+في+2+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 2 × 8؟",

                    options: [
                        "14",
                        "16",
                        "18"
                    ],

                    answer: 1
                }
            },


            {
                title: "الضرب في 5",
                explanation:
                    "يمكن حساب الضرب في 5 باستخدام العد بالقفزات: 5، 10، 15، 20، وهكذا.",

                examples: [
                    {
                        title: "مثال",
                        problem: "5 × 3",
                        answer: "15"
                    },
                    {
                        title: "مثال",
                        problem: "5 × 6",
                        answer: "30"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=جدول+الضرب+في+5+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 5 × 7؟",

                    options: [
                        "25",
                        "30",
                        "35"
                    ],

                    answer: 2
                }
            },


            {
                title: "الضرب في 10",
                explanation:
                    "عند ضرب عدد في 10 نضيف صفرًا إلى يمين العدد.",

                examples: [
                    {
                        title: "مثال",
                        problem: "4 × 10",
                        answer: "40"
                    },
                    {
                        title: "مثال",
                        problem: "8 × 10",
                        answer: "80"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=الضرب+في+10+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 7 × 10؟",

                    options: [
                        "17",
                        "70",
                        "700"
                    ],

                    answer: 1
                }
            }

        ]
    },


    {
        id: 5,
        title: "الضرب (2)",
        icon: "🌟",

        lessons: [

            {
                title: "الضرب في 3",
                explanation:
                    "عند الضرب في 3 نكرر العدد ثلاث مرات، أو نستخدم جدول الضرب في 3.",

                examples: [
                    {
                        title: "مثال",
                        problem: "3 × 4",
                        answer: "12"
                    },
                    {
                        title: "مثال",
                        problem: "3 × 7",
                        answer: "21"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=جدول+الضرب+في+3+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 3 × 6؟",

                    options: [
                        "15",
                        "18",
                        "21"
                    ],

                    answer: 1
                }
            },


            {
                title: "الضرب في 4",
                explanation:
                    "يمكن حساب الضرب في 4 على أنه ضعف العدد ثم ضعف الناتج مرة أخرى.",

                examples: [
                    {
                        title: "مثال",
                        problem: "4 × 3",
                        answer: "12"
                    },
                    {
                        title: "مثال",
                        problem: "4 × 5",
                        answer: "20"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=جدول+الضرب+في+4+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 4 × 6؟",

                    options: [
                        "20",
                        "24",
                        "28"
                    ],

                    answer: 1
                }
            },


            {
                title: "الضرب في 6",
                explanation:
                    "نستخدم جدول الضرب في 6 لإيجاد الناتج بسرعة، ويمكن أيضًا الاعتماد على الجمع المتكرر.",

                examples: [
                    {
                        title: "مثال",
                        problem: "6 × 3",
                        answer: "18"
                    },
                    {
                        title: "مثال",
                        problem: "6 × 5",
                        answer: "30"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=جدول+الضرب+في+6+الصف+الثالث",

                challenge: {
                    question:
                        "ما ناتج 6 × 4؟",

                    options: [
                        "20",
                        "24",
                        "28"
                    ],

                    answer: 1
                }
            },


            {
                title: "مسائل الضرب",
                explanation:
                    "في مسائل الضرب نبحث عن مجموعات متساوية، ثم نستخدم الضرب لإيجاد العدد الكلي.",

                examples: [
                    {
                        title: "مسألة",
                        problem: "لدى منصور 4 صناديق، في كل صندوق 5 كرات.",
                        answer: "4 × 5 = 20 كرة"
                    },
                    {
                        title: "تذكّر",
                        problem: "مجموعات متساوية",
                        answer: "فكّر في الضرب"
                    }
                ],

                video:
                    "https://www.youtube-nocookie.com/embed/rkxLVo4fyhU",

                youtube:
                    "https://www.youtube.com/results?search_query=مسائل+الضرب+الصف+الثالث+ابتدائي",

                challenge: {
                    question:
                        "في 3 أكياس، يوجد في كل كيس 6 كرات. كم كرة في المجموع؟",

                    options: [
                        "12",
                        "18",
                        "24"
                    ],

                    answer: 1
                }
            }

        ]
    }

];


/* =========================================================
   LESSON ELEMENTS
========================================================= */

const chapterList = document.getElementById("chapterList");

const lessonTabs = document.getElementById("lessonTabs");

const chapterLabel = document.getElementById("chapterLabel");

const lessonTitle = document.getElementById("lessonTitle");

const lessonCounter = document.getElementById("lessonCounter");

const lessonProgress = document.getElementById("lessonProgress");

const lessonExplanation = document.getElementById("lessonExplanation");

const lessonExamples = document.getElementById("lessonExamples");

const lessonVideo = document.getElementById("lessonVideo");

const youtubeLink = document.getElementById("youtubeLink");

const challengeQuestion = document.getElementById("challengeQuestion");

const challengeOptions = document.getElementById("challengeOptions");

const challengeFeedback = document.getElementById("challengeFeedback");

const challengeNext = document.getElementById("challengeNext");


let currentChapterIndex = 0;

let currentLessonIndex = 0;

let challengeAnswered = false;


/* =========================================================
   RENDER CHAPTERS
========================================================= */

function renderChapters() {

    if (!chapterList) {
        return;
    }

    chapterList.innerHTML = "";

    chapters.forEach((chapter, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "chapter-button";

        if (index === currentChapterIndex) {
            button.classList.add("active");
        }

        button.innerHTML = `
            <span class="chapter-number">
                ${chapter.id}
            </span>
            ${chapter.icon}
            ${chapter.title}
        `;

        button.addEventListener("click", () => {

            currentChapterIndex = index;

            currentLessonIndex = 0;

            renderChapters();

            renderLessons();

            renderCurrentLesson();

        });

        chapterList.appendChild(button);

    });

}


/* =========================================================
   RENDER LESSON TABS
========================================================= */

function renderLessons() {

    if (!lessonTabs) {
        return;
    }

    const chapter = chapters[currentChapterIndex];

    lessonTabs.innerHTML = "";

    chapter.lessons.forEach((lesson, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "lesson-tab";

        if (index === currentLessonIndex) {
            button.classList.add("active");
        }

        button.textContent = `${index + 1}. ${lesson.title}`;

        button.addEventListener("click", () => {

            currentLessonIndex = index;

            renderLessons();

            renderCurrentLesson();

        });

        lessonTabs.appendChild(button);

    });

}


/* =========================================================
   RENDER CURRENT LESSON
========================================================= */

function renderCurrentLesson() {

    const chapter = chapters[currentChapterIndex];

    const lesson = chapter.lessons[currentLessonIndex];

    if (!lesson) {
        return;
    }


    chapterLabel.textContent =
        `الفصل ${chapter.id} · ${chapter.title}`;


    lessonTitle.textContent =
        lesson.title;


    lessonCounter.textContent =
        `الدرس ${currentLessonIndex + 1} من ${chapter.lessons.length}`;


    const progress =
        ((currentLessonIndex + 1) / chapter.lessons.length) * 100;


    lessonProgress.style.width =
        `${progress}%`;


    lessonExplanation.textContent =
        lesson.explanation;


    lessonExamples.innerHTML = "";


    lesson.examples.forEach(example => {

        const card = document.createElement("div");

        card.className = "example-card";

        card.innerHTML = `
            <h5>${example.title}</h5>

            <div class="example-problem">
                ${example.problem}
            </div>

            <div class="example-answer">
                الإجابة: ${example.answer}
            </div>
        `;

        lessonExamples.appendChild(card);

    });


    lessonVideo.src = lesson.video;

    youtubeLink.href = lesson.youtube;


    renderChallenge();

}


/* =========================================================
   LESSON CHALLENGE
========================================================= */

function renderChallenge() {

    const chapter = chapters[currentChapterIndex];

    const lesson = chapter.lessons[currentLessonIndex];

    const challenge = lesson.challenge;


    challengeAnswered = false;


    challengeQuestion.textContent =
        challenge.question;


    challengeOptions.innerHTML = "";


    challengeFeedback.textContent = "";

    challengeFeedback.className = "feedback";


    challengeNext.classList.add("hidden");


    challenge.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.textContent = option;


        button.addEventListener("click", () => {

            if (challengeAnswered) {
                return;
            }

            checkChallenge(
                button,
                index,
                challenge.answer
            );

        });


        challengeOptions.appendChild(button);

    });

}


/* =========================================================
   CHECK LESSON CHALLENGE
========================================================= */

function checkChallenge(
    selectedButton,
    selectedIndex,
    correctIndex
) {

    challengeAnswered = true;


    const buttons =
        challengeOptions.querySelectorAll("button");


    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

    });


    if (selectedIndex === correctIndex) {

        selectedButton.classList.add("correct");

        challengeFeedback.textContent =
            "🎉 كفو يا بطل! إجابة صحيحة، استمر! ⭐";

        challengeFeedback.classList.add("success");

        addScore(10);

    } else {

        selectedButton.classList.add("wrong");

        challengeFeedback.textContent =
            "💪 قريب! حاول مرة ثانية في التحدي القادم.";

        challengeFeedback.classList.add("error");

    }


    challengeNext.classList.remove("hidden");

}


/* =========================================================
   NEXT LESSON
========================================================= */

challengeNext.addEventListener("click", () => {

    const chapter = chapters[currentChapterIndex];


    if (currentLessonIndex < chapter.lessons.length - 1) {

        currentLessonIndex++;

    } else {

        if (currentChapterIndex < chapters.length - 1) {

            currentChapterIndex++;

            currentLessonIndex = 0;

        } else {

            currentChapterIndex = 0;

            currentLessonIndex = 0;

            showToast(
                "🏆 خلصت جميع الدروس! ارجع راجع واختبر نفسك."
            );

        }

    }


    renderChapters();

    renderLessons();

    renderCurrentLesson();


    document
        .getElementById("lessons")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================================
   ACTIVITY SYSTEM
========================================================= */

const activityOptions =
    document.querySelectorAll(".activity-options");


activityOptions.forEach(container => {

    const buttons =
        container.querySelectorAll("button");

    const feedback =
        container.parentElement.querySelector(
            ".activity-feedback"
        );


    let attempts = 0;


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if (
                container.dataset.completed === "true"
            ) {
                return;
            }


            const isCorrect =
                button.dataset.answer === "true";


            /* =========================================
               CORRECT ANSWER
            ========================================= */

            if (isCorrect) {

                container.dataset.completed = "true";


                button.classList.add("correct");


                feedback.textContent =
                    "🎉 ممتاز! إجابتك صحيحة ⭐";


                feedback.style.color =
                    "#2eae5d";


                buttons.forEach(item => {
                    item.disabled = true;
                });


                addScore(5);


                return;
            }


            /* =========================================
               WRONG ANSWER
            ========================================= */

            attempts++;


            button.classList.add("wrong");


            setTimeout(() => {

                button.classList.remove("wrong");

            }, 700);


            if (attempts === 1) {

                feedback.textContent =
                    "💪 مو صحيح، فكّر شوي وجرب مرة ثانية!";

            }

            else if (attempts === 2) {

                feedback.textContent =
                    "🧠 قريب! ركّز على السؤال وفكّر في المنازل أو العملية المطلوبة.";

            }

            else {

                feedback.textContent =
                    "🔎 خذ وقتك وفكّر خطوة خطوة، أنت تقدر!";

            }


            feedback.style.color =
                "#ed4770";

        });

    });

});

/* =========================================================
   GUESS NUMBER GAME
========================================================= */

const guessGameBtn = document.querySelector("#guessGameBtn");
const guessGame = document.querySelector("#guessGame");
const guessInput = document.querySelector("#guessInput");
const guessButton = document.querySelector("#guessButton");
const guessResult = document.querySelector("#guessResult");

let secretNumber = 0;
let guessAttempts = 0;


/* -------------------------
   START / RESTART GAME
------------------------- */

function createSecretNumber() {

    secretNumber = Math.floor(Math.random() * 99) + 1;
    guessAttempts = 0;

    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    guessResult.textContent =
        "🤔 أنا أفكر في عدد من 1 إلى 99... خمن وش هو!";

    guessInput.focus();
}


/* -------------------------
   CHECK GUESS
------------------------- */

function checkGuess() {

    const guess = Number(guessInput.value);

    if (
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 99
    ) {
        guessResult.textContent =
            "🔢 اكتب عددًا صحيحًا من 1 إلى 99.";
        return;
    }

    guessAttempts++;


    /* -------------------------
       CORRECT ANSWER
    ------------------------- */

    if (guess === secretNumber) {

        guessResult.textContent =
            `🎉 كفو يا بطل! عرفت العدد ${secretNumber} بعد ${guessAttempts} محاولة ⭐`;

        addScore(5);

        guessInput.disabled = true;
        guessButton.disabled = true;

        guessGameBtn.textContent =
            "العب مرة ثانية 🔄";

        return;
    }


    /* -------------------------
       NUMBER INFORMATION
    ------------------------- */

    const secretTens =
        Math.floor(secretNumber / 10);

    const secretOnes =
        secretNumber % 10;


    /* -------------------------
       HINT 1
       أكبر أو أصغر
    ------------------------- */

    if (guessAttempts === 1) {

        if (guess < secretNumber) {

            guessResult.textContent =
                "❌ مو هو! 🔍 العدد السري أكبر من تخمينك.";

        } else {

            guessResult.textContent =
                "❌ مو هو! 🔍 العدد السري أصغر من تخمينك.";
        }

        return;
    }


    /* -------------------------
       HINT 2
       العشرات
    ------------------------- */

    if (guessAttempts === 2) {

        if (secretNumber < 10) {

            guessResult.textContent =
                "🧠 تلميح: العدد السري من الأعداد من 1 إلى 9.";

        } else {

            const tensStart =
                secretTens * 10;

            const tensEnd =
                tensStart + 9;

            guessResult.textContent =
                `🧠 تلميح: العدد السري بين ${tensStart} و${tensEnd}.`;
        }

        return;
    }


    /* -------------------------
       HINT 3
       زوجي / فردي
    ------------------------- */

    if (guessAttempts === 3) {

        if (secretNumber % 2 === 0) {

            guessResult.textContent =
                "🔵 تلميح: العدد السري عدد زوجي.";

        } else {

            guessResult.textContent =
                "🟠 تلميح: العدد السري عدد فردي.";
        }

        return;
    }


    /* -------------------------
       HINT 4
       العشرات والآحاد
    ------------------------- */

    if (guessAttempts === 4) {

        if (secretNumber < 10) {

            guessResult.textContent =
                "🧠 تلميح: العدد السري يتكون من رقم واحد.";

        } else if (secretTens > secretOnes) {

            guessResult.textContent =
                "🧠 تلميح: رقم العشرات أكبر من رقم الآحاد.";

        } else if (secretTens < secretOnes) {

            guessResult.textContent =
                "🧠 تلميح: رقم الآحاد أكبر من رقم العشرات.";

        } else {

            guessResult.textContent =
                "🧠 تلميح: رقم العشرات ورقم الآحاد متساويان.";
        }

        return;
    }


    /* -------------------------
       HINT 5
       مجموع الرقمين
    ------------------------- */

    if (guessAttempts === 5) {

        if (secretNumber < 10) {

            guessResult.textContent =
                `➕ تلميح: إذا أضفت العدد إلى نفسه يصبح ${secretNumber * 2}.`;

        } else {

            const digitSum =
                secretTens + secretOnes;

            guessResult.textContent =
                `➕ تلميح: مجموع رقم العشرات ورقم الآحاد يساوي ${digitSum}.`;
        }

        return;
    }


    /* -------------------------
       HINT 6
       الفرق بين الرقمين
    ------------------------- */

    if (guessAttempts === 6) {

        if (secretNumber < 10) {

            guessResult.textContent =
                "🔍 تلميح: العدد السري من 1 إلى 9.";

        } else {

            const digitDifference =
                Math.abs(secretTens - secretOnes);

            guessResult.textContent =
                `➖ تلميح: الفرق بين رقم العشرات ورقم الآحاد يساوي ${digitDifference}.`;
        }

        return;
    }


    /* -------------------------
       AFTER 7 ATTEMPTS
    ------------------------- */

    if (guessAttempts >= 7) {

        if (guess < secretNumber) {

            guessResult.textContent =
                `🔎 العدد أكبر من ${guess}... حاول تحصر الاحتمالات!`;

        } else {

            guessResult.textContent =
                `🔎 العدد أصغر من ${guess}... حاول تحصر الاحتمالات!`;
        }

        return;
    }
}


/* -------------------------
   BUTTONS
------------------------- */

if (
    guessGameBtn &&
    guessGame &&
    guessInput &&
    guessButton &&
    guessResult
) {

    guessGameBtn.addEventListener("click", () => {

        guessGame.classList.remove("hidden");

        createSecretNumber();

        guessGameBtn.textContent =
            "إعادة اللعبة 🔄";
    });


    guessButton.addEventListener(
        "click",
        checkGuess
    );


    guessInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                checkGuess();
            }

        }
    );
}
/* =========================================================
   ORDER GAME
   ترتيب عربي من اليمين إلى اليسار
========================================================= */

const orderGameBtn =
    document.getElementById("orderGameBtn");

const orderGameResult =
    document.getElementById("orderGameResult");

let orderNumbers = [];
let orderCorrectAnswer = [];


if (orderGameBtn) {

    orderGameBtn.addEventListener("click", () => {

        orderNumbers = [];


        /* إنشاء 3 أعداد مختلفة */

        while (orderNumbers.length < 3) {

            const number =
                Math.floor(Math.random() * 90) + 10;

            if (!orderNumbers.includes(number)) {

                orderNumbers.push(number);

            }

        }


        /* الإجابة الصحيحة من الأصغر إلى الأكبر */

        orderCorrectAnswer =
            [...orderNumbers].sort(
                (a, b) => a - b
            );


        orderGameBtn.textContent =
            "تحداني مرة ثانية 🔄";


        orderGameResult.innerHTML = `

            <div
                style="
                    margin-top:15px;
                    direction:rtl;
                "
            >

                <strong>
                    🔢 رتّب الأعداد من الأصغر إلى الأكبر
                </strong>


                <div
                    style="
                        font-size:22px;
                        font-weight:800;
                        margin:15px 0;
                        direction:rtl;
                    "
                >
                    ${orderNumbers.join("  •  ")}
                </div>


                <p>
                    ابدأ بالعدد الاصغر من الخانة الموجودة على اليمين 👈
                </p>


                <!--
                    ترتيب عربي:
                    الخانة الأولى على اليمين
                    ثم الثانية
                    ثم الثالثة على اليسار
                -->

                <div
                    style="
                        display:flex;
                        flex-direction:row;
                        justify-content:center;
                        align-items:center;
                        gap:8px;
                        direction:rtl;
                        margin:15px 0;
                    "
                >

                    <input
                        id="orderInput1"
                        type="number"
                        inputmode="numeric"
                        placeholder="1"
                        dir="ltr"
                        aria-label="العدد الأول"
                        style="
                            width:75px;
                            padding:10px;
                            border-radius:10px;
                            border:2px solid #ddd;
                            text-align:center;
                            font-size:18px;
                        "
                    >


                    <span style="font-size:20px;">
                        ←
                    </span>


                    <input
                        id="orderInput2"
                        type="number"
                        inputmode="numeric"
                        placeholder="2"
                        dir="ltr"
                        aria-label="العدد الثاني"
                        style="
                            width:75px;
                            padding:10px;
                            border-radius:10px;
                            border:2px solid #ddd;
                            text-align:center;
                            font-size:18px;
                        "
                    >


                    <span style="font-size:20px;">
                        ←
                    </span>


                    <input
                        id="orderInput3"
                        type="number"
                        inputmode="numeric"
                        placeholder="3"
                        dir="ltr"
                        aria-label="العدد الثالث"
                        style="
                            width:75px;
                            padding:10px;
                            border-radius:10px;
                            border:2px solid #ddd;
                            text-align:center;
                            font-size:18px;
                        "
                    >

                </div>


                <button
                    id="orderSubmit"
                    class="btn btn-small"
                    type="button"
                >
                    تحقق 🎯
                </button>


                <p
                    id="orderFeedback"
                    style="margin-top:12px;"
                ></p>

            </div>

        `;


        const orderInput1 =
            document.getElementById("orderInput1");

        const orderInput2 =
            document.getElementById("orderInput2");

        const orderInput3 =
            document.getElementById("orderInput3");

        const orderSubmit =
            document.getElementById("orderSubmit");

        const orderFeedback =
            document.getElementById("orderFeedback");


        /* التحقق من الإجابة */

        orderSubmit.addEventListener(
            "click",
            () => {

                const userNumbers = [

                    Number(orderInput1.value),

                    Number(orderInput2.value),

                    Number(orderInput3.value)

                ];


                /* التأكد من تعبئة الخانات */

                if (
                    !orderInput1.value ||
                    !orderInput2.value ||
                    !orderInput3.value
                ) {

                    orderFeedback.textContent =
                        "✏️ عبّئ الخانات الثلاث أولًا.";

                    return;
                }


                const isCorrect =
                    userNumbers.every(
                        (number, index) =>
                            number ===
                            orderCorrectAnswer[index]
                    );


                if (isCorrect) {

                    orderFeedback.innerHTML =
                        "🎉 ممتاز! رتبت الأعداد بشكل صحيح! +5 ⭐";


                    orderSubmit.disabled = true;

                    orderInput1.disabled = true;
                    orderInput2.disabled = true;
                    orderInput3.disabled = true;


                    addScore(5);

                } else {

                    orderFeedback.innerHTML =
                        "💪 مو صحيح! حاول مرة ثانية.<br>🤔 تذكّر: ابدأ بالعدد الأصغر من جهة اليمين.";

                }

            }
        );


        orderInput1.focus();

    });

}

/* =========================================================
   TIMES TABLE GAME
========================================================= */

const timesGameBtn =
    document.getElementById("timesGameBtn");

const timesGame =
    document.getElementById("timesGame");

const gameTimer =
    document.getElementById("gameTimer");

const timesQuestion =
    document.getElementById("timesQuestion");

const timesAnswer =
    document.getElementById("timesAnswer");

const timesSubmit =
    document.getElementById("timesSubmit");

const timesScore =
    document.getElementById("timesScore");


let gameInterval = null;

let gameTime = 30;

let gamePoints = 0;

let firstNumber = 0;

let secondNumber = 0;

let gameRunning = false;


/* Generate question */

function generateTimesQuestion() {

    firstNumber =
        Math.floor(Math.random() * 10) + 1;


    secondNumber =
        Math.floor(Math.random() * 10) + 1;


    timesQuestion.textContent =
        `${firstNumber} × ${secondNumber} = ؟`;

}


/* Start game */

if (timesGameBtn) {

    timesGameBtn.addEventListener("click", () => {

        if (gameRunning) {
            return;
        }


        gameRunning = true;

        gameTime = 30;

        gamePoints = 0;


        timesGame.classList.remove("hidden");


        gameTimer.textContent =
            gameTime;


        timesScore.textContent =
            "النقاط: 0";


        timesAnswer.value = "";


        generateTimesQuestion();


        timesAnswer.focus();


        gameInterval =
            setInterval(() => {

                gameTime--;

                gameTimer.textContent =
                    gameTime;


                if (gameTime <= 0) {

                    endTimesGame();

                }

            }, 1000);

    });

}


/* Submit answer */

if (timesSubmit) {

    timesSubmit.addEventListener(
        "click",
        checkTimesAnswer
    );

}


if (timesAnswer) {

    timesAnswer.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                checkTimesAnswer();
            }

        }
    );

}


function checkTimesAnswer() {

    if (!gameRunning) {
        return;
    }


    const userAnswer =
        Number(timesAnswer.value);


    const correctAnswer =
        firstNumber * secondNumber;


    if (userAnswer === correctAnswer) {

        gamePoints++;

        timesScore.textContent =
            `النقاط: ${gamePoints} ⭐`;

        addScore(2);

    } else {

        timesScore.textContent =
            `النقاط: ${gamePoints} — ركّز أكثر 💪`;

    }


    timesAnswer.value = "";

    generateTimesQuestion();

    timesAnswer.focus();

}


/* End game */

function endTimesGame() {

    clearInterval(gameInterval);

    gameRunning = false;


    timesQuestion.textContent =
        "⏰ انتهى الوقت!";


    timesScore.textContent =
        `🏆 حصلت على ${gamePoints} إجابات صحيحة!`;


    timesAnswer.disabled = true;

    timesSubmit.disabled = true;


    showToast(
        `انتهى السباق! أحسنت، حليت ${gamePoints} سؤال ⭐`
    );


    setTimeout(() => {

        timesAnswer.disabled = false;

        timesSubmit.disabled = false;

        timesGame.classList.add("hidden");

    }, 3500);

}


/* =========================================================
   FINAL QUIZ DATA
========================================================= */

const quizQuestions = [

    {
        chapter: "القيمة المنزلية",
        question: "ما القيمة المنزلية للرقم 4 في العدد 342؟",
        options: [
            "4",
            "40",
            "400",
            "4000"
        ],
        answer: 1
    },


    {
        chapter: "القيمة المنزلية",
        question: "أي عدد هو الأكبر؟",
        options: [
            "245",
            "425",
            "254",
            "225"
        ],
        answer: 1
    },


    {
        chapter: "الجمع",
        question: "ما ناتج 125 + 230؟",
        options: [
            "345",
            "355",
            "365",
            "375"
        ],
        answer: 1
    },


    {
        chapter: "الجمع",
        question: "ما ناتج 48 + 27؟",
        options: [
            "65",
            "75",
            "85",
            "95"
        ],
        answer: 1
    },


    {
        chapter: "الطرح",
        question: "ما ناتج 75 − 25؟",
        options: [
            "40",
            "50",
            "60",
            "70"
        ],
        answer: 1
    },


    {
        chapter: "الطرح",
        question: "ما ناتج 62 − 28؟",
        options: [
            "24",
            "34",
            "44",
            "54"
        ],
        answer: 1
    },


    {
        chapter: "الضرب (1)",
        question: "ما ناتج 3 × 4؟",
        options: [
            "7",
            "10",
            "12",
            "14"
        ],
        answer: 2
    },


    {
        chapter: "الضرب (1)",
        question: "أي عملية تمثل 5 + 5 + 5 + 5؟",
        options: [
            "2 × 5",
            "3 × 5",
            "4 × 5",
            "5 × 5"
        ],
        answer: 2
    },


    {
        chapter: "الضرب (2)",
        question: "ما ناتج 6 × 4؟",
        options: [
            "20",
            "24",
            "28",
            "30"
        ],
        answer: 1
    },


    {
        chapter: "الضرب (2)",
        question: "لدى منصور 4 صناديق، في كل صندوق 5 كرات. كم كرة؟",
        options: [
            "9",
            "15",
            "20",
            "25"
        ],
        answer: 2
    }

];


/* =========================================================
   QUIZ ELEMENTS
========================================================= */

const quizNumber =
    document.getElementById("quizNumber");

const quizMeter =
    document.getElementById("quizMeter");

const quizScore =
    document.getElementById("quizScore");

const quizChapter =
    document.getElementById("quizChapter");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const quizFeedback =
    document.getElementById("quizFeedback");

const quizNext =
    document.getElementById("quizNext");

const finalResult =
    document.getElementById("finalResult");

const finalMessage =
    document.getElementById("finalMessage");

const finalScore =
    document.getElementById("finalScore");

const restartQuiz =
    document.getElementById("restartQuiz");


let currentQuizIndex = 0;

let quizCorrectAnswers = 0;

let quizAnswered = false;


/* =========================================================
   RENDER QUIZ
========================================================= */

function renderQuiz() {

    if (!quizQuestion) {
        return;
    }


    if (currentQuizIndex >= quizQuestions.length) {

        finishQuiz();

        return;

    }


    quizAnswered = false;


    const question =
        quizQuestions[currentQuizIndex];


    quizNumber.textContent =
        currentQuizIndex + 1;


    quizMeter.style.width =
        `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`;


    quizScore.textContent =
        quizCorrectAnswers;


    quizChapter.textContent =
        question.chapter;


    quizQuestion.textContent =
        question.question;


    quizFeedback.textContent =
        "";


    quizFeedback.className =
        "feedback";


    quizOptions.innerHTML = "";


    quizNext.classList.add("hidden");


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type = "button";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () => {

                    checkQuizAnswer(
                        button,
                        index,
                        question.answer
                    );

                }
            );


            quizOptions.appendChild(button);

        }
    );

}


/* =========================================================
   CHECK QUIZ
========================================================= */

function checkQuizAnswer(
    selectedButton,
    selectedIndex,
    correctIndex
) {

    if (quizAnswered) {
        return;
    }


    quizAnswered = true;


    const buttons =
        quizOptions.querySelectorAll("button");


    buttons.forEach(
        (button, index) => {

            button.disabled = true;


            if (index === correctIndex) {
                button.classList.add("correct");
            }

        }
    );


    if (selectedIndex === correctIndex) {

        selectedButton.classList.add("correct");


        quizCorrectAnswers++;


        quizFeedback.textContent =
            "🎉 كفو يا بطل! إجابة صحيحة ⭐";


        quizFeedback.classList.add(
            "success"
        );


        addScore(10);


    } else {

        selectedButton.classList.add("wrong");


        quizFeedback.textContent =
            "💪 مو مشكلة! تعلّم من الخطأ وكمل.";


        quizFeedback.classList.add(
            "error"
        );

    }


    quizScore.textContent =
        quizCorrectAnswers;


    quizNext.classList.remove(
        "hidden"
    );

}


/* =========================================================
   NEXT QUIZ QUESTION
========================================================= */

if (quizNext) {

    quizNext.addEventListener(
        "click",
        () => {

            currentQuizIndex++;

            renderQuiz();

        }
    );

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    document
        .querySelector(".quiz-shell")
        .classList.add("hidden");


    finalResult.classList.remove(
        "hidden"
    );


    const percentage =
        Math.round(
            (quizCorrectAnswers /
                quizQuestions.length) *
            100
        );


    finalScore.textContent =
        `${quizCorrectAnswers} / ${quizQuestions.length}`;


    if (percentage === 100) {

        finalMessage.textContent =
            "🏆 ما شاء الله! فل مارك يا بطل! أنت نجم الرياضيات ⭐";

    } else if (percentage >= 80) {

        finalMessage.textContent =
            "🌟 ممتاز جدًا! مستواك رائع، استمر يا بطل!";

    } else if (percentage >= 60) {

        finalMessage.textContent =
            "👏 أحسنت! أنت قريب من الدرجة الكاملة، راجع بعض الدروس وحاول مرة ثانية.";

    } else {

        finalMessage.textContent =
            "💪 بداية جميلة! راجع الدروس وجرب الاختبار مرة ثانية، والخطأ خطوة للتعلم.";

    }


    showToast(
        `🏆 خلصت الاختبار! نتيجتك ${quizCorrectAnswers} من ${quizQuestions.length}`
    );

}


/* =========================================================
   RESTART QUIZ
========================================================= */

if (restartQuiz) {

    restartQuiz.addEventListener(
        "click",
        () => {

            currentQuizIndex = 0;

            quizCorrectAnswers = 0;


            document
                .querySelector(".quiz-shell")
                .classList.remove("hidden");


            finalResult.classList.add(
                "hidden"
            );


            renderQuiz();


            document
                .getElementById("quiz")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >= sectionTop
            ) {
                currentSection =
                    section.id;
            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const toTop =
    document.getElementById("toTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            toTop.classList.add("show");

        } else {

            toTop.classList.remove("show");

        }

    }
);


if (toTop) {

    toTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderChapters();

renderLessons();

renderCurrentLesson();

renderQuiz();


/* =========================================================
   WELCOME MESSAGE
========================================================= */

setTimeout(() => {

    showToast(
        "👋 هلا يا بطل! جاهز نبدأ رحلة الرياضيات؟"
    );

}, 1200);
/* =========================================================
   INTRO VIDEO
========================================================= */

const introVideo =
    document.getElementById("introVideo");

const introVideoPlayer =
    document.getElementById("introVideoPlayer");

const introPlayBtn =
    document.getElementById("introPlayBtn");


if (
    introVideo &&
    introVideoPlayer &&
    introPlayBtn
) {

    /* إخفاء المقدمة */

    function hideIntroVideo() {

        introVideo.classList.add("hidden");

        setTimeout(() => {

            introVideo.style.display = "none";

        }, 600);

    }


    /* تشغيل الفيديو بعد ضغط الطالب */

    introPlayBtn.addEventListener(
        "click",
        () => {

            introPlayBtn.style.display =
                "none";

            introVideoPlayer.play();

        }
    );


    /* بعد انتهاء الفيديو */

    introVideoPlayer.addEventListener(
        "ended",
        () => {

            hideIntroVideo();

        }
    );

}
