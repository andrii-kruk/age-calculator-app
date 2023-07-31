export const calculateUserAge = userData => {
  const userDate = new Date(
    `${userData.year}-${userData.month}-${userData.day}`
  );
  const currentDate = new Date();

  const ageDifference = currentDate - userDate;

  const ageDate = new Date(ageDifference);

  const ageYears = ageDate.getUTCFullYear() - 1970;
  const ageMonths = ageDate.getUTCMonth();
  const ageDays = ageDate.getUTCDate() - 1;

  return {
    days: ageDays,
    months: ageMonths,
    years: ageYears,
  };
};

export function formatNumberToTwoDigits(number) {
  return number.toString().padStart(2, '0');
}
