/** @jsx jsx */
import { jsx } from "theme-ui"
import ProjectListItem from "./project-list-item"

type ListingProjects = {
  projects:{
    node: {
        id: string
        name: string
        url: string
        updatedAt: string
        description: string
        openGraphImageUrl: string
        forkCount: number
        primaryLanguage?: {
          name: string
        }
        stargazers: {
          totalCount: number
        }
      }
  }[]
}

const Listing = ({projects}: ListingProjects) => (
  <section sx={{ mb: [5, 6, 7] }} >
    {projects.map((project) => (
      <ProjectListItem key={project.node.id} project={project.node} />
    ))}
  </section>
)

export default Listing
