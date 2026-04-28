import { faker } from "@faker-js/faker";

export const getUserData = () => {

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zipCode = faker.location.zipCode();

  const phone = faker.string.numeric(10);
  const ssn = faker.string.numeric(9);
  const username = faker.internet.username();

  //  same password used for confirm also
  const password = faker.internet.password();

  return {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword: password
  };
};