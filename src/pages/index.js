import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default() => (
    <Layout>
        <div>
            <Title text='Welcome'/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor
            </p>
        </div>
        <ArticleList />
    </Layout>
)
