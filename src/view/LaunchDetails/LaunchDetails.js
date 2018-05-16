import React, { Component } from "react";
import PropTypes from "prop-types";
import LaunchCountdown from "../../components/LaunchCountdown/LaunchCountdown";
import Header from "../../components/Header/Header";
import Data from "../../components/Data/Data";
import Footer from "../../components/Footer/Footer";
import { formatDate } from "../../utils/formatDate";

const LaunchDetails = ({ launch, rocket, launchSite }) => {
  const rocketData = [
    { label: "Name", value: rocket.name },
    { label: "Company", value: rocket.company },
    {
      label: "Height",
      value: `${rocket.height.meters}M / ${rocket.height.feet}FT`,
    },
    {
      label: "Diameter",
      value: `${rocket.diameter.meters}M / ${rocket.diameter.feet}FT`,
    },
    { label: "Mass", value: `${rocket.mass.kg}KG / ${rocket.mass.lb}LB` },
    { label: "First flight", value: rocket.first_flight },
    { label: "Country", value: rocket.country },
    { label: "Success rate", value: `${rocket.success_rate_pct}%` },
    { label: "Cost per launch", value: `$${rocket.cost_per_launch}` },
  ]

  const launchPadData = [
    { label: "Name", value: launchSite.full_name },
    { label: "Location", value: launchSite.location.name },
  ]

  const launchDate = new Date(launch.launch_date_utc)

  return (
    <div className="page-content">
      <Header />
      <div className="details">
        <div className="details__body">
          <div className="details__body-content">
            <div className="flight">
              <section className="flight__summary">
                <span className="flight__summary-date">{ formatDate(launchDate) }</span>
                <h1 className="flight__summary-name">{ `${rocket.name} launch` }</h1>
                <LaunchCountdown className="flight__summary-countdown" date={launchDate.valueOf()} />
                <img
                  src={launch.links.mission_patch_small}
                  className="flight__summary-patch"
                  alt="SpaceX logo"
                />
              </section>
              <div className="flight__description">
                <Data title="Details" description={launch.details} />
                <Data title="Rocket" items={rocketData} description={rocket.description} />
                <Data title="Launch pad" items={launchPadData} description={launchSite.details} />
              </div>
            </div>
          </div>
        </div>
        <div className="details__controls">
          <div className="details__controls-content">
            <h1 className="details__controls-title">Mission links</h1>
            <ul className="details__actions">
              <li className="details__action">
                <a href={launch.links.reddit_campaign}>Reddit campaign</a>
              </li>
              <li className="details__action">
                <a href={launch.links.presskit}>Presskit</a>
              </li>
              <li className="details__action">
                <a href={launch.links.video_link}>Mission video</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

LaunchDetails.propTypes = {
  launch: PropTypes.object,
  rocket: PropTypes.object,
  launchSite: PropTypes.object,
}

export default LaunchDetails
