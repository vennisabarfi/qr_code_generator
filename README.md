# QR Code Generator API

Welcome to the QR Code Generator API! This repository contains code for a simple Express.js server that generates QR codes based on user input text.

## Getting Started

To get started, make sure you have Node.js and npm installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the repository directory.
3. Install dependencies by running `npm install`.
4. Start the server using `npm start` or `npm run dev` for development mode (uses nodemon).
5. Access the API via `http://localhost:3000/qrcode/:text`, where `:text` is the text you want to encode into a QR code.

## API Endpoints

- `GET /`: Returns a welcome message indicating that you've reached the QR Code Generator API.
- `GET /qrcode/:text`: Generates a QR code based on the provided text. The text should be URL encoded. The API returns a PNG image of the QR code.

**QR Code Screenshots**

![image](https://github.com/vennisabarfi/qr_code_generator/assets/122574563/3c771820-c06c-4846-b76f-f7bd3752f2f3)

## How to Generate QR Codes for Different Content

You can generate QR codes for various types of content including:

- Text: Simply provide the text you want to encode.
- Website Links: Prefix the link with `www.` and encode the entire URL.
- Email Addresses: Encode the email address as it is, with `@` symbol.

## Languages and Frameworks Used

- ![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
- ![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
- ![Axios](https://img.shields.io/badge/Axios-^1.6.8-blue)
- ![fs](https://img.shields.io/badge/fs-Node.js%20Module-yellow)
- ![path](https://img.shields.io/badge/path-Node.js%20Module-yellow)

## Dependencies

- **Express.js**: Web application framework for Node.js.
- **Axios**: Promise-based HTTP client for making requests to external APIs.
- **fs**: File system module for reading and writing files.
- **path**: Module for working with file paths.

## License

This project is licensed under the ISC License.

## Author

[vennisabarfi]
