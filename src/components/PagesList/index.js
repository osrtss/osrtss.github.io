import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

const PagesList = ({ pages }) => {
  return (
    <div>
    {
      pages.length
      ? (
        <ul>
        {
          pages.map((page) => (
            <li key={ page.title }><PagePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "没有文章"
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
