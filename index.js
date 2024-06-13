const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const PORT = process.env.PORT || 3000;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nkmor Healthcare APIs",
            version: "1.0.0",
            description: "Swagger Documentation of Nkmore Healthcare APIs"
        },
        components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                in: 'header',
                name: 'Authorization',
                scheme: 'bearer',
              },
            },
        },
        security: [
            {
              bearerAuth: [],
            },
        ],
        servers: [
            {
                url: 'https://service.nkomor.com'
            }
        ]
    },
    apis: ["./swagger/*.js"]
}

const app = express();
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json());
app.listen(PORT, () => console.log(`The server is running on the PORT: ${PORT}`))