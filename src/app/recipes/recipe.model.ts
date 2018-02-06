export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public cuisine: string;
  public mealType: string;

  constructor(name: string, description: string, imagePath: string, cuisine: string, mealType: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.cuisine = cuisine;
    this.mealType = mealType;
  }
}
