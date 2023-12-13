export type LdFlag = {
  name: string;
  value: any;
  environment: string;
};

export const getLdFlags: LdFlag[] = [
  {
    name: "flagName1",
    value: false,
    environment: "S1",
  },
  {
    name: "flagName1",
    value: false,
    environment: "S2",
  },
  {
    name: "flagName1",
    value: true,
    environment: "PROD",
  },
  {
    name: "flagName2",
    value: false,
    environment: "S1",
  },
  {
    name: "flagName2",
    value: true,
    environment: "S2",
  },
  {
    name: "flagName2",
    value: true,
    environment: "PROD",
  },
  {
    name: "flagName3",
    value: 10,
    environment: "S1",
  },
  {
    name: "flagName3",
    value: 20,
    environment: "S2",
  },

  {
    name: "flagName3",
    value: 20,
    environment: "PROD",
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
