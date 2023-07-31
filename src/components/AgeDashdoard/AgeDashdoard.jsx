import { formatNumberToTwoDigits } from 'utils';
import { StyledSpan, StyledText, StyledWrapper } from './AgeDashdoard.styled';

const AgeDashdoard = ({ data }) => {
  return (
    <>
      {Object.keys(data).length !== 0 && (
        <StyledWrapper>
          <div>
            <StyledText>
              <StyledSpan>{formatNumberToTwoDigits(data.years)}</StyledSpan>
              Years
            </StyledText>
          </div>
          <div>
            <StyledText>
              <StyledSpan>{formatNumberToTwoDigits(data.months)}</StyledSpan>
              Months
            </StyledText>
          </div>
          <div>
            <StyledText>
              <StyledSpan>{formatNumberToTwoDigits(data.days)}</StyledSpan>Days
            </StyledText>
          </div>
        </StyledWrapper>
      )}
    </>
  );
};

export default AgeDashdoard;
