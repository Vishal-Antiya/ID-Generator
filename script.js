const button = document.querySelector('#button')
const input = document.querySelector('#input')

const img = document.querySelector('#img')
const name = document.querySelector('#name')
const followers = document.querySelector('#followers')
const email = document.querySelector('#email')
const repo = document.querySelector('#pub-repo')
const company = document.querySelector('#company')
const loc = document.querySelector('#loc')

const xhr = new XMLHttpRequest()


const generate = function(){
    let url = String("https://api.github.com/users/")
    const userID = String(input.value)
    img.style.border = ('white' )
    const requestUrl = url+userID
    console.log(requestUrl);

    xhr.open('GET', requestUrl)
    xhr.send()

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        
        if (xhr.readyState == 4){
            const data = JSON.parse(this.responseText);
            name.innerHTML = data.name

            img.setAttribute('src', data.avatar_url)
            
            repo.innerHTML = `Public Repositories: ${data.public_repos}`
            followers.innerHTML = `Followers: ${data.followers}`
            
            if(data.email == null){
                email.innerHTML = `Email: No address found.`
                } if(data.email) {email.innerHTML = `E-mail: ${data.email}`}

            if(data.location == null){
                loc.innerHTML = `Location: Not found.`
                } if(data.location) {loc.innerHTML = `Location: ${data.location}`}

            if(data.company == null){
                company.innerHTML = `Company: Not found.`
                } if(data.company) {company.innerHTML = `Company: ${data.company}`}

        }


    }


        // if (xhr.readyState == 4){
        //     const data = JSON.parse(this.responseText);
        //     console.log(data.name)
        //     if (data.name === undefined){
        //         followers.innerHTML = `Please enter a valid User ID`
        //     } else if(data.name){
        //         name.innerHTML = data.name
        //         img.setAttribute('src', data.avatar_url)
        //         followers.innerHTML = `Followers: ${data.followers}`
        //     }
        // }
    // }
}

button.addEventListener('click', generate)