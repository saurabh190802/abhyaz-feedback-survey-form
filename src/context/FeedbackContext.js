import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../components/Data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);



  

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); //adds new id to the new feedback object
    setFeedback([newFeedback, ...feedback]); //by using spread operator we will copy all the existing feedback into this array and then add the new one to it which will create a new state
  };

 

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
       
        addFeedback,
       
        
       
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
