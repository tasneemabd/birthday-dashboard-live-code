let profiles = [
   {
        username: 'eva',
        gender : 'female',
        age: 24,
        birthday: '04 February 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        age: 24,
        birthday: '04 May 1990',
    },
    {
        username: 'Majd',
        gender : 'Female',
        age: 24,
        birthday: '04 May 1990',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        age: 24,
        birthday: '05 May 1990',
    }
]

let profilesContainer = document.getElementById('birthday__profile-container')
let currentDate= new Date();
let  month = currentDate.toLocaleString('default', { month: 'long' });
let day = currentDate.getDay();
console.log(day)
console.log(month);
console.log(currentDate);
for(let profile of profiles){
 let  birthday = profile.birthday.split(' ')
    if(birthday[1] === month && birthday[0] == day ){
    //Way 1 : The easy way
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="assets/img/female.png" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${profile.age}</p>
        </div>
    </div>`
    //Way 2 : The hard way
        //  let profileCard =  document.createElement('div')
        // profileCard.className='birthday__profile';
        // profilesContainer.appendChild(profileCard)
        // let profileImg = document.createElement('img')
        // profileImg.setAttribute('src','assets/img/female.png')
        // profileCard.appendChild(profileImg);
        // let birthdayInfo = document.createElement('div')
        // birthdayInfo.className = 'birthday__info'
        // profileCard.appendChild(birthdayInfo)
        // let username = document.createElement('p')    
        //username.appendChild(document.createTextNode(profile.username))
        //birthdayInfo.appendChild(username)
        //let age = document.createElement('p')    
        //age.appendChild(document.createTextNode(profile.age))
        //birthdayInfo.appendChild(age)
        //console.log(profile)
    }
}
   