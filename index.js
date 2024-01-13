/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    
        const developerArray = arr.filter((employees) => employees.profession === "developer");
      
        developerArray.map((developer) => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    const filteredArr = arr.filter((employees) =>  employees.profession === "developer");
      filteredArr.forEach((data) => console.log(data));
  }
  
  function addData() {
    const newEmployees = {id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(newEmployees);
    console.log(newEmployees);

  }
  
  function removeAdmin() {
    const filteredArr = arr.filter((employees) => employees.profession !== "admin");
    console.log(filteredArr);

  }
  
  function concatenateArray() {
    const newArray = [
        { id: 4, name: "sam", age: "24", profession: "product manager" },
        { id: 5, name: "jeny", age: "26", profession: "data scientist" },
        { id: 6, name: "pranav", age: "23", profession: "developer" },
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }