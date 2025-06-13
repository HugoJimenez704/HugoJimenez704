# My Portfolio

This is a minimalist and sleek personal portfolio website designed to showcase projects. The website features simple animations and is easy to update with new projects.

## Project Structure

```
my-portfolio
├── public
│   └── index.html        # Main HTML document for the website
├── src
│   ├── styles.css       # Styles for the website
│   ├── app.js           # JavaScript for dynamic project loading
│   └── projects.json     # JSON file containing project data
├── README.md             # Documentation for the project
└── package.json          # npm configuration file
```

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the project:**
   You can use a local server to view the project. For example, you can use `live-server` or any other local server of your choice.

4. **Open your browser:**
   Navigate to `http://localhost:PORT` (replace PORT with the port number used by your local server).

## Adding New Projects

To add a new project, simply update the `src/projects.json` file. Each project should be an object with the following properties:

- `title`: The title of the project
- `description`: A brief description of the project
- `image`: URL of the project image
- `youtube`: (optional) URL of an embedded YouTube video

Example project object:
```json
{
  "title": "Project Title",
  "description": "Project description goes here.",
  "image": "https://example.com/image.jpg",
  "youtube": "https://www.youtube.com/watch?v=example"
}
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.