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
    name: "flagName1",
    values: {
      s1: false,
      s2: false,
      prod: true,
    },
  },
  {
    name: "flagName2",
    values: {
      s1: false,
      s2: true,
      prod: true,
    },
  },
  {
    name: "flagName3",
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
