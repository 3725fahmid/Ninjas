import Head from 'next/dist/shared/lib/head';
import Link from 'next/link';
import { Button } from 'antd';
const About = () => {
  return (
    <>
      <Head>
        <title>Ninja list | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Following the Ant Design specification, we developed a React UI
          library antd that contains a set of high quality components and demos
          for building rich, interactive user interfaces.
        </p>
        <p>
          Following the Ant Design specification, we developed a React UI
          library antd that contains a set of high quality components and demos
          for building rich, interactive user interfaces.
        </p>
      </div>
    </>
  );
};
export default About;
