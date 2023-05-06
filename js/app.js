let profiles = [
   {
        username: 'eva',
        gender : 'Female',
        age: 24,
        birthday: '06 May 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        age: 24,
        birthday: '06 May 2000',
    },
    {
        username: 'Majd',
        gender : 'Female',
        age: 24,
        birthday: '06 May 1993',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        age: 24,
        birthday: '06 May 1999',
    }
]
let profilesContainer = document.getElementById('birthday__profile-container')
let currentDate= new Date();
let  month = currentDate.toLocaleString('default', { month: 'long' });
let day = currentDate.getDay();
console.log(day)
console.log(month);
console.log(currentDate);
let count=0;

for(let profile of profiles){
    let gender = profile.gender;
  
 let  birthday = profile.birthday.split(' ')
 const birthYear = new Date(profile.birthday).getFullYear();
 const currentYear = new Date().getFullYear();
 const age = currentYear - birthYear;
 console.log(age);

    if(birthday[1] === month && birthday[0] == day ){
       
       
        
        if(gender =='Female'){  
    //Way 1 : The easy way
   
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="assets/img/female.png" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${age}</p>
           
        </div>
    </div>`
        }
    else{
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src="assets/img/male.png" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p> ${age}</p>
        </div>
    </div>`
        }
        
count++;
}

}

profilesContainer.innerHTML += ` <id =count>
<p> ${count } birthdays today</p>

</div>`

    function Clear(){  
        profilesContainer.remove();  
      }  
       
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
