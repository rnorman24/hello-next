import { useRouter } from 'next/router';
import Layout from '../components/MyLayout.js';

export default function Page() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};
