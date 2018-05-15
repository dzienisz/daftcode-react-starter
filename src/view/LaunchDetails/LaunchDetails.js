import React, { Component } from "react"
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LaunchDetails = ({ launch, rocket, launchSite }) => {
  const rocketMetrics = [
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

  const launchPadMetrics = [
    { label: "Name", value: launchSite.full_name },
    { label: "Location", value: launchSite.location.name },
  ]

  const launchDate = new Date(launch.launch_date_utc)

  return (
    <div>
      <Header />
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
