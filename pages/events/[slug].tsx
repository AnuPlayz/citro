import { GetStaticProps } from "next";
import { Button } from "../../components";
import eventStyles from "../../styles/Events.module.scss";
import LazyImage from "react-lazy-blur-image";
import sanityClient from "../../sanityClient";
import { Event } from "../../containers/Events/types";
import BlockContent from "@sanity/block-content-to-react";
import withLayout from "../../HOC/withLayout";
import { PersonPlusFill } from "react-bootstrap-icons";

interface Props {
  event: Event;
}

const SSR = typeof window === undefined;

const Event = ({ event }: Props) => {
  return (
    <div className={eventStyles.container}>
      <div className={eventStyles.main_poster}>
        <LazyImage
          placeholder={event.poster}
          uri={event.poster}
          render={(src, style) => <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-event-motion-poster-design-template-52733b29d18e82e14be9a9e4168f85e1.jpg?ts=1567076289" style={style} />}
        />
      </div>

      <div className={eventStyles.event_caption}>
        <div className={eventStyles.header}>
          <div className="flex flex-col w-full">
            <h1>{event.name}</h1>
            {new Date() > new Date(event.deadline) && (
              <p>Registrations Closed! 😢</p>
            )}
          </div>
          {new Date() < new Date(event.deadline) && (
            <a href={event.registrationLink} target="_blank" rel="noreferrer">
              <Button className="flex items-center justify-between">
                <PersonPlusFill className="mr-1 h-4 w-4" />
                &nbsp;Register
              </Button>
            </a>
          )}
        </div>

        <div className="text-white">
          <h1>
            CDGI Presents: "DATA DIVINATION"
          </h1>
          <p className="text-base">
            Organized by Idk team - The Computer Science Team
            <br></br>
            "Data speaks, if you're willing to listen"
            <br></br>
            <br></br><p className="font-bold"> 🕚 Date & Time: 20th April '24, 3:00 PM - 4:00 PM
              <br></br> 🎯 Platform: Offline
              <br></br> 🏆 Prizes: Worth Rs 3000
            </p></p>

          <p>
            <h1>Rules🔴</h1>
            <ul>
              <li>Individual Participation</li>
              <li>  Participants will receive a dataset in CSV format.</li>
              <li>Solve the given questions within the provided time frame.</li>
              <li> Evaluation based on solution accuracy.</li>
              <li> Allowed techniques: Data cleaning (e.g., handling null values), data visualization, etc.</li>
              <li> Submit your Jupyter notebook via the Dare2compete submission window.</li>
              <li> Ensure the notebook includes visualization and data cleaning processes.</li>
              <li> In case of a tie, assessment based on the presentation of the Jupyter notebook and time taken for solutions.</li>
            </ul><br></br>
            📞 Contact:
            Aniruddh - [Randomly generated number]
            Feel free to reach out for further details!
          </p>
        </div>
        {event?.qr_code && new Date() < new Date(event.deadline) && (
          <div className={eventStyles.qr_code}>
            <h1>Scan for Registration</h1>
            <img src={event.qr_code} alt="QR Code" />
          </div>
        )}
      </div>
    </div>
  );
};

export default withLayout(Event);

export const getStaticProps: GetStaticProps = async (context) => {
  const events =
    await sanityClient.fetch(`*[_type == "event" && slug.current == "${context.params.slug}"] {
    name,
    caption,
    "poster": poster.asset->url,
    registrationLink,
    "qr_code": qr_code.asset->url,
    slug,
    deadline
  }`);

  return {
    props: {
      event: events[0],
    },
  };
};

export const getStaticPaths = async () => {
  const events = (await sanityClient.fetch(`*[_type == "event"] {
    "slug": slug.current
  }`)) as Array<Event>;

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
