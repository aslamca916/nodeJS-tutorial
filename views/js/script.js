const inputData = document.querySelector("input");
const addUserbtn = document.querySelector("button");
const detailsContainer = document.querySelector(".detailsContainer")


// addUserbtn.addEventListener('click',addUser)

// function addUser() {
//     fetch("http://localhost:3001/addUser",{
//             method:"POST",
//             headers:{
//                 "Content-Type": "application/json",
//             },
//             //Use this below code for passing data from the frontend to backend
//             body: JSON.stringify({
//                 id: Date.now(),
//                 name:inputData.value,
//             }),
//         })
//         .then((res)=> res.json())
//         .then((data)=> {
//             console.log(data);
//             displayUser()
//         });


//         inputData.value = "";
// }

addUserbtn.onclick = () => {
    fetch("http://localhost:3001/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now(),
            name: inputData.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUser();
        });

        inputData.value = "";
};


function displayUser() {
    let section = "";

    fetch("http://localhost:3001/displayUser")
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        data.forEach((element) => {
            section =`<section>${element.name}</section>`
        });
        
        detailsContainer.insertAdjacentHTML("beforeend",section);
    });
}
