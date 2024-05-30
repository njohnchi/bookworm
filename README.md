# Bookworm - AI-Powered Book Recommendation Platform

## Overview
Bookworm is an AI-powered platform that provides personalized book recommendations based on user preferences. This repository contains both the frontend and backend code.

## Project Setup

### Installation

Clone the repository and install the dependencies for both the client and server:

```bash
git clone https://github.com/yourusername/bookworm-client.git

cd client
npm install

cd ..
cd server
npm install

```

## Running the App

### Development

To run the app in development mode, start the client and server separately:

```bash
# client
cd client
npm run dev

# server
cd ..
cd server
npm run start:dev
```

### Production

To run the app in production mode, build the client and server separately:

```bash 
# client
cd client
npm run build

# server
cd ..
cd server
npm run start:prod
```

## Database Setup

### MongoDB

The server uses MongoDB as the database. Set up MongoDB, create a database called `Bookworm`.

## Environment Variables

Create a `.env` file in the server directory and add the following environment variables:

```bash
OPENAI_API_KEY=your_openai_api_key
OPENAI_API_URL=https://api.discord.rocks/v1/chat/completions

```

## Contributing

Contributions are welcome! Please refer to the [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
