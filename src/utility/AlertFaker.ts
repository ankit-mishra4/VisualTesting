import { faker, Faker } from "@faker-js/faker";

export const getalertData =()=>{

const Entername = faker.person.fullName();
const Enteremail = faker.internet.email();
const Entersubject = faker.lorem.sentence();


return{

Entername,
Enteremail,
Entersubject,
};
};
