const services = [
  {
    name: "API Gateway",
    status: "Operational",
  },
  {
    name: "Registration Service",
    status: "Operational",
  },
  {
    name: "Event Service",
    status: "Operational",
  },
  {
    name: "Match Service",
    status: "Operational",
  },
  {
    name: "Kafka",
    status: "Connected",
  },
];

export default function SystemStatus() {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <div>
          <h2>Live System Status</h2>
          <p>GameX platform services</p>
        </div>

        <span className="live-indicator">
          <span className="live-dot"></span>
          LIVE
        </span>
      </div>

      <div className="system-status-list">
        {services.map((service) => (
          <div className="system-status-item" key={service.name}>
            <div className="service-name">
              <span className="service-dot"></span>
              {service.name}
            </div>

            <span className="service-status">
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}