import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/meetupsJustId");
  console.log(response);
  const meetups = await response.json();
  return {
    fallback: false,
    paths: meetups.data,
  };
}

export async function getStaticProps(context) {
  //fetch single data
  const meetupId = context.params.meetupId;
  const response = await fetch("http://localhost:3000/api/meetupsById", {
    method: "POST",
    body: JSON.stringify({ meetupId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const meetup = await response.json();
  console.log(meetup);
  return {
    props: {
      meetupData: meetup.data,
    },
  };
}

export default MeetupDetails;
