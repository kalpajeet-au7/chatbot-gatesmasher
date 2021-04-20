class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("toc")|| lowerCaseMessage.includes("theory of computation")) {
        this.actionProvider.handleTOCList();
      }
      if (lowerCaseMessage.includes("dbms")) {
        this.actionProvider.handledbmsList();
      }
      if (lowerCaseMessage.includes("oops")|| lowerCaseMessage.includes("object oriented programming")) {
        this.actionProvider.handleOOPList();
      }
      if (lowerCaseMessage.includes("computer networks")) {
        this.actionProvider.handlecnetList();
      }
      if (lowerCaseMessage.includes("software engineering")) {
        this.actionProvider.handlesengList();
      }
     else {
       this.actionProvider.help()
     }
    }
  }
  
  export default MessageParser;