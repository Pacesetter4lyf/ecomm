let date = new Date().toLocaleDateString().replaceAll("/", "-").split("-").reverse()
let day = date[1]
date[1] = date[2]
date[2] = day
if (date[1].length === 1) {
    date[1] = `0${date[1]}`
}
date = date.join("-")
console.log("date", date)


const data = [
    {
        "id": "0589300",
        "picture": "/public/images/profile-1.jpg",
        "from_name": "Darasimi",
        "from_email": "dara@gmail.com",
        "from_address": "ITSkill center, Lagos",
        "from_phone": "09048983948",
        
        "bill_name": "Emmanuel",
        "bill_email": "emmanuel@gmail.com",
        "bill_phone": "0818038949",
        "bill_address": "Lagos, Nigeria",
        "invoice_label": "Just Simple",
        "currency": "USD - US Dollar",
        "currency_img": "assets/img/flag-us.svg",
        "invoice_no": "023949",
        "date": date,
        "due_date": date,
        "items": [{
            "description": "BIcycle",
            "details": "for transport. sports",
            "price": 1000,
            "qty": 1,
            "amount": 1000,
            "tax": true
        },
        {
            "description": "Printer",
            "details": "Inkjet style ",
            "price": 300,
            "qty": 2,
            "amount": 600,
            "tax": false
        }],
        "total": "1091.00",
        "tax": {
            "type": "None",
            "rate": 10
        },
        "discount": {
            "type": "None",
            "rate": 10
        },
        sub_total: 2000,
        total_tax: 34,
        total_discount: 4,
        "bank_name": "Megs",
        "acct_no": "0903908098",
        "acct_name": "Emmnlex",
        "swift": "09494",
        "country": "Nigeria",
        "status": "paid",
        "notes": "Thanks for your patronage"

    },
    {
        "id": "7598930",
        "picture": "/public/images/profile-2.jpg",
        "from_name": "Cory",
        "from_email": "cory@gmail.com",
        "from_address": "Mushin, Lagos",
        "from_phone": "08158983948",

        "bill_name": "Trevor",
        "bill_email": "trevor@gmail.com",
        "bill_phone": "0818038949",
        "bill_address": "Apapa, Nigeria",
        "invoice_label": "Next demo",
        "currency": "USD - US Dollar",
        "currency_img": "assets/img/flag-us.svg",
        "invoice_no": "023949",
        "date": date,
        "due_date": date,
        "items": [{
            "description": "Bicycle",
            "details": "for transport. sports",
            "price": 1000,
            "qty": 1,
            "amount": 1000,
            "tax": true
        },
        {
            "description": "Printer",
            "details": "Inkjet style ",
            "price": 300,
            "qty": 2,
            "amount": 600,
            "tax": false
        }],
        "total": "6904.03",
        "tax": {
            "type": "None",
            "rate": 10
        },
        "discount": {
            "type": "None",
            "rate": 10
        },
        sub_total: 7000,
        total_tax: 24,
        total_discount: 9,
        "bank_name": "Megs",
        "acct_no": "0903908098",
        "acct_name": "Emmnlex",
        "swift": "09494",
        "country": "Nigeria",
        "status": "paid",
        "notes": "Thanks for your patronage"

    }

]

export default data