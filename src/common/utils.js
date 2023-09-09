export class Utils {
  static async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async typeWriter(texts, setTextElement) {
    for (const text of texts) {
      for (const char of text) {
        await this.sleep(30);
        setTextElement(line => line + char);
      }

      if (texts.indexOf(text) < texts.length - 1) {
        await this.sleep(1000);
        setTextElement(line => line + "<br /><br />");
      }
    }
  }
};