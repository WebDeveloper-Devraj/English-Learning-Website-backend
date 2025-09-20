const advancedQuizzes = [
  {
    level: "advanced",
    title: "Advanced Grammar",
    difficulty: "Hard",
    questions: [
      {
        question: "Identify the correct subjunctive form:",
        text: "If I ___ you, I would reconsider the offer.",
        options: ["was", "were", "am", "be"],
        correctAnswer: 1,
        explanation: "'Were' is used for subjunctive mood in hypothetical situations."
      },
      {
        question: "Choose the correct inversion:",
        text: "___ I known about the traffic, I would have left earlier.",
        options: ["Had", "Have", "Was", "Should"],
        correctAnswer: 0,
        explanation: "Inversion with 'Had' is used in conditional clauses."
      },
      {
        question: "Select the correct past perfect usage:",
        text: "She ___ finished the project before the deadline.",
        options: ["has", "had", "have", "having"],
        correctAnswer: 1,
        explanation: "Past perfect 'had finished' indicates completion before another past action."
      },
      {
        question: "Identify the correct sentence with reduced relative clause:",
        text: "The book ___ by the author was a bestseller.",
        options: ["writing", "written", "writes", "wrote"],
        correctAnswer: 1,
        explanation: "'Written' is the past participle used in reduced relative clause."
      },
      {
        question: "Choose correct modal verb usage:",
        text: "You ___ have informed me earlier.",
        options: ["could", "should", "might", "must"],
        correctAnswer: 1,
        explanation: "'Should have' expresses a past obligation that was not fulfilled."
      }
    ]
  },
  {
    level: "advanced",
    title: "Advanced Vocabulary",
    difficulty: "Hard",
    questions: [
      {
        question: "Select the word closest in meaning to 'obfuscate':",
        text: "The politician tried to ___ the truth.",
        options: ["clarify", "confuse", "explain", "simplify"],
        correctAnswer: 1,
        explanation: "'Obfuscate' means to deliberately make something unclear."
      },
      {
        question: "Choose the antonym of 'aberration':",
        text: "The scientist's normal findings were the opposite of an ___.",
        options: ["anomaly", "regularity", "deviation", "eccentricity"],
        correctAnswer: 1,
        explanation: "'Regularity' is the opposite of an unusual occurrence or deviation."
      },
      {
        question: "Identify the correct usage of 'ephemeral':",
        text: "The beauty of the sunset was ___.",
        options: ["lasting", "ephemeral", "permanent", "enduring"],
        correctAnswer: 1,
        explanation: "'Ephemeral' means lasting for a very short time."
      },
      {
        question: "Choose the synonym of 'loquacious':",
        text: "The professor was so ___ that lectures lasted hours.",
        options: ["talkative", "silent", "angry", "happy"],
        correctAnswer: 0,
        explanation: "'Loquacious' means very talkative."
      },
      {
        question: "Select the word that best fits:",
        text: "His behavior was full of ___ and insincerity.",
        options: ["candor", "duplicity", "honesty", "frankness"],
        correctAnswer: 1,
        explanation: "'Duplicity' refers to deceitfulness or double-dealing."
      },
      {
        question: "Identify the correct word usage:",
        text: "The lecture was ___, keeping the audience awake.",
        options: ["captivating", "tedious", "engaging", "exciting"],
        correctAnswer: 1,
        explanation: "'Tedious' means boring or monotonous."
      }
    ]
  },
  {
    level: "advanced",
    title: "Advanced Idioms & Phrases",
    difficulty: "Hard",
    questions: [
      {
        question: "What does 'burning the midnight oil' mean?",
        text: "She was ___ to finish her thesis on time.",
        options: ["working late", "relaxing", "sleeping", "reading"],
        correctAnswer: 0,
        explanation: "It means working late into the night."
      },
      {
        question: "Choose the correct meaning of 'bite the bullet':",
        text: "He decided to ___ and apologize.",
        options: ["avoid it", "face it", "ignore it", "laugh at it"],
        correctAnswer: 1,
        explanation: "Means to face a difficult situation bravely."
      },
      {
        question: "Select the idiom meaning 'act quickly':",
        text: "We need to ___ before the opportunity is gone.",
        options: ["beat around the bush", "strike while the iron is hot", "let it go", "take it easy"],
        correctAnswer: 1,
        explanation: "Means to take action immediately when the opportunity arises."
      },
      {
        question: "Identify meaning of 'cut to the chase':",
        text: "Let's ___ and discuss the main problem.",
        options: ["avoid details", "delay discussion", "tell a story", "summarize everything"],
        correctAnswer: 0,
        explanation: "Means to get to the point without wasting time."
      },
      {
        question: "Choose the correct usage of 'throw in the towel':",
        text: "After repeated failures, he finally ___.",
        options: ["gave up", "won", "continued", "started again"],
        correctAnswer: 0,
        explanation: "Means to admit defeat or quit."
      },
      {
        question: "What does 'hit the nail on the head' mean?",
        text: "Her comment really ___ the problem.",
        options: ["missed", "solved", "identified correctly", "ignored"],
        correctAnswer: 2,
        explanation: "Means to describe exactly what is causing a situation."
      }
    ]
  },
  {
    level: "advanced",
    title: "Advanced Listening Comprehension",
    difficulty: "Hard",
    questions: [
      {
        question: "The speaker uses irony in the sentence: 'What a wonderful mess!' What is meant?",
        text: "Choose the correct interpretation:",
        options: ["Everything is perfect", "Situation is bad", "Literal meaning", "Unclear meaning"],
        correctAnswer: 1,
        explanation: "Irony means expressing something opposite to the literal meaning."
      },
      {
        question: "What does 'nuance' mean in this sentence?",
        text: "The debate highlighted the subtle ___ in opinions.",
        options: ["similarities", "subtle differences", "numbers", "loud opinions"],
        correctAnswer: 1,
        explanation: "'Nuance' refers to a subtle difference in meaning or expression."
      },
      {
        question: "Choose the meaning of 'implicit' in context:",
        text: "Her support was implicit rather than expressed.",
        options: ["obvious", "implied", "loud", "denied"],
        correctAnswer: 1,
        explanation: "'Implicit' means implied though not plainly expressed."
      },
      {
        question: "Identify meaning of 'ambiguous statement':",
        text: "His instructions were ambiguous.",
        options: ["clear", "uncertain", "direct", "simple"],
        correctAnswer: 1,
        explanation: "'Ambiguous' means unclear or open to multiple interpretations."
      },
      {
        question: "Select the correct interpretation of idiom 'under the weather':",
        text: "She felt ___ and did not attend class.",
        options: ["sick", "happy", "energetic", "bored"],
        correctAnswer: 0,
        explanation: "Means feeling ill or unwell."
      }
    ]
  },
  {
    level: "advanced",
    title: "Advanced Writing Skills",
    difficulty: "Hard",
    questions: [
      {
        question: "Choose the correct sentence with parallel structure:",
        text: "She likes reading, writing, and ___?",
        options: ["to swim", "swimming", "swim", "swum"],
        correctAnswer: 1,
        explanation: "Maintain the same grammatical form: reading, writing, swimming."
      },
      {
        question: "Select the correct sentence with active voice:",
        text: "The cake ___ by the chef.",
        options: ["was baked", "bakes", "baking", "bake"],
        correctAnswer: 0,
        explanation: "Active voice would be 'The chef baked the cake'."
      },
      {
        question: "Identify correct use of punctuation:",
        text: "Choose the sentence with correct comma usage.",
        options: [
          "I bought apples, oranges and bananas.",
          "I bought apples oranges, and bananas.",
          "I bought apples, oranges, and bananas.",
          "I bought, apples, oranges and bananas."
        ],
        correctAnswer: 2,
        explanation: "The Oxford comma is used correctly."
      },
      {
        question: "Select correct sentence with correct conditional:",
        text: "If I ___ earlier, I would have caught the train.",
        options: ["left", "had left", "have left", "leaving"],
        correctAnswer: 1,
        explanation: "Past perfect is used for third conditional."
      },
      {
        question: "Choose the correct sentence using subjunctive:",
        text: "I suggest that he ___ on time.",
        options: ["arrives", "arrive", "arrived", "arriving"],
        correctAnswer: 1,
        explanation: "Subjunctive mood uses base form of the verb after 'suggest'."
      }
    ]
  },
  {
    level: "advanced",
    title: "Advanced Reading Comprehension",
    difficulty: "Hard",
    questions: [
      {
        question: "What is the main idea of a complex paragraph?",
        text: "Read and choose the correct main idea.",
        options: ["Minor detail", "Author's main point", "Unrelated info", "Title only"],
        correctAnswer: 1,
        explanation: "Main idea summarizes the primary point of the passage."
      },
      {
        question: "Identify the tone of the author:",
        text: "The article criticizes poor government policy sarcastically.",
        options: ["Neutral", "Sarcastic", "Friendly", "Informative"],
        correctAnswer: 1,
        explanation: "Tone indicates author's attitude toward the subject."
      },
      {
        question: "Choose the correct inference from text:",
        text: "Based on evidence, we can infer that the population is declining.",
        options: ["Opinion", "Fact", "Inference", "Guess"],
        correctAnswer: 2,
        explanation: "Inference is a logical conclusion drawn from evidence."
      },
      {
        question: "What is the purpose of transition words?",
        text: "They help ___ ideas and sentences.",
        options: ["confuse", "connect", "ignore", "shorten"],
        correctAnswer: 1,
        explanation: "Transition words connect ideas for coherence."
      },
      {
        question: "Select the best summary of the passage:",
        text: "Summarize in one sentence.",
        options: [
          "Minor details",
          "Main point concisely",
          "All examples",
          "Author's biography"
        ],
        correctAnswer: 1,
        explanation: "A summary should convey the main point concisely."
      }
    ]
  }
];

module.exports = advancedQuizzes;
