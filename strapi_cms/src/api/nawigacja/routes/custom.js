module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/nawigacjas/:slug',
            handler: 'nawigacja.findOne',
            config:{
                auth: false,
            }
        }
    ]
}
