// questions.js
export const questionsData = [

  
    {
      question: "ವೇರಿಯೇಬಲ್ ಅನ್ನು ಘೋಷಿಸಲು ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ತಪ್ಪು ಮಾರ್ಗವಾಗಿದೆ",
      options: [
        { answerText: "1_var", isCorrect: true },
        { answerText: "var_1", isCorrect: false },
        { answerText: "var1", isCorrect: false },
        { answerText: "_var", isCorrect: false },
      ],
    },
    {
      question: "ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಸರಿಯಾದ ವೇರಿಯಬಲ್ ಆಗಿದೆ",
      options: [
        { answerText: "var@1", isCorrect: false },
        { answerText: "int", isCorrect: false },
        { answerText: "if", isCorrect: false },
        { answerText: "var_1", isCorrect: true },
      ],
    },
    {
      question: "ವೇರಿಯೇಬಲ್ ಎಂದರೇನು ",
      options: [
        { answerText: "ಕಂಪ್ಯೂಟರ್‌ನ ಮೆಮೊರಿಯಲ್ಲಿ ಸಂಗ್ರಹವಾಗಿರುವ ಮೌಲ್ಯವನ್ನು ಸೂಚಿಸುವ ಹೆಸರ", isCorrect: true },
        { answerText: "ಯಾವಾಗಲೂ ಒಂದೇ ಮೌಲ್ಯವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ", isCorrect: false },
        { answerText: "ವೇರಿಯೇಬಲ್ ಒಂದು ಸ್ಥಿರ ಮೌಲ್ಯವಾಗಿದೆ", isCorrect: false },
        { answerText: "ಇವೆಲ್ಲವೂ", isCorrect: false },
      ],
    },
    {
      question: "ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಸರಿಯಾದ ವೇರಿಯಬಲ್ ನಿಯೋಜನೆಯಾಗಿದೆ",
      options: [
        { answerText: "a==1", isCorrect: false },
        { answerText: "a-1", isCorrect: false },
        { answerText: "a->1", isCorrect: false },
        { answerText: "a=1", isCorrect: true },
      ],
    },
    {
      question: "7.5 ರ ಡೇಟಾ ಪ್ರಕಾರ ಯಾವುದು",
      options: [
        { answerText: "ಪೂರ್ಣಾಂಕ (ಇಂಟ್)(int)", isCorrect: false },
        { answerText: "ಫ್ಲೋಟಿಂಗ್ ಪಾಯಿಂಟ್ ಸಂಖ್ಯೆ (ಫ್ಲೋಟ್ )(float)", isCorrect: true },
        { answerText: "ಸ್ಟ್ರಿಂಗ್ (str)", isCorrect: false },
        { answerText: "ಮೇಲಿನ ಯಾವುದೂ ಅಲ್ಲ", isCorrect: false },
      ],
    },
    {
      question: "ಕೆಳಗಿನವುಗಳಲ್ಲಿ ಯಾವುದು ಅನುಕ್ರಮ ಡೇಟಾ ಪ್ರಕಾರವಾಗಿದೆ",
      options: [
        { answerText: "ಪೂರ್ಣಾಂಕ (ಇಂಟ್)(int)", isCorrect: false },
        { answerText: "ಸ್ಟ್ರಿಂಗ್ (str)", isCorrect: true },
        { answerText: "ಫ್ಲೋಟಿಂಗ್ ಪಾಯಿಂಟ್ ಸಂಖ್ಯೆ (ಫ್ಲೋಟ್ )(float)", isCorrect: false },
        { answerText: "ಮೇಲಿನ ಎಲ್ಲಾ", isCorrect: false },
      ],
    },

    {
      question: "% ಆಪರೇಟರ್ ಏನು ಮಾಡುತ್ತದೆ?",
      options: [
        { answerText: "ಭಾಗಕಾರ   (ಫ್ಲೋಟಿಂಗ್ ಪಾಯಿಂಟ್ ಫಲಿತಾಂಶ)", isCorrect: false },
        { answerText: "ಭಾಗಕಾರ  (ಫಲಿತಾಂಶವು ಹತ್ತಿರದ ಪೂರ್ಣಾಂಕ ಸಂಖ್ಯೆವಾಗಿರುತ್ತದೆ)", isCorrect: false },
        { answerText: "ಘಾತ", isCorrect: false },
        { answerText: "ಭಾಗಕಾರ  ಮಾಡಿದ ನಂತರ ಉಳಿದ ಸಂಖ್ಯೆ", isCorrect: true },
      ],
    },
      {
      question: "ಘಾತೀಯೀಕರಣಕ್ಕಾಗಿ ಯಾವ ಆಪರೇಟರ್ ಅನ್ನು ಬಳಸಲಾಗುತ್ತದೆ ?",
      options: [
        { answerText: "/", isCorrect: false },
        { answerText: "//", isCorrect: false },
        { answerText: "**", isCorrect: true },
        { answerText: "%", isCorrect: false },
      ],
    },
       {
      question: "ಯಾವ ತಾರ್ಕಿಕ ನಿರ್ವಾಹಕ ನಿರ್ವಾಹಕ ಎರಡು ಷರತ್ತುಗಳಲ್ಲಿ ಕನಿಷ್ಠ ಒಂದಾದರೂ ಸರಿಯಿದ್ದರೆ ಸರಿ ಎಂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ",
      options: [
        { answerText: "ಅಲ್ಲ", isCorrect: false },
        { answerText: "ಅಥವಾ", isCorrect: true },
        { answerText: "ಮತ್ತು", isCorrect: false },
        { answerText: "ಮೇಲಿನ ಯಾವುದೂ ಅಲ್", isCorrect: false },
      ],
    },
        {
      question: "ಒಂದು ನಿರ್ದಿಷ್ಟ ಷರತ್ತು ನಿಜವಾಗಿದ್ದರೆ ಮಾತ್ರ ಕೋಡ್‌ನ ಬ್ಲಾಕ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಯಾವ ಹೇಳಿಕೆಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ?",
      options: [
        { answerText: "ಇಲ್ಲದಿದ್ದರೆ ಒಂದು ವೇಳೆ", isCorrect: false },
        { answerText: "ಇಲ್ಲದಿದ್ದರೆ", isCorrect: false },
        { answerText: "ಫಾರ್ು", isCorrect: false },
        { answerText: "ಒಂದು ವೇಳೆ", isCorrect: true },
      ],
    },

       {
      question: "ಪೈಥಾನ್‌ನ ಒಂದು ವೇಳೆ-ಇಲ್ಲದಿದ್ದರೆ ಕನ್‌ಸ್ಟ್ರಕ್ಟ್‌ನಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ ಹೇಳಿಕೆಯ ಉದ್ದೇಶವೇನು?",
      options: [
        { answerText: "ಹಲವಾರು ಷರತ್ತುಗಳನ್ನು ಅನುಕ್ರಮವಾಗಿ ಪರಿಶೀಲಿಸಲು", isCorrect: false },
        { answerText: "ಕೋಡ್‌ನಲ್ಲಿ ಲೂಪ್‌ಗಳನ್ನು ರಚಿಸಲು", isCorrect: false },
        { answerText: "ಒಂದು ವೇಳೆ ಸ್ಥಿತಿ ತಪ್ಪಾಗಿರುವಾಗ ಕ್ರಿಯೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು", isCorrect: true },
        { answerText: "ಒಂದು ಷರತ್ತು ನಿಜವಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು", isCorrect: false },
      ],
    },

  
    {
      question: "ಇದರ ಔಟ್‌ಪುಟ್ ಏನು a=5\n a*=3 ಮುದ್ರಿಸು(a)",
      options: [
        { answerText: "15", isCorrect: true },
        { answerText: "a*", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      question: "ಇದರ ಔಟ್‌ಪುಟ್ ಏನು a=9 ಮುದ್ರಿಸು(a>7)",
      options: [
        { answerText: "9", isCorrect: false },
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        { answerText: "No", isCorrect: false },
      ],
    },
    {
      question: "ಇದರ ಔಟ್‌ಪುಟ್ ಏನು ಮುದ್ರಿಸು(9*3+(9//4)) ",
      options: [
        { answerText: "29", isCorrect: true },
        { answerText: "29.25", isCorrect: false },
        { answerText: "45", isCorrect: false },
        { answerText: "47.25", isCorrect: false },
      ],
    },
    {
      question: "ಇದರ ಔಟ್‌ಪುಟ್ ಏನು ಮುದ್ರಿಸು(10+9-9*6/3)",
      options: [
        { answerText: "1", isCorrect: false },
        { answerText: "1.0", isCorrect: false },
        { answerText: "10.0", isCorrect: false },
        { answerText: "20", isCorrect: true },
      ],
    },

  ];
