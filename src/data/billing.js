const invoices = [{
    budget: 180,
    date: new Date('March, 01, 2020').toUTCString(),
    code: 'MS-415646',
}, {
    budget: 250,
    date: new Date('February, 10, 2021').toUTCString(),
    code: 'RV-126749',
}, {
    budget: 120,
    date: new Date('April, 05, 2020').toUTCString(),
    code: 'QW-103578',
}, {
    budget: 180,
    date: new Date('June, 25, 2019').toUTCString(),
    code: 'MS-518879',
}, {
    budget: 300,
    date: new Date('March, 01, 2019').toUTCString(),
    code: 'AR-954412',
},]

const billingInfo = [{
    name: 'Oliver Liam',
    companyName: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vat: 'FRB1235476'
}, {
    name: 'Lucas Harper',
    companyName: 'Stone Tech Zone',
    email: 'lucas@stone-tech.com',
    vat: 'FRB1235476'
}, {
    name: 'Ethan James',
    companyName: 'Fiber Notion',
    email: 'ethan@fiber.com',
    vat: 'FRB1235476'
},]

const transaction = [{
    name : 'netflix',
    date : new Date('March, 01, 2019'),
    amount : 2500,
},{
    name : 'Apple',
    date : new Date('March, 01, 2019'),
    amount : 2000,
},{
    name : 'Stripe',
    date : new Date('March, 01, 2019'),
    amount : 750,
},{
    name : 'HubSpot',
    date : new Date('March, 01, 2019'),
    amount : 1000,
},{
    name : 'Creative Tim',
    date : new Date('March, 01, 2019'),
    amount : 1000,
},{
    name : 'Webflow',
    date : new Date('March, 01, 2019'),
    amount : 'Pending',
}]

export { invoices, billingInfo }