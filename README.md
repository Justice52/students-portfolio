````markdown name=README.md
# Student Portfolio Template

This repository is a template for student portfolios using GitHub Pages. It's a static, client-side site: each student adds a JSON profile and an image, and the site renders an index and per-student pages.

How it works
- students/students.json is the registry: it contains an array of student entries (username, name, programme, image).
- Each student has their own profile JSON at students/{username}.json containing all fields (bio, experience, skills, projects, contact).
- The site is purely client-side: index.html and student.html fetch these JSON files and render pages in the browser.
- To deploy: push to a GitHub repository and enable GitHub Pages (branch: main, folder: / (root)).

Quick start for instructors
1. Create a new repository on GitHub (e.g. `student-portfolios`) and push these files to the `main` branch.
2. In the repository Settings → Pages, set Source to "main branch / root". Wait a few minutes; your site will be available at:
   - https://<your-github-username>.github.io/<repo-name>
3. Share the repo URL with students and ask them to add their profile.

How students add/edit their profile (recommended simple steps)
1. In the GitHub web UI, go to the `students` folder and click "Add file" → "Create new file".
2. File path should be: `students/{your-github-username}.json` (replace `{your-github-username}`).
3. Copy the example JSON below (or modify), fill in your name, programme, bio, experience, skills, and commit.
4. Upload your picture in the `images/` folder (click "Add file" → "Upload files") and name it `images/{your-github-username}.jpg` (or .png/.svg).
5. Edit `students/students.json` and add an entry for your username. Example entry:

{
  "username": "yourusername",
  "name": "Your Name",
  "programme": "Computer Science",
  "image": "images/yourusername.jpg"
}

6. Visit the index page of the site and click your card, or visit:
   `https://<your-github-username>.github.io/<repo-name>/student.html?user=yourusername`

Student profile JSON schema (example)
{
  "username": "justice52",
  "name": "First Last",
  "programme": "Computer Science",
  "year": "3rd Year",
  "bio": "A short bio...",
  "image": "images/justice52.jpg",
  "contact": {
    "email": "student@example.com",
    "github": "https://github.com/justice52",
    "linkedin": "https://linkedin.com/in/justice52"
  },
  "skills": ["JavaScript", "Python", "Databases"],
  "experience": [
    {
      "title": "Intern — ACME Corp",
      "period": "Jun 2024 - Aug 2024",
      "description": "Worked on a web app..."
    }
  ],
  "projects": [
    {
      "name": "Portfolio Site",
      "description": "This portfolio template",
      "link": "https://github.com/justice52/student-project"
    }
  ]
}

Notes and tips
- Ask students to keep filenames lowercase, with no spaces (e.g., `justice52.json`, `images/justice52.jpg`).
- For the students.json registry: each time a student adds themselves they should add a concise entry (username, name, programme, image).
- If you want to allow students to submit via pull requests, instruct them to fork and submit PRs to the main repo: easier to moderate.
- You can customize styling in `assets/css/styles.css` for school branding (colors, logo).

If you want, I can:
- Push these files into a new repository for you (tell me repo name and whether to create it under Justice52 or an org). I can provide exact gh/ git commands to do that locally.
- Or provide an alternative (Jekyll / Markdown-based) template.
