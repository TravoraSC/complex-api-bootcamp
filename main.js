// let url = 'https://api.data.gov/ed/collegescorecard/v1/schools?per_page=1&school.name=New%20York&api_key=1oObTHNsUMaRhWypmuFYheAQRXtDDZ3AtAduNkSd'

// fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {

//     let url = 'https://api.teleport.org/api/urban_areas/slug:miami/scores/'

//     fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {

//         document.querySelector('.name').innerText = data.results[0].latest.school.name
//         document.querySelector('.city').innerText = data.results[0].latest.school.city
//         document.querySelector('.state').innerText = data.results[0].latest.school.state
//         document.querySelector('zip').innerText = data.results[0].latest.school.zip
//         document.querySelector('.schoolURL').innerText = data.results[0].latest.school.school_url

//       })
//       .catch(err => {
//         console.log(`error ${err}`)
//       });


//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });



document.querySelector('button').addEventListener('click', collegeNameAndLocation)
let collegeName = document.getElementById('input')

function collegeNameAndLocation() {
  collegeName = collegeName.value
  let collegeURL = `https://api.data.gov/ed/collegescorecard/v1/schools?per_page=1&school.name=${collegeName}&api_key=1oObTHNsUMaRhWypmuFYheAQRXtDDZ3AtAduNkSd`

  document.querySelector('.schoolInfo').classList.add("backgroundColor");

  fetch(collegeURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0].latest.school.name)
      document.querySelector('.name').innerText = data.results[0].latest.school.name
      document.querySelector('.city').innerText = data.results[0].latest.school.city
      document.querySelector('.state').innerText = data.results[0].latest.school.state
      document.querySelector('.schoolURL').innerText = data.results[0].latest.school.school_url

      let location = data.results[0].latest.school.city
      const url = `https://api.teleport.org/api/urban_areas/slug:${location.toLowerCase()}/scores/`

      getScore(url)
    })
}

function getScore(url) {
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
      const scoreList = document.querySelector('.scoreList');
      for(i=0 ; i < data.categories.length ; i++) {
        let li = document.createElement('li');
        li.innerText= data.categories[i].name + ':'
        li.innerText +=  ' ' +  Math.round(data.categories[i].score_out_of_10) + ' out of 10'
        scoreList.appendChild(li)
        li.style.listStyle = 'none'
        // li.style.display = 'inline-block'
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
    // })
    .catch(err => {
      console.log(`error ${err}`)
    });
  // })
}


// let collegeName = document.querySelector('input').value

// let lifeQualURL = `https://api.teleport.org/api/urban_areas/slug:${location}/scores/`

// fetch(lifeQualURL)
//   .then(res => res.json()) 
//   .then(data => {

//     let collegeURL = `https://api.data.gov/ed/collegescorecard/v1/schools?per_page=1&school.name=${collegeName}&api_key=1oObTHNsUMaRhWypmuFYheAQRXtDDZ3AtAduNkSd`

//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });



//   fetch(collegeURL)
//     .then(res => res.json())
//     .then(data => {

//       document.querySelector('.name').innerText = data.results[0].latest.school.name
//       document.querySelector('.city').innerText = data.results[0].latest.school.city
//       document.querySelector('.state').innerText = data.results[0].latest.school.state
//       document.querySelector('zip').innerText = data.results[0].latest.school.zip
//       document.querySelector('.schoolURL').innerText = data.results[0].latest.school.school_url


//       let location = data.results[0].latest.school.city
//     })

//     .catch(err => {
//       console.log(`error ${err}`)
//     });