import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [venue, setVenue] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      eventName,
      sport,
      description,
      startDate,
      endDate,
      venue,
      capacity,
    });

    navigate("/events");
  };

  return (
    <div className="create-event-page">
      <div className="create-event-header">
        <div>
          <p className="dashboard-eyebrow">GAMEX ORGANIZER</p>

          <h1>Create Event</h1>

          <p className="dashboard-description">
            Create a new sports competition and configure its registration
            details.
          </p>
        </div>

        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate("/events")}
        >
          ← Back to Events
        </button>
      </div>

      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-section-header">
            <h2>Event Information</h2>

            <p>Basic information about your competition.</p>
          </div>

          <div className="form-grid">
            <div className="form-group form-group-full">
              <label htmlFor="eventName">Event Name</label>

              <input
                id="eventName"
                type="text"
                placeholder="e.g. National Athletics Championship"
                value={eventName}
                onChange={(event) => setEventName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sport">Sport</label>

              <select
                id="sport"
                value={sport}
                onChange={(event) => setSport(event.target.value)}
                required
              >
                <option value="">Select sport</option>
                <option value="Athletics">Athletics</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Cricket">Cricket</option>
                <option value="Swimming">Swimming</option>
                <option value="Tennis">Tennis</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="venue">Venue</label>

              <input
                id="venue"
                type="text"
                placeholder="Select competition venue"
                value={venue}
                onChange={(event) => setVenue(event.target.value)}
                required
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                rows={4}
                placeholder="Describe the competition..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-header">
            <h2>Competition Schedule</h2>

            <p>Define when the event will take place.</p>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>

              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>

              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="capacity">Participant Capacity</label>

              <input
                id="capacity"
                type="number"
                min="1"
                placeholder="e.g. 500"
                value={capacity}
                onChange={(event) => setCapacity(event.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate("/events")}
          >
            Cancel
          </button>

          <button type="submit" className="primary-button">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}