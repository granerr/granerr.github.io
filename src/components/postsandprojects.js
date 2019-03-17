import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Header } from "semantic-ui-react";

const PostsAndProjects = ({ siteTitle }) => (
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
          PostsAndProjects.
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
    </div>
  </header>
);

PostsAndProjects.propTypes = {
  siteTitle: PropTypes.string
};

PostsAndProjects.defaultProps = {
  siteTitle: ``
};

export default PostsAndProjects;
