//1         
export function totalSalary(employees) {
    let sum = 0;
    for (let employee of employees) {
        sum += employee.salary;
    }
    return sum;
}
//2
export function departmentsQuantity(employees) {
    let department = new Set();
    for (let employee of employees) {
        department.add(employee.department);
    }
    return department.size;
}
//3
export function departmentsSalary(employees) {
    let salarySum = {};
    for (let employee of employees) {
        let departmentEmployee = employee.department;
        let salary = employee.salary;

        if (salarySum[departmentEmployee] === undefined) {
            salarySum[departmentEmployee] = 0;
        }
        
        salarySum[departmentEmployee] += salary;

    }
    return salarySum;
}