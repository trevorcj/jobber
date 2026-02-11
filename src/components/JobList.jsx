import { MantaClient } from "mantahq-sdk";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MANTAHQ_API_KEY;
const manta = new MantaClient({ sdkKey: API_KEY });

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h2>Available Jobs</h2>
        <p className="jobs-sub">Explore open roles from our partners</p>
      </div>
      {loading && <p className="jobs-loading">Loading...</p>}
      {error && <p className="jobs-error">Error: {error.message}</p>}
      {!loading && !error && jobs.length > 0 && (
        <ul className="job-list">
          {jobs.map((job) => (
            <li className="job-item" key={job.id}>
              <div className="job-main">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
              </div>
              <div className="job-meta">
                <p className="job-location">{job.location}</p>
                <button className="apply-btn">View</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && jobs.length === 0 && (
        <p className="jobs-empty">No jobs found.</p>
      )}
      <br />
      <div className="page">
        <p>Page 1 /</p>
        <div>
          <button>Previous page</button>
          <button>Next page</button>
        </div>
      </div>
    </div>
  );
}

export default JobList;
