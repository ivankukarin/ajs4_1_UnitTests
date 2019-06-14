import { hero, defineColorHealth, colorHero } from '../src/js/app' 

test('check the color of health. If person.health > 50 would be output string healthy', () => {
  
  const received = 'Маг healthy';
  const expected = colorHero;

  expect(received).toBe(expected);

});

test('check the color of health. If person.health => 15 and =< 50  would be output string wounded', () => {
  
  const received = 'Кузнец wounded';
  const expected = defineColorHealth({ name: 'Кузнец', health: 50 });

  expect(received).toBe(expected);

});

test('check the color of health. If person.health < 15 would be output string critical ', () => {
  
  const received = 'Палладин critical';
  const expected = defineColorHealth({ name: 'Палладин', health: 14 });

  expect(received).toBe(expected);

});