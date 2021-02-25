export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    if (this.characters.size !== 0) {
      for (const char of this.characters) {
        if (char.name === character.name && char.level === character.level
            && char.class === character.class) {
          throw new Error('Такой персонаж уже есть в команде');
        }
      }
    }
    this.characters.add(character);
  }


  addAll(...characters) {
    for (const char of characters) {
      this.characters.add(char);
    }
  }

  toArray() {
    return Array.from(this.characters);
  }
}
