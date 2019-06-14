const hero = {
  name: 'Маг',
  health: 90
} ;

const defineColorHealth = (person) => {
  let healtMarker;
  if (person.health > 50) {
    healtMarker = 'healthy';
  } else if (person.health < 15) {
    healtMarker = 'critical';
  } else {
    healtMarker = 'wounded';
  }
  return `${person.name} ${healtMarker}`;
};

defineColorHealth(hero);

const colorHero = defineColorHealth(hero);

console.log(colorHero);

export { hero, defineColorHealth, colorHero };
