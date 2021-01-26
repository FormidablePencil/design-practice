import template from './template'

const data = {
  profileImage: "https://i.ibb.co/5Kn9mXG/vue.png",
  greeting: 'Hello',
  profileName: 'Alex Peterson',
}

function Profile() {

  return template(data)
}

export default Profile
