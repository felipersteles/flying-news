
<div align="center"><img src="https://www.infoescola.com/wp-content/uploads/2022/08/anunciacao-da-vinci-scaled.jpg" width=100% /></div>

# Flying news
This repository presents a web application built with Next.js and React, enabling users to explore both news articles and best-selling books from the New York Times.

## Features:

- News Articles:
> * Fetch and display articles from various sections of the New York Times.
> * Filter articles by specific sections or keywords (optional, depending on implementation).
- Best-selling Books:
> * Retrieve and showcase the latest bestsellers from diverse categories (e.g., fiction, non-fiction).
> * Display book details with title, author, and summary information.
## Technology Stack:
- Next.js: Provides server-side rendering (SSR) and static site generation (SSG) for optimized performance and SEO.
- React: Enables the creation of dynamic and interactive user interfaces.
- New York Times API: Facilitates retrieving both news and book data efficiently.

## Getting Started:

1. Clone the repository:
```bash
$ git clone https://github.com/your-username/new-york-times-explorer.git

```
2. Install dependencies:
```bash
$ yarn

```
3. Obtain API keys:
> Visit the New York Times Developer https://developer.nytimes.com/.
> Create an account and register your application for both the News and Books API sections.

4. Configure API keys:
Create a .env.local file at the project root.
Add the following lines to the file, replacing YOUR_API_KEY with your respective keys:

`REACT_APP_NYT_NEWS_API_KEY=YOUR_API_KEY`<br/>
`REACT_APP_NYT_BOOKS_API_KEY=YOUR_API_KEY`

6. Start the development server:
```bash
$ yarn dev

```
## Contributing:

We welcome contributions to this project! Please refer to the CONTRIBUTING.md file for guidelines.

## License:


# Additional Notes:

The .env.local file might require adjustments for different environments (e.g., development or production).
This is a starting point and can be further enhanced with functionalities like article search, detailed book pages, and user interaction features.
We encourage you to explore the world of news and bestsellers with this application!
