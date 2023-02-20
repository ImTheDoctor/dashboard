const accountSettings = [
    {
        isChecked: false,
        message: 'Email me when someone follows me'
    }, {
        isChecked: true,
        message: 'Email me when someone answers on my post'
    },
    {
        isChecked: false,
        message: 'Email me when someone mentions me'
    },
]

const applicationSettings = [
    {
        isChecked: false,
        message: 'New launches and projects'
    }, {
        isChecked: true,
        message: 'Monthly product updates'
    }, {
        isChecked: false,
        message: 'Subscribe to newsletter'
    }
]

const profileInfo = {
    profPic: 'https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg',
    summary: 'Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    fullname: 'Alec M. Thompson',
    mobile: 441231234123,
    email: 'alecthompson@gmail.com',
    location: 'usa',
    social: [{
        url: 'https://www.facebook.com/',
        icon: '/src/assets/facebook-svgrepo-com.svg'
    }, {
        url: 'https://www.twitter.com/',
        icon: '/src/assets/twitter-svgrepo-com.svg'
    }, {
        url: 'https://www.instagram.com/',
        icon: '/src/assets/instagram-svgrepo-com.svg'
    }]
}

const conversation = [{
    imgUrl: 'https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg',
    name: 'Sophie B.',
    message: 'hi! I need more info'
}, {
    imgUrl: 'https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg',
    name: 'Anne Marie',
    message: 'Awesome work, can you ...'
}, {
    imgUrl: 'https://demos.creative-tim.com/material-dashboard-react/static/media/ivana-square.f7bc23b269d1d2509c82.jpg',
    name: 'Ivanna',
    message: 'About files i can ..'
}, {
    imgUrl: 'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
    name: 'Peterson',
    message: 'Have a great afternoon'
}, {
    imgUrl: 'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
    name: 'Nick Daniel',
    message: 'Hi! I need more information'
}]

export { accountSettings, applicationSettings, profileInfo, conversation }