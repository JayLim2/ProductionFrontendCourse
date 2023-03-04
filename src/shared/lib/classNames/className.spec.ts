import { classNames } from './classNames';

describe('classNames', () => {
  test('with the only primary class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with primary class AND additional parameters', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with primary class AND additional params AND two modifiers', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: true
      },
      ['class1', 'class2']
    )).toBe(expected);
  });

  test('with primary class AND additional params AND two modifiers, one disabled', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: false
      },
      ['class1', 'class2']
    )).toBe(expected);
  });

  test('with primary class AND additional params AND two modifiers, one undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: undefined
      },
      ['class1', 'class2']
    )).toBe(expected);
  });
});
