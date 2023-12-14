export type LdFlag = {
  name: string;
  values: {
    s1: boolean | number;
    s2: boolean | number;
    prod: boolean | number;
  };
};

/* { 
    name: flagName, 
    values: 
      {
        staging1: staging1Value,
        staging2: staging2Value,
        production: productionValue
      } 
    }
  */
export const getLdFlags: LdFlag[] = [
  {
    name: "Call Chrome for Vehicle Data",
    values: {
      s1: false,
      s2: false,
      prod: true,
    },
  },
  {
    name: "Use Gap Waiver Stip",
    values: {
      s1: false,
      s2: true,
      prod: true,
    },
  },
  {
    name: "Counter Offers Enabled",
    values: {
      s1: 10,
      s2: 20,
      prod: 20,
    },
  },
];

export const getProjects = [
  {
    projectName: "Auto Retail Lending",
    id: "arl",
  },
  {
    projectName: "Auto Retail",
    id: "uar",
  },
  {
    projectName: "Auto Refi",
    id: "refi",
  },
];
