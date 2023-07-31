import { useState } from 'react';

import Form from './Form/Form';
import AgeDashdoard from './AgeDashdoard/AgeDashdoard';

import { calculateUserAge } from 'utils';
import { StyledContainer } from 'App.styled';

const App = () => {
  const [userAge, setUserAge] = useState({});
  const handleSubmit = event => {
    event.preventDefault();
    const day = event.currentTarget.elements.day.value;
    const month = event.currentTarget.elements.month.value;
    const year = event.currentTarget.elements.year.value;

    const calculatedAge = calculateUserAge({ day, month, year });
    setUserAge(calculatedAge);
  };

  return (
    <StyledContainer>
      <Form onSubmit={handleSubmit} />
      <AgeDashdoard data={userAge} />
    </StyledContainer>
  );
};

export default App;
