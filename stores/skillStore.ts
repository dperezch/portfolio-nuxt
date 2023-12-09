export const useSkillStore = defineStore('SkillStore',{
    state: ()=> ({
        front: [
            {name: 'HTML', font:"font-['Gabarito']"},
            {name: 'JavaScript', font:"font-['Afacad']"},
            {name: 'TypeScript', font:"font-['Merriweather']"},
            {name: 'ReactJS', font:"font-['Anton']"},
            {name: 'NextJS', font:"font-['Josefin Sans']"},
            {name: 'Vue3', font:"font-['Oxygen']"},
            {name: 'Nuxt3', font:"font-['Dhurjati']"},
            {name: 'Hybrid Apps', font:"font-['Square Peg']"},
            {name: 'CSS', font:"font-['Gabarito']"},
            {name: 'Tailwind', font:"font-['Agbalumo']"},
            {name: 'Bootstrap', font:"font-['Belanosima']"},
        ],
        back: [
            {name: 'ExpressJS'},
            {name: 'NestJS'},
            {name: 'TypeORM'},
            {name: 'NextAuth'},
            {name: 'JSON Web token'},
            {name: 'DB SQL'},
            {name: 'DB NoSQL'},
        ],
        cloud: [
            {name: 'AWS'},
            {name: 'MongoDB'},
            {name: 'Heroku'},
        ],
        devs: [
            {name: 'Github'},
            {name: 'VSCode'},
            {name: 'Postman'},
            {name: 'Android Studio'},
        ]
    }),
    getters: {},
    actions: {}
})