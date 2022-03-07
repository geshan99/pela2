import {
  anuraWTG,
  arugambayWTG,
  caveTempWTG,
  daladaWTG,
  galleWTG,
  hikkaduwaWTG,
  hortonWTG,
  minneriyaWTG,
  mirissaWTG,
} from './WhereToGoDataStore';

function WhereToGoDataMain(pageTitle) {
  switch (pageTitle) {
    case 'anuradhapura':
      return anuraWTG;
    case 'arugambay':
      return arugambayWTG;
    case 'caveTemple':
      return caveTempWTG;
    case 'dalada':
      return daladaWTG;
    case 'galle':
      return galleWTG;
    case 'hikkaduwa':
      return hikkaduwaWTG;
    case 'hortonPlace':
      return hortonWTG;
    case 'minneriya':
      return minneriyaWTG;
    case 'mirissa':
      return mirissaWTG;
    default:
      return { message: 'somethings wrong' };
  }
}

export default WhereToGoDataMain;
