/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"

type ProjectListItemProps = {
  project: {
    id: string
    name: string
    url: string
    updatedAt: string
    description: string
    forkCount: string
    primaryLanguage?: {
      name: string
    }
  }
  showTags?: boolean
}

const ProjectListItem = ({ project }: ProjectListItemProps) => (
  <Box mb={4}>
    <TLink href={project.url} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {project.name}
    </TLink>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{project.updatedAt.replace(/(T.*)$/,'')}</time>
      {project.primaryLanguage && project.primaryLanguage.name && (
        <React.Fragment>
          {` — `+ project.primaryLanguage.name }
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default ProjectListItem
