import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { Head } from 'next/document';

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
