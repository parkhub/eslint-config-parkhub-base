import eslintConfig from '../src';

test('Should not contain any reference to react', () => {
  const entries = Object.entries(eslintConfig);
  const values = Object.values(eslintConfig);

  expect(entries.includes('react')).toBeFalsy();
  expect(values.includes('react')).toBeFalsy();
});
