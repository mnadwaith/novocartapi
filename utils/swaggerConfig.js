
const swaggerConfig = {
    openapi: '3.0.0',
    info: {
        title: 'NovaCart API',
        version: '1.0.0',
        description: 'API documentation for NovaCart eCommerce system',
    },
    servers: [
        {
            url: 'http://localhost:9110',
            description: 'Local server',
        }, {
            url: 'https://novacartapi.onrender.com/',
            description: 'Live Server'
        }
    ],
    paths: {
        "/": {
            "summary": "Testing Default Route",
            "get": {
                "description": "Testing Default Route",
                "tags": [
                    "PUBLIC ROUTE"
                ],
                "responses": {
                    "200": {
                        "description": "Health Check"
                    }
                }
            }
        },
        "/catagories": {
            "summary": "Testing catagories Route",
            "get": {
                "description": "Testing catagories Route",
                "tags": [
                    "PUBLIC ROUTE"
                ],
                "responses": {
                    "200": {
                        "description": "Categories Route"
                    }
                }
            }
        },
        "/banner": {
            "summary": "Testing Banner Route",
            "get": {
                "description": "Testing Banner Route",
                "tags": [
                    "PUBLIC ROUTE"
                ],
                "responses": {
                    "200": {
                        "description": "Banner Route"
                    }
                }
            }
        },
        "/items": {
            "summary": "Testing Items Route",
            "get": {
                "description": "Testing Items Route",
                "tags": [
                    "PUBLIC ROUTE"
                ],
                "parameters": [
                    {
                        "in": "query",
                        "name": "lcost",
                        "schema": {
                            "type": "integer"
                        },
                        "required": false,
                        "description": "Lowest cost for filter"
                    },
                    {
                        "in": "query",
                        "name": "hcost",
                        "schema": {
                            "type": "integer"
                        },
                        "required": false,
                        "description": "Highest cost for filter"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Items details Route"
                    }
                }
            }
        }
    }
};

export default swaggerConfig;
