import useNumber from '@/hooks/useNumber';

function Button() {
  const number = useNumber();

  return <button type='button'>{number}</button>;
}

export default Button;
