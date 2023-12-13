export const getLdFlags = async () => {
  return [
    {
      key: 'flagName1',
      value: false,
      environment: 'S1',
    },
    {
      key: 'flagName1',
      value: false,
      environment: 'S2',
    },
    {
      key: 'flagName1',
      value: true,
      environment: 'PROD',
    },
    {
      key: 'flagName2',
      value: false,
      environment: 'S1',
    },
    {
      key: 'flagName2',
      value: true,
      environment: 'S2',
    },
    {
      key: 'flagName2',
      value: true,
      environment: 'PROD',
    },
    {
      key: 'flagName3',
      value: 10,
      environment: 'S1',
    },
    {
      key: 'flagName3',
      value: 20,
      environment: 'S2',
    },

    {
      key: 'flagName3',
      value: 20,
      environment: 'PROD',
    }
  ]
}