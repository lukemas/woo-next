import Head from 'next/head';

const Layout = (props) => {
return (
<div>
<Head>
    <title> Woocomerce React Theme</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"></link>
</Head>
{ props.children }
</div>
);
};

export default Layout;