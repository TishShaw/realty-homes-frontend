
# Realty Homes - Real Estate App

Welcome to Realty Homes, a mobile-responsive real estate web application built with React, Redux, and Tailwind CSS. This application allows users to browse real estate listings and stay updated with the latest real estate news.


## Table of Contents

- Project Overview
- User Stories
- Minimum Viable Product (MVP)
- Getting Started
- Installation
- Configuration
- Usage
- Deployment
- Contributing

## Project Overview

**Realty Homes** is a real estate web application designed to provide users with a seamless experience of exploring available properties and staying informed about the latest real estate news. The project aims to integrate a Django-based API for property listings and utilizes a third-party API for real estate news.

### Wireframes/ Mockups
<div><img width="1163" alt="Screenshot 2023-12-15 at 1 36 14 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/56418f13-deda-4045-b8cb-ba456f17faf5">
<img width="428" alt="Screenshot 2023-12-15 at 3 39 35 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/02aeed9f-1bb8-408c-8ca2-3f29adf55dbd"><div/>


### App Screenshots
<img width="1332" alt="Screenshot 2023-12-30 at 6 40 18 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/0b04a754-1ea6-4302-bc9c-8ab810fce3df">
<img width="1326" alt="Screenshot 2023-12-30 at 6 41 51 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/85818a3b-4d35-41c2-b1f6-1c199bad810d">
<img width="1322" alt="Screenshot 2023-12-30 at 6 42 04 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/ba70b994-427a-4ad0-a490-b3afea939b19">
<img width="1329" alt="Screenshot 2023-12-30 at 6 41 06 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/63d93d40-8c65-4bd3-88c8-876926394ae1">
<img width="1327" alt="Screenshot 2023-12-30 at 6 41 22 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/fb13da5e-4621-40dd-8395-e41e2b46a9f1">
<img width="1325" alt="Screenshot 2023-12-30 at 6 41 39 PM" src="https://github.com/TishShaw/realty-homes-frontend/assets/92543814/bb241d88-00f1-47af-8792-1404bbe50801">


## User Stories

As a user of Realty Homes, I can:

- View a list of available real estate properties.
- Click on a property to view its details, including price, location, images, and description.
- Search for properties based on location, price range, and property type.
- Access a blog section with the latest real estate news.
- Read detailed news articles with images and descriptions.
- Click on a news article to view its full content.
- Navigate easily using a responsive navigation bar and footer.
## Minimum Viable Product (MVP)

To complete the project within a week, we will focus on the following MVP features:

1. Property Listings:

- Display a list of real estate properties fetched from a Django REST API.
- Implement a basic card layout to show property details (e.g., price, location).
- Enable clicking on a property card to view more details.

2. Property Details:

- Show detailed information about a property, including price, location, images, and description.
- Provide a back button to return to the listings.
3. Search Functionality:

- Create a search bar to filter properties based on location, price range, and property type.
4.Real Estate News:

- Fetch and display real estate news articles from a third-party API.
- Show article previews with images and descriptions.
- Allow clicking on an article preview to view the full article.
5. Navigation:

- Implement a responsive navigation bar for easy site navigation.
- Include a footer with essential links and information.
6. Styling and Responsiveness:

- Apply a visually appealing design using Tailwind CSS.
- Ensure mobile responsiveness for a seamless experience on different devices.

## Getting Started
Follow these instructions to get a local copy of the project up and running on your machine.
## Installation

Install my-project with npm

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/tishshaw/realty-homes.git

```
2. Navigate to the project:
```bash
cd realty-homes-frontend
```
3. Install project dependencies:
```bash 
npm install
```
## Configuration

Before running the application, you may need to configure environment variables or API endpoints depending on your specific setup for the Django API and the third-party real estate news API.


## Usage
Start the devleopment server
```bash
npm start

```
Visit http://localhost:3000 in your web browser to access the application.


## Deployment

To deploy the Realty Homes web app to a production environment, you can follow these general steps:

1. Build the production-ready version of the app:
```bash
npm run build
```
2. Deploy the build artifacts to a web hosting platform of your choice (e.g., Netlify, Vercel, AWS Amplify).

3. Configure any necessary environment variables for the production environment.
## Contributing

Contributions are always welcome!


