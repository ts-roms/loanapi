import { faker } from "@faker-js/faker";

export const COADocParamsGet = [
    {
      name: 'charts-of-account',
      allowEmptyValue: false,
      required: true,
      type: 'string',
      example: faker.datatype.uuid(),
    },
  ];
  