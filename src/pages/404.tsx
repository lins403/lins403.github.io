import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { Link } from "gatsby"


const NotFound = () => (
  <Layout>
    <h1>404 - Not Found</h1>
    <p>
      You just hit a route that doesn't exist. You can go back to <Link to="/">the homepage</Link> and try again.
    </p>
  </Layout>
)

export default NotFound
