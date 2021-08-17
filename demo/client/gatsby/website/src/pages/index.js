import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Legal from '../components/Legal'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Elucid - Landed"
          meta={[
            { name: 'description', content: 'Landed Elucid Starter' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <Three />
        <Legal />
      </Layout>
    )
  }
};

export default Home
