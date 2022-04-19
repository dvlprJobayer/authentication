import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';

const TitleRouter = ({ title, ...props }) => {
    return <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Route {...props} />
    </>
};

export default TitleRouter;