import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Title from '../components/title'

export default() => (
    <Layout>
    <div>
        <Title text='About Me' />
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor
        </p>
    </div>
    </Layout>
)