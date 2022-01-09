import React from 'react';
import SectionForecast from './SectionForecast';
import SectionCharts from './SectionCharts';
import SectionHabits from './SectionHabits';
import SectionPlan from './SectionPlan';
import SectionPeople from './SectionPeople';
import SectionInside from './SectionInside';
import SectionPrice from './SectionPrice';
import SectionGuarantee from './SectionGuarantee';
import SectionPay from './SectionPay';

export const Sections = () => {
  return (
    <>
      <SectionForecast />
      <SectionCharts />
      <SectionHabits />
      <SectionPlan />
      <SectionPeople />
      <SectionInside />
      <SectionPrice />
      <SectionGuarantee />
      <SectionPay />
    </>
  );
};
