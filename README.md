# Jobber

Jobber is a React job listing app that fetches live job records from a database on [MantaHQ](https://mantahq.com) and displays them in paginated cards.

## Tech Stack

- React 19
- MantaHQ SDK (`mantahq-sdk`)
- CSS

## Current Features

- Fetches jobs from MantaHQ (`jobs` table)
- Displays job cards with:
  - Title
  - Company
  - Location
- Loading, error, and empty states
- Pagination controls (previous/next page)

## Project Structure

```text
src/
  App.jsx
  index.css
  components/
    JobList.jsx
jobs_seed.csv     <- data source
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_MANTAHQ_API_KEY=your_api_key_here
```

Don't have an API key? [Get your API key](https://docs.mantahq.com/quickstart)

### 3. Run the app

```bash
npm run dev
```

The app will run locally (typically at `http://localhost:5173`).

## Future Features

1. Working on the interface design
2. Working on the job cards
3. Adding search and filtering
4. Adding an admin dashboard

## Notes

- The app expects a `jobs` table in MantaHQ.
- Required fields currently used: `title`, `company`, `location`.
