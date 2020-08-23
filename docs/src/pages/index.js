import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import preview from '../../static/img/preview.gif';
import styles from './styles.module.css';

const features = [
    {
        title: <>Easy to Use</>,
        description: (
            <>
                Simple CSS selectors makes pretty checkbox a breeze to use. Mix- n' match colors,
                animations, and icons to create your perfect checkbox, radio, or switch control.
            </>
        ),
    },
    {
        title: <>Customization Ready</>,
        description: (
            <>
                Pretty Checkbox is powered by Sass and allows you to easily customize colors so it
                integrates nicely into your design system.
            </>
        ),
    },
    {
        title: <>Powered by HTML</>,
        description: (
            <>
                Pretty Checkbox is not a soft control. All inputs are powered by regular HTML which
                means it's accessible by default. Show all users of the world-wide web some love ❤️
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);

    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <div className="text--center">
                    <img src={preview} alt="preview" />
                </div>
            </main>
        </Layout>
    );
}

export default Home;
