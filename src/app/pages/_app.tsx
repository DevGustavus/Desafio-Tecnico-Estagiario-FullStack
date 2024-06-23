import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { Head } from 'next/document';
 // Or `v1X-pages` if you are using Next.js v1X

 export default function MyApp(props: any) {
   return (
    <AppCacheProvider {...props}>
       <Head>
         ...
       </Head>
       ...
    </AppCacheProvider>
   );
 }
