import slugify from "slugify";

export class Utils {
  static async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static getSlug(title) {
    return slugify(title, {
      lower: true,
    });
  }
};