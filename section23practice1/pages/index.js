import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Retrospective",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/A_meeting_between_a_man_and_a_woman.jpg",
    address: "20 Wall street",
    description: "Meeting to make retrospective about the project",
  },
  {
    id: "m2",
    title: "Retrospective 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/A_meeting_between_a_man_and_a_woman.jpg",
    address: "20 Wall street ",
    description: "Meeting to make retrospective about the project",
  },
];
function HomePage(props) {
  // const [loadedMeetups, setloadedMeetups] = useState([])
  // useEffect(()=>{
  //     //send http request and fetch data
  //     setloadedMeetups(DUMMY_MEETUPS);
  // },[])
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browsea huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API

//     return {
//       props:{
//             meetups: DUMMY_MEETUPS
//         },
//     }
// }
export async function getStaticProps() {
  //fetch data from Api
  const response = await fetch("http://localhost:3000/api/meetups");
  const meetups = await response.json();
  console.log(meetups);
  return {
    props: {
      meetups: meetups.data,
    },
    revalidate: 10,
  };
}
export default HomePage;
