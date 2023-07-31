import Button from 'components/Button/Button';
import {
  StyledDayInput,
  StyledForm,
  StyledMonthInput,
  StyledYearInput,
} from './Form.styled';

const Form = ({ onSubmit }) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledDayInput
          type="number"
          name="day"
          placeholder="Day"
          min="1"
          max="31"
        />
        <StyledMonthInput
          type="number"
          name="month"
          placeholder="Mounth"
          min="1"
          max="12"
        />
        <StyledYearInput
          type="number"
          name="year"
          placeholder="Year"
          max={new Date().getFullYear()}
        />
        <Button type="submit" children="S" />
      </StyledForm>
    </>
  );
};

export default Form;
