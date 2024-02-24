import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import "./Sidebar.scss";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/", delay: 0.3 },
  { title: "Sales", icon: "chart-line", path: "/sales", delay: 0.4 },
  { title: "Costs", icon: "chart-column", path: "/costs", delay: 0.5 },
  { title: "Payments", icon: "wallet", path: "/payments", delay: 0.6 },
  { title: "Finances", icon: "chart-pie", path: "/finances", delay: 0.7 },
  { title: "Messages", icon: "envelope", path: "/messages", delay: 0.8 },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings", delay: 0.9 },
  { title: "Support", icon: "phone-volume", path: "/support", delay: 1},
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isClosed: !state.isClosed }));
  };

  handleMouseOpen = () => {
    this.setState({ isClosed: false });
    console.log('123');
  };

  handleMouseClose = () => {
    this.setState({ isClosed: true });
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isClosed } = this.state;
    const containerClassnames = classnames("sidebar", { closed: isClosed });

    return (
        <motion.div
        transition={{
          delay: 0.3,
          ease: "linear",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
      <div className={containerClassnames} onMouseEnter={this.handleMouseOpen} onMouseLeave={this.handleMouseClose}>
        <div className="sidebar__header">
          <div className="logo-container">
            <div className="logo_img">
              <img src={logo} alt="TensorFlow logo" />
            </div>

            <span className="brand">TensorFlow</span>
          </div>

          <button className="toggle-button" onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={isClosed ? "angle-right" : "angle-left"} />
          </button>
        </div>

        <div className="menu_bar">
          {routes.map((route) => (
            <motion.div
            key={route.title}
            transition={{
              delay: route.delay,
              ease: "linear",
              duration: 0.4
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            <div
              className={`menu_item ${isClosed ? "with_title" : ""}`}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon className="menu_item__title" icon={route.icon} />
              {!isClosed && <span>{route.title}</span>}
            </div>
            </motion.div>
          ))}
        </div>

        <div className="menu_bar">
          {bottomRoutes.map((route) => (
             <motion.div
             key={route.title}
             transition={{
               delay: route.delay,
               ease: "linear",
               duration: 0.4
             }}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
           >
            <div
              className={`menu_item ${isClosed ? "with_title" : ""}`}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon className="setting_support" icon={route.icon} />
              {!isClosed && <span>{route.title}</span>}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
    );
  }
}
