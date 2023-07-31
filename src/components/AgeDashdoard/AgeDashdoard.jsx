import { formatNumberToTwoDigits } from 'utils';
import { StyledSpan, StyledText, StyledWrapper } from './AgeDashdoard.styled';

const AgeDashdoard = ({ data }) => {
  return (
    <>
      <StyledWrapper>
        <div>
          <StyledText>
            <StyledSpan>
              {data.years ? formatNumberToTwoDigits(data.years) : '--'}
            </StyledSpan>
            Years
          </StyledText>
        </div>
        <div>
          <StyledText>
            <StyledSpan>
              {data.months ? formatNumberToTwoDigits(data.months) : '--'}
            </StyledSpan>
            Months
          </StyledText>
        </div>
        <div>
          <StyledText>
            <StyledSpan>
              {data.days ? formatNumberToTwoDigits(data.days) : '--'}
            </StyledSpan>
            Days
          </StyledText>
        </div>
      </StyledWrapper>
    </>
  );
};

export default AgeDashdoard;
