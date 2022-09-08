// Types
import { RoutesObj } from "../types/config";

// Checks wehter the requested express route slugs are found in a paramTable if the route has paramaters

const checkParamMatch = async (
  route: RoutesObj,
  reqParams: any
): Promise<boolean> => {
  let pass = true;
  if (route.paramTable) {
    pass = false;
    let paramTableVals = [];
    if (typeof route.paramTable === "function") {
      paramTableVals = await route.paramTable();
    } else {
      paramTableVals = route.paramTable;
    }
    for (const property in reqParams) {
      for (let i = 0; i < paramTableVals.length; i++) {
        if (paramTableVals[i]?.[property] === reqParams[property]) {
          pass = true;
          return pass;
        }
      }
    }
  }
  return pass;
};
export default checkParamMatch;
