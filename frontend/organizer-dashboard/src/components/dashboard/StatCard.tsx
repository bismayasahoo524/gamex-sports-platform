interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-title">{title}</span>

        <span className="stat-card-icon">
          {icon}
        </span>
      </div>

      <div className="stat-card-value">
        {value}
      </div>

      <div className="stat-card-subtitle">
        {subtitle}
      </div>
    </div>
  );
}