import { Constants } from "../../components/utils/Constants";
import axios from "axios";
import Card from "../../components/ui/Card";
import { Center, Heading } from "@chakra-ui/react";

export default function Event({ event, slug }){
    
    return (
        <div>
            <Center py={6}>
            <Heading>{ event.EventType } of { event.BrideName } & { event.GroomName }</Heading>
            </Center>
            <Card event={event}/>
        </div>
    )
}


export async function getStaticPaths() {
    console.log('[Next.js] Running getStaticPaths for issue page');
    const response = await axios.get(`${Constants.API}${Constants.EVENTS}${Constants.QUERY_POPULATE}`);
    const events = response.data.data;
    const paths = events.map((event) => ({
        params: {
            slug: event.attributes.Slug,
        },
    }));
  
    return {
      paths: paths,
      fallback: 'blocking',
    };
}

export async function getStaticProps({params}) {
    const { slug } = params;
    const response = await fetch(`${Constants.API}${Constants.EVENTS}${Constants.QUERY_FILTER}${slug}${Constants.POPULATE}`);
    const { data } = await response.json();
    
    return {
        props: {
            event : data[0].attributes,
            slug,
        },
    }
}