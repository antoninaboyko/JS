import employees from "./employees.js";
import * as employeesMethods from "./methods.mjs";

import { totalSalary } from "./methods.mjs";
import { departmentsQuantity } from "./methods.mjs";
import { departmentsSalary } from "./methods.mjs";


console.log(totalSalary(employees));
console.log(departmentsQuantity(employees));
console.log(departmentsSalary(employees));

console.log(employeesMethods.departmentsSalary(employees));