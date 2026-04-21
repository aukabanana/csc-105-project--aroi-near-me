import { type MenuCardProps } from '../../components/cards/MenuCards';
import sushi from '../../assets/img/mockCardImage/sushi.jpg';
import dishSushi from '../../assets/img/mockCardImage/dish-sushi.jpg';
import omakaseShin from '../../assets/img/RestaurantImg/OmakaseShin.webp'

export type restaurantDetails = {
    id : string
    name : string
    banner : string
    address : string
    menu : MenuCardProps[]
}
export const restaurantData : restaurantDetails[] = [
    {
        id: "omakase-shin",
        name : "Omakase Shin",
        banner : omakaseShin,
        address : `88/1 Soi Sukhumvit 49, Khlong Tan Nuea, Watthana, Bangkok 10110Landmark A minimalist light-wood house with dark wooden slat doors, 
        located diagonally opposite Samitivej Hospital.`,
        menu : [
        {
            image: sushi,
            name: "Salmon Nigiri",
            restName: "Sakura Japanese Kitchen",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            price: 129,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Nigiri",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: sushi,
            name: "Tonkotsu Ramen",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 139,
            originalPrice: 0,
            discount: 0,
            type: "Ramen",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Takoyaki",
            restName: "Sakura",
            desc: "lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice:0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: false,
            admin: true
        },
        {
            image: sushi,
            name: "Salmon Nigiri",
            restName: "Sakura Japanese Kitchen",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            price: 129,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Nigiri",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: sushi,
            name: "Tonkotsu Ramen",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 139,
            originalPrice: 0,
            discount: 0,
            type: "Ramen",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Takoyaki",
            restName: "Sakura",
            desc: "lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice:0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: false,
            admin: true
        },
        {
            image: sushi,
            name: "Salmon Nigiri",
            restName: "Sakura Japanese Kitchen",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
            price: 129,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Nigiri",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice: 0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: sushi,
            name: "Tonkotsu Ramen",
            restName: "Sakura Kitchen",
            desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            price: 139,
            originalPrice: 0,
            discount: 0,
            type: "Ramen",
            timer: "",
            status: true,
            admin: true
        },
        {
            image: dishSushi,
            name: "Takoyaki",
            restName: "Sakura",
            desc: "lorem lorem lorem lorem lorem lorem lorem",
            price: 220,
            originalPrice:0,
            discount: 0,
            type: "Sushi",
            timer: "",
            status: false,
            admin: true
        }
        ]
    },
]
