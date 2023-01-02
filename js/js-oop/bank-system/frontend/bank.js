let root = document.getElementById("root");

fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    root.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Balance</th>
        <th scope="col">Interest</th>
        <th scope="col">Final balance</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>`;
    let tbody = document.getElementsByTagName("tbody")[0];
    res.map((user) => {
      let newTr = document.createElement("tr");
      newTr.innerHTML = `<th scope="row">${user.id + 1}</th>
    <td>${user.name}</td> 
    <td>${user.surName}</td>
    <td>${user.balance}</td>
    <td>Interest</td>
    <td>Final balance</td>`;
      tbody.appendChild(newTr);
    });
  });

// function numSeparater(num) {
//   let arr = []
//   for (let i = 1; i < num.toString().length / 3; i++) {
//     if(num % 1000 == 0){
//       arr.push("000")
//     } else{

//     }

//   }
// }

{
  /* <tr>
        <th scope="row">1</th>
        <td>Mark</td> 
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr> */
}
