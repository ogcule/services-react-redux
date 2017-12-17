import React from 'react';
import {shallow} from 'enzyme';
import Categories from './components/services/Categories';

test('Categories calls api after click', () => {
  const categoryFilter = shallow(
    <Categories />
  );

  test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});
})
