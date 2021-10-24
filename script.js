const linksSocial = {
  github: 'cadmojr201',
  youtube: 'cadmojr201',
  facebook: 'Oliveira.junior87',
  instagram: 'cadmojr201',
  twitter: 'cadmojr201'
}

function showMeSomething() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocial[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocial.github}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      userPhoto.src = data.avatar_url
      userName.textContent = data.name
      linkGit.href = data.html_url
      gitName.textContent = data.login
      userBio.textContent = data.bio
    })
}

showMeSomething()
getGitHubProfileInfos()
