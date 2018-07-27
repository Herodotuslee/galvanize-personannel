// Your code here!

const url = 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles';
const img = document.getElementById('role-img');
const menu = document.getElementById('menu');
const form = document.querySelector('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const showResult= document.querySelector('.save-status');
axios.get(url)
  .then((result) => {
    console.log(result.data)
    let list =result.data

    list.forEach((item)=>{
      let menuItem = document.createElement('option');
      menuItem.textContent =item.title;

      menu.appendChild(menuItem);
    })

  });



  menu.addEventListener('change', (e) => {
  selection = e.target.value;
  img.setAttribute('src', `./assets/images/${selection}.jpg`);
});


form.addEventListener('submit',(e)=>{
 e.preventDefault();
 const url2 = 'https://galvanize-student-apis.herokuapp.com/gpersonnel/users';
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    role: selection
  };

  if (!data.firstName || !data.lastName || !data.role) {
  return console.log('ERROR!!');}

  axios.post(url2, data)
  .then((res) => {
    console.log(res)
    const message = res.data.message;
    showResult.textContent = message;

  })
  .catch((err) => {
    console.log(err);
  });

})
