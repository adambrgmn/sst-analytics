// @flow

export default (variable: string, defaultValue?: string): string => {
  const envVariable = process.env[variable];
  if (!envVariable || envVariable == null) {
    if (defaultValue) return defaultValue;
    throw new Error(`Environment variable ${variable} is not defined.`);
  }

  return envVariable;
};
