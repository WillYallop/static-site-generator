// Types
import { RoutesObj } from "../types/config";

// Checks whether the requested express route slugs are found in a paramLookup if the route has parameters

const checkParamMatch = async (
  route: RoutesObj,
  reqParams: any
): Promise<boolean> => {
  let pass = true;
  if (route.paramLookup) {
    pass = false;
    let paramTableVals = [];
    if (typeof route.paramLookup === "function") {
      paramTableVals = await route.paramLookup();
    } else {
      paramTableVals = route.paramLookup;
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
