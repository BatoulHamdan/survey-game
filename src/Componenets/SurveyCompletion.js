import React from "react";

const SurveyCompletion = ({ t }) => {
  return (
//     - AT THE END OF THE SURVEY - 

// Thank you for taking the time to fill out our survey. We hope your contribution will help make the world a better place.

// Here's your unique ID to enter the lottery for our special gift!

// "unique ID" (four digits)

// Follow us on Instagram to check out whether you are one of the lucky winners.
// We will post a special link on June 3rd.
// In the meantime, you'll get to follow up on the survey results and learn more about the environment.


    <div className="thank-you text-center mt-8">
      <h3 className="text-2xl font-bold text-green-500">{t("thankYou")}</h3>
      <p className="text-lg text-gray-700 mt-2">{t("finishNote")}</p>
    </div>
  );
};

export default SurveyCompletion;
