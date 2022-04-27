
function handler(req, res)
{
    require('dotenv').config();

    const contentful = require("contentful");

    var client = contentful.createClient({
        space: String(process.env.CONTENTFUL_SPACE),
        accessToken: String(process.env.CONTENTFUL_TOKEN)
    });

    client.getEntry('35bE2VH3YsyY4nEJs0QEjx').then(function (entry) {
        res.status(200).json({
            msj: entry.fields
        })
    });
}

export default handler;