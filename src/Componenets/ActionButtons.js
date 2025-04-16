import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ActionButtons = ({ handleBack, handleNext, step, selectedQuestions, selectedAnswer, t }) => {
  return (
    <div className="button-group flex justify-between mt-6">
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        disabled={step === 0}
      >
        <FaArrowLeft className="inline-block mr-1" /> {t("back")}
      </button>
      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="px-6 py-2 bg-green-500 text-white rounded-md disabled:opacity-50"
      >
        {step === selectedQuestions.length - 1 ? t("submit") : t("next")}{" "}
        <FaArrowRight className="inline-block ml-1" />
      </button>
    </div>
  );
};

export default ActionButtons;
