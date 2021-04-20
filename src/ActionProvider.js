class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
    help() {
      const helpMessage = this.createChatBotMessage("Try clicking on any of the available options or type something like 'dbms' in the chat!")
      this.updateChatbotState(helpMessage)
    }
    handleTOCList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Theory of Computation:",
        {
          widget: "tocLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handledbmsList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on DBMS:",
        {
          widget: "dbmsLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleOOPList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Object Oriented Programming:",
        {
          widget: "oopLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handlecnetList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Computer Networks:",
        {
          widget: "cnetLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handlesengList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Software Engineering:",
        {
          widget: "sengLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;