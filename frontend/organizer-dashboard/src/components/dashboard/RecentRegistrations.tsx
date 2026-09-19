const registrations = [
  {
    id: "GX-10482",
    athlete: "Rahul Kumar",
    event: "100m Sprint",
    status: "Approved",
    time: "2 min ago",
  },
  {
    id: "GX-10481",
    athlete: "Ankit Singh",
    event: "Long Jump",
    status: "Pending",
    time: "5 min ago",
  },
  {
    id: "GX-10480",
    athlete: "Priya Das",
    event: "200m Sprint",
    status: "Approved",
    time: "8 min ago",
  },
  {
    id: "GX-10479",
    athlete: "Arjun Sharma",
    event: "400m Sprint",
    status: "Rejected",
    time: "12 min ago",
  },
];

export default function RecentRegistrations() {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div>
          <h2>Recent Registrations</h2>
          <p>Latest athlete registrations</p>
        </div>

        <button className="view-all-button">View all →</button>
      </div>

      <div className="registration-table-wrapper">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Registration ID</th>
              <th>Athlete</th>
              <th>Event</th>
              <th>Status</th>
              <th>Registered</th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((registration) => (
              <tr key={registration.id}>
                <td>{registration.id}</td>
                <td>{registration.athlete}</td>
                <td>{registration.event}</td>
                <td>
                  <span
                    className={`status-badge ${registration.status.toLowerCase()}`}
                  >
                    {registration.status}
                  </span>
                </td>
                <td>{registration.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}