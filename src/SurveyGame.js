import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import ClimateAvatar from "./Componenets/ClimateAvatar.js";
import translations from "./translations.js";
import LanguageSelector from "./Componenets/LanguageSelector.js";
import ProgressBar from "./Componenets/ProgressBar.js";
import Question from "./Componenets/Question.js";
import ActionButtons from "./Componenets/ActionButtons.js";
import SurveyCompletion from "./Componenets/SurveyCompletion.js";
import { BsPersonWalking } from "react-icons/bs";

function SurveyGame() {
  const [language, setLanguage] = useState("English");
  const [questionsList, setQuestionsList] = useState([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Add state to track if the survey has started

  // Dynamically import language-specific questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const personalModule = await import(`./PersonalQuestions/${language}.js`);
        const climateModule = await import(`./ClimateQuestions/${language}.js`);
        
        const personalQs = personalModule.default || [];
        const climateQs = climateModule.default || [];
  
        const combined = [...personalQs, ...climateQs];
  
        setQuestionsList(combined);
        setStep(0);
        setAnswers([]);
        setSelectedAnswer("");
        setSurveyCompleted(false);
      } catch (err) {
        console.error(`Error loading questions for ${language}:`, err);
        setQuestionsList([]);
      }
    };
    loadQuestions();
  }, [language]);  

  // const playSound = (sound) => {
  //   const audio = new Audio(sound);
  //   audio.play();
  // };

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    // playSound("/sounds/answer-select.wav");
  };

  const handleStart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
  
      const data = await res.json();
      if (data._id) {
        localStorage.setItem("userId", data._id);
        console.log("User ID saved:", data._id); // ✅ Add this
        setHasStarted(true); // only proceed if ID was saved
      } else {
        console.error("Invalid user data:", data);
      }
    } catch (err) {
      console.error("Failed to register user:", err);
    }
  };    

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setSelectedAnswer(answers[step - 1] || "");
      setAnswers(answers.slice(0, -1));
      // playSound("/sounds/back.mp3");
    }
  };

  const handleNext = async () => {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = selectedAnswer;
    setAnswers(updatedAnswers);
  
    if (step === questionsList.length - 1) {
      setSurveyCompleted(true);
      const userId = localStorage.getItem("userId");
  
      // Build 0–65 answers with fallback to N/A
      const structuredAnswers = Array.from({ length: 66 }, (_, id) => {
        const index = questionsList.findIndex(q => q.id === id);
        return {
          questionId: id.toString(),
          answer: index !== -1 && updatedAnswers[index] ? updatedAnswers[index] : "N/A",
        };
      });
  
      try {
        const response = await fetch("http://localhost:5000/api/surveys", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            answers: structuredAnswers,
          }),
        });
  
        const result = await response.json();
        localStorage.setItem("userCode", result.userCode);
      } catch (error) {
        console.error("Error submitting survey:", error);
      }
    } else {
      setStep(step + 1);
      setSelectedAnswer(updatedAnswers[step + 1] || "");
    }
  };  

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };

  const progressPercent =
    questionsList.length > 1 ? (step / (questionsList.length - 1)) * 100 : 0;

  useEffect(() => {
    document.documentElement.style.setProperty("--walker-left", `${progressPercent}%`);
  }, [progressPercent]);

  const t = (key, fallback = "default") =>
    translations[key]?.[language] || translations[key]?.[fallback] || key;

  // Function to find the closest milestone
  const getMilestoneMessage = (progress) => {
    const roundedProgress = Math.round(progress);
    if (translations.milestones[roundedProgress]) {
      return translations.milestones[roundedProgress];
    }
    const closestMilestone = Object.keys(translations.milestones)
      .map(Number)
      .filter((m) => m <= roundedProgress)
      .sort((a, b) => b - a)[0];
    return translations.milestones[closestMilestone] || {};    
  };

  // Fetch milestone message based on current progress
  const milestone = getMilestoneMessage(progressPercent);

  return (
    <div className="container mx-auto p-4 relative">
      {surveyCompleted && <Confetti />}

      <LanguageSelector language={language} handleLanguageChange={handleLanguageChange} />
      <h2 className="text-2xl font-bold text-center mb-6">
        🎉 {t("title")} 🎉
      </h2>

      {!hasStarted && (
        <div className="text-center mt-10">
          <h3> {t("welcomeMessage")} </h3>
          <p className="text-xl font-medium mb-6">
            {t("surveyIntro")} 
          </p>
          <button
            onClick={handleStart}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            {t("startButton")} 
          </button>
        </div>
      )}

      {/* Survey Content if survey has started */}
      {hasStarted && !surveyCompleted && (
        <>
          <div className="flex items-center space-x-4 mb-4">
            <ProgressBar progressPercent={progressPercent} />
            <ClimateAvatar progress={progressPercent} />
          </div>

          <div className="mt-4">
            <Question
              question={questionsList[step]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswerSelection}
              step={step}
              total={questionsList.length}
              t={t}
            />

            <ActionButtons
              handleBack={handleBack}
              handleNext={handleNext}
              step={step}
              selectedQuestions={questionsList}
              selectedAnswer={selectedAnswer}
              t={t}
            />

            <AnimatePresence>
              {milestone && (
                <motion.p
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="milestone text-lg text-blue-600 font-semibold mt-4"
                >
                  {translations.milestones[Math.round(progressPercent)]?.[language] 
                    || translations.milestones[Math.round(progressPercent)]?.default 
                    || milestone?.[language] 
                    || milestone?.default
                  }
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="progress-container relative mt-6 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="progress-bar bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
            <div
              className="walker-wrapper absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `calc(${progressPercent}% - 1rem)` }}
            >
              <div className="walker text-2xl">
                <BsPersonWalking />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Show Completion Screen when survey is done */}
      {surveyCompleted && <SurveyCompletion t={t} />}
    </div>
  );
}

export default SurveyGame;