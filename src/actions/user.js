import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from "./types";

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: "JavaScript in the Browser",
                    description: "Reducers are just pure functions that take the previous state and an action, and return the next state.",
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: "Graph Database",
                    description: "Reducers are just pure functions that take the previous state and an action, and return the next state.",
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: "A0048248343",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: "1234 West State Street"
                }
            },
            {
                _id: 1,
                total: 9.00,
                orderNumber: "A1248698343",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "John Hancock",
                    shippingAddress: "62 North Cedar Street"
                }
            },
            {
                _id: 2,
                total: 205.90,
                orderNumber: "A1143948563",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Lars Ulrich",
                    shippingAddress: "5050 Metallica Rd"
                }
            },
            {
                _id: 3,
                total: 69.69,
                orderNumber: "A0176998369",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Ronald Jeremy",
                    shippingAddress: "65 Dallas Ave"
                }
            },
            {
                _id: 4,
                total: 17.80,
                orderNumber: "A0168388383",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "James Hetfield",
                    shippingAddress: "1981 Metallica Ave"
                }
            },
            {
                _id: 5,
                total: 23.23,
                orderNumber: "A10007100863",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Michael Jordan",
                    shippingAddress: "23 Air Street"
                }
            },
            {
                _id: 6,
                total: 7.07,
                orderNumber: "A0248248248",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Steve Miller",
                    shippingAddress: "707 Jetairliner Street"
                }
            },
            {
                _id: 7,
                total: 19.85,
                orderNumber: "A0919851985",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Stacey Mom",
                    shippingAddress: "1985 Going Street"
                }
            },
        ]
    })
}