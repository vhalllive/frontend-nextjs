import { Constants } from "../../components/utils/Constants";
import axios from "axios";
export default function Event({ event, slug }){
    return (
        <div>
            <h1>{slug}</h1>
            <h2>{ event.BrideName }</h2>
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
    console.log(paths)
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