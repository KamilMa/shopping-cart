import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <Layout>
        <h2>404- Page NotFound</h2>
        <h4><Link to=''>Go To Main Page</Link></h4>
    </Layout>
)

export default NotFound