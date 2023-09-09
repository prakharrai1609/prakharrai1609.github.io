export class Utils {
  static async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};