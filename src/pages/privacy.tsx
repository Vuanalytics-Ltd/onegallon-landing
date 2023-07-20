import Layout from "@/components/Layout";
import { PortableText } from "@portabletext/react";
import { postQuery } from '../../sanity/lib/queries'
import { client } from '../../sanity/lib/client'

export const getStaticProps = async () => {
    const data = await client.fetch(postQuery);
  
    return { props: { data } };
  };

  const portableComponents = {
   
    block: {
       p: ({children}: any) => <p className=" mb-3" >{children}</p>,
 
    }
 
 }  
  

export default function Privacy({ data }: any){
    // console.log("data" , data)
    return ( 
    <Layout>
      <div className="w-full min-h-screen py-8">
        <div className="container px-4 mx-auto">
            <h1 className="text-center font-gotham font-medium text-2xl mb-4">Privacy Policy</h1>
            <div className="py-3 font-sora font-normal">
               <PortableText value={data[0]?.body}
                              components={portableComponents}  
               />
            </div>
        </div>
      </div>
    </Layout>
    )
}