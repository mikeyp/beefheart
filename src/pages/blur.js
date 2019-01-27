import React from "react"
import Layout from "../components/layout"

export default () =>  {
  return (
    <Layout>
      <h1>Blur Bookmarklet</h1>

      <p><a href="javascript:(function()%20{%20document.getElementsByTagName('html')[0].style.WebkitFilter%20=%20'blur(20px)'%3B%0Adocument.getElementsByTagName('html')[0].style.filter%20=%20'blur(20px)'%3B%20})()%3B">Blur this page</a></p>

      <p>Drag this link to your bookmarks (or favorites) bar.</p>
    </Layout>
    )
  }
