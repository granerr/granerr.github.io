import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Header } from "semantic-ui-react";

const HeaderComponent = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      {/* <Header as="h1" color="violet">
        First Header Here Okay
      </Header> */}
      <Header as="h1" color="white">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          Hi, my name is Rose.
        </Link>
      </Header>
      <p>
        As a developer, I focus on...
        <br />
        and blah blah blah.
      </p>
      <Button inverted>Contact Me</Button>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Contact Me
      </Link>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `blue`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </header>
);

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string
};

HeaderComponent.defaultProps = {
  siteTitle: ``
};

export default HeaderComponent;
