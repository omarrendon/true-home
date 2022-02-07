import useCounter from '../hooks/useCounter';
import { renderHook} from '@testing-library/react-hooks';




describe('Test al hook useCounter', () => {
test('debe de retornar los valores por defeecto del hook', () => {
  const { result } = renderHook( () => useCounter());
  expect(result.current.counter).toBe(0);
  expect(typeof result.current.increaseBy).toBe('function');
});

});