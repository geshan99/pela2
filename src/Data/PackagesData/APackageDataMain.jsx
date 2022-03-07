import React from 'react';
import BookNowDataJSON from './BookNow.data';
import {
  planDetailsBeach,
  planDetailsDolphin,
  planDetailsJungle,
} from './PlanDetails.data';
import {
  inExDataBeach,
  inExDataDolphin,
  inExDataJungle,
} from './InExData.data';
import {
  briefPlanDataBeach,
  briefPlanDataDolphin,
  briefPlanDataJungle,
} from './BriefPlanData.data';
import beachPackImg from '../../assets/Home Page/Holiday packages/beach package.jpg';
import dolphinPackImg from '../../assets/Home Page/Holiday packages/dolphin package.jpg';
import junglePackImg from '../../assets/Home Page/Holiday packages/jungle package.jpg';

function APackageDataMain(pageTitle) {
  switch (pageTitle) {
    case 'beachPackage':
      return {
        pagePhoto: beachPackImg,
        title: 'Beach Package',
        briefPlanData: briefPlanDataBeach,
        inExData: inExDataBeach,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsBeach,
      };
    case 'dolphinPackage':
      return {
        pagePhoto: dolphinPackImg,
        title: 'Dolphin Package',
        briefPlanData: briefPlanDataDolphin,
        inExData: inExDataDolphin,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsDolphin,
      };
    case 'junglePackage':
      return {
        pagePhoto: junglePackImg,
        title: 'Jungle Package',
        briefPlanData: briefPlanDataJungle,
        inExData: inExDataJungle,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsJungle,
      };
    default:
      return { message: 'somethings wrong' };
  }
}

export default APackageDataMain;
