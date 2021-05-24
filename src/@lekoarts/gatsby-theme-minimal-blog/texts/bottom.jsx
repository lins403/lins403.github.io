
import React from 'react'
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import { useStaticQuery, graphql } from "gatsby";
import Listing from "./components/listing"
import { Link } from "theme-ui"

export default (props)=>{
    const {
        github: {
          viewer: {
            repositories: { edges }
          }
        }
      } = useStaticQuery(
        graphql`
          {
            github {
                viewer {
                  repositories(first: 4, orderBy: {field: PUSHED_AT, direction: DESC}) {
                    edges {
                      node {
                        description
                        forkCount
                        id
                        name
                        openGraphImageUrl
                        url
                        primaryLanguage {
                          name
                        }
                        stargazers {
                          totalCount
                        }
                        updatedAt
                      }
                    }
                  }
                }
              }
          }
        `
      );

    return <React.Fragment>
        <Title text="Projects">
            <Link href={`https://github.com/lins403`} target={`_blank`}
             style={{fontSize: `1rem`, fontWeight: 400, color: `gray` }} >Github HomePage</Link>
        </Title>
            <Listing projects={edges} sx={{ mt: [4, 5] }} />
    </React.Fragment>
}