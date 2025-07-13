const qBank = [
  {
    id: 1,
    question: "What is JSX in React?",
    options: [
      "JavaScript Syntax Extension",
      "JavaScript XML",
      "Java Standard Expression",
      "Java XML Syntax"
    ],
    answer: "JavaScript XML"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
    answer: "useState()"
  },
  {
    id: 3,
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the actual DOM",
      "An actual DOM in the memory",
      "A real-time database",
      "A browser extension"
    ],
    answer: "A lightweight copy of the actual DOM"
  },
  {
    id: 4,
    question: "What is the correct way to pass props in React?",
    options: [
      "<Component prop='value' />",
      "Component.prop(value)",
      "Component->prop:value",
      "<Component.prop=value />"
    ],
    answer: "<Component prop='value' />"
  },
  {
    id: 5,
    question: "Which method is used to perform side effects in React functional components?",
    options: ["useState()", "useRef()", "useEffect()", "componentDidMount()"],
    answer: "useEffect()"
  }
];

export default qBank;
