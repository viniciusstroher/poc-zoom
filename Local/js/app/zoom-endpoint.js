// ngrok http -subdomain=inconshreveable 80
module.exports.ngRok = async () => {
    const ngrok = require('ngrok');
    //verificar novo token em ngrok
    const authtoken = '1fsdH82sJJCiCSqNpVWWrpmEOuc_3xHLESpQEUPtPipj2YYyh';

    console.log('Initializing NgRok.');
    await ngrok.authtoken(authtoken);
    return await ngrok.connect(3000)
}
