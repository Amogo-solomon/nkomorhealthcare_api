const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs'); // Import the file system module

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
    apis: ["./swagger/api-docs.js"]
}

const app = express();
const specs = swaggerJsDoc(options);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Nkmor Healthcare APIs');
});

// Define a route for serving the api-docs.js file
app.get('/api-docs.js', (req, res) => {
    // Read the contents of api-docs.js file
    fs.readFile('./swagger/api-docs.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading api-docs.js file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send the contents of the file as the response
        res.type('application/javascript').send(data);
    });
});

// Serve Swagger UI at /api-docs endpoint
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json());
app.listen(PORT, () => console.log(`The server is running on the PORT: ${PORT}`))
