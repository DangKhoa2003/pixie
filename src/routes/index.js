import Home from '~/pages/Home';
import Collection from '~/pages/Collection';
import Artist from '~/pages/Artist';
import Library from '~/pages/Library';
import Contact from '~/pages/Contact';
export const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/collection',
        component: Collection
    },
    {
        path: '/artist',
        component: Artist
    },
    {
        path: '/library',
        component: Library
    },
    {
        path: '/contact',
        component: Contact
    },
]

export const privateRoutes = [

]