# Personal Portfolio Website

A single-page portfolio site for a junior front-end developer. It shows who I
am, what I know, what I have built, my education/work history, and a contact
form.

## Tech stack

- React 18 + Vite (JavaScript)
- Bootstrap 5 + react-bootstrap
- bootstrap-icons
- Custom CSS in `src/styles/custom.css`

## How to run it

```bash
npm install     # only needed the first time
npm run dev     # start the dev server at http://localhost:5173
npm run lint    # check the code with ESLint
npm run build   # create a production build in dist/
npm run preview # serve the production build locally
```

## Which files to edit

All content lives in `src/data/`, so you never have to touch the components:

| File               | What it contains                                        |
| ------------------ | ------------------------------------------------------- |
| `src/data/profile.js`    | Name, title, tagline, bio, photo, location, email, social links |
| `src/data/skills.js`     | Skill categories and the badges inside each one         |
| `src/data/projects.js`   | Project cards: title, description, tech, links, details |
| `src/data/experience.js` | Timeline entries for education and work                 |

Every placeholder value is marked with a `// TODO: replace` comment.

Other things you may want to change:

- `index.html` - page title, meta description and favicon
- `src/styles/custom.css` - the accent colour (`--accent`) and any spacing
- `src/assets/` - the profile photo and project screenshot placeholders

## Deployment

### Vercel

1. Push the project to a GitHub repository.
2. Import it on [vercel.com](https://vercel.com) - Vercel detects Vite
   automatically.
3. Keep `base: '/'` in `vite.config.js` and deploy.

### GitHub Pages

1. In `vite.config.js`, set the `base` to your repository name:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/my-portfolio/',
   })
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Publish the `dist/` folder. Either:
   - connect the repo in GitHub Pages settings and point it to the `dist/`
     folder on the `main` branch, or
   - use the `gh-pages` branch approach, where only the contents of `dist/`
     are committed.

Remember: without the correct `base`, the CSS and JS files will 404 on
GitHub Pages because they are requested from the site root instead of the
repository subfolder.

## Notes

- The contact form has **no backend**. Search for `TODO` in
  `src/components/Contact.jsx` to see where Formspree or EmailJS should be
  connected.
- Dark / light mode is saved in `localStorage` under the key `theme`.
