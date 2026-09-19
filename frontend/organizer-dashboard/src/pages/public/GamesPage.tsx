import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import { sportEvents, sports } from "../../data/gameData";

export default function GamesPage() {
  const navigate = useNavigate();

  const [selectedSport, setSelectedSport] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEvents = sportEvents.filter((event) => {
    const sportMatch =
      selectedSport === "All" || event.sport === selectedSport;

    const searchMatch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.sport.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    return sportMatch && searchMatch;
  });

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-page">
        <section className="gx-page-header">
          <p className="gx-eyebrow">GAMEX COMPETITIONS</p>

          <h1>Find your competition</h1>

          <p>
            Browse upcoming sports competitions and register for the
            events you want to compete in.
          </p>
        </section>

        <section className="gx-discovery-bar">
          <input
            type="search"
            placeholder="Search competitions, sports or locations..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        <section className="gx-sport-filters">
          {sports.map((sport) => (
            <button
              type="button"
              key={sport}
              className={
                selectedSport === sport
                  ? "gx-filter active"
                  : "gx-filter"
              }
              onClick={() => setSelectedSport(sport)}
            >
              {sport}
            </button>
          ))}
        </section>

        <section className="gx-results-heading">
          <div>
            <span>{filteredEvents.length} competitions</span>
          </div>
        </section>

        <section className="gx-event-grid gx-event-grid-large">
          {filteredEvents.map((event) => (
            <article className="gx-event-card" key={event.id}>
              <div className="gx-event-card-image">
                <span>{event.sport}</span>
              </div>

              <div className="gx-event-card-content">
                <div className="gx-event-meta">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <div className="gx-card-details">
                  <span>
                    <strong>{event.participants}</strong> registered
                  </span>

                  <span>
                    ₹<strong>{event.price}</strong>
                  </span>
                </div>

                <button
                  type="button"
                  className="gx-card-register"
                  onClick={() =>
                    navigate(`/events/${event.id}`)
                  }
                >
                  View & Register
                </button>
              </div>
            </article>
          ))}
        </section>

        {filteredEvents.length === 0 && (
          <div className="gx-empty-state">
            <h3>No competitions found</h3>
            <p>Try another sport or search term.</p>
          </div>
        )}
      </main>
    </div>
  );
}