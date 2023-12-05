export const useNavbarStore = defineStore('navbar', {
    state: ()=> ({
        links: [
            {
                name: "Home",
                href: "/",
            },
            {
                name: "Portafolio",
                href: "/portafolio",
            },
            {
                name: "Skills",
                href: "/skills",
            },
            {
                name: "About Me",
                href: "/about",
            },
            {
                name: "Curriculum",
                href: "/curriculum",
            },
        ]
    }),
    getters: {},
    actions: {}
})