import React, { useEffect, useState } from "react";

const SurveyCompletion = ({ t }) => {
  const [userCode, setUserCode] = useState("");

  useEffect(() => {
    const code = localStorage.getItem("userCode");
    if (code) {
      setUserCode(code);
    }
  }, []);

  return (
    <div className="thank-you text-center mt-8 px-4">
      <h3 className="text-2xl font-bold text-green-500">{t("thankYou")}</h3>

      <p className="text-lg text-gray-700 mt-4">
        {t("finishNote")}
      </p>

      <p className="text-lg text-gray-700 mt-4 font-semibold">
        {t("uniqueIDNote")}
      </p>

      <p className="text-3xl font-bold text-indigo-600 mt-2">
        {userCode ? userCode : "—"}
      </p>

      <p className="text-md text-gray-600 mt-4">
        {t("followInstagramNote")}
      </p>

      <p className="text-md text-gray-600 mt-2">
        {t("followUpNote")}
      </p>
    </div>
  );
};

export default SurveyCompletion;
