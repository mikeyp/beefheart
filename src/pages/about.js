import React from  "react"
import Layout from "../components/layout";
import { Link } from "gatsby";


export default () =>(
    <Layout>
        <div style={{ color: `teal`}}>
            <h1>About Gatsby</h1>
            <p>Such wow. Very react.</p>
            <p>
                <Link to="/">Go to home page</Link>
            </p>
        </div>
    </Layout>
)