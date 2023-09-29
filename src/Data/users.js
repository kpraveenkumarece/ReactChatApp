import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Praveen Kumar K",
      image:"https://media.licdn.com/dms/image/D5603AQFEUTQe56RopQ/profile-displayphoto-shrink_400_400/0/1682482157496?e=1701302400&v=beta&t=MPTfM1NuJ4yyghAvbs_X2xfIhAk0r6p5xcDFWk2QcDs",
      contacts: [
        {
          id: 2,
          name: "Abdul Basith",
          image:
            "https://media.licdn.com/dms/image/D4E03AQF3erGtQ1ugaQ/profile-displayphoto-shrink_400_400/0/1693853020334?e=1701302400&v=beta&t=Y23iKycAvk6ZewB0odida9SiBIvElLwvchEuZf4AskM",
          chatlog: [
            {
              text: "Hi Bro,How are you!",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Abdul Basith. How are you!",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Praveen.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Jeeva Nathan",
          image:"https://media.licdn.com/dms/image/C5635AQEdJzMBzbJDBw/profile-framedphoto-shrink_400_400/0/1608178581343?e=1696622400&v=beta&t=XBJlfuMgOxNpTnCkhwtGoVVbafUWNuz-Vc6GEBUb3mc",
            // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Mdk.... How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Prasanna Alagokulesh",
          image:
            "https://media.licdn.com/dms/image/C4D03AQH7SICWwoiygA/profile-displayphoto-shrink_400_400/0/1656265896418?e=1701302400&v=beta&t=5e2g4EmspG1otG38X2c9iUsIalqdtFMWZugYonWJcMk",
          chatlog: [
            {
              text: "Hi Praveen,!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Prasanna. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Praveen.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Samuel Adriel Sanjay",
          image:
            "https://media.licdn.com/dms/image/D5603AQErJUh5JjeaDQ/profile-displayphoto-shrink_400_400/0/1675083627967?e=1701302400&v=beta&t=yuZ4X3siyzSsbn7Qo5M12caAn2kDYyjbdwkD8JPGXDk",
          chatlog: [],
        },
        {
          id: 6,
          name: "Dharma",
          image:
            "https://superstarworksheets.com/wp-content/uploads/2022/01/D-uppercase.jpg",
          chatlog: [
            {
              text: "Hey Praveen, where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  praveen.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right ...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Manikandan",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f7/Unicode_0x004D.svg",
          chatlog: [
            {
              text: "Hi Bro",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Parthasarathy",
          image:"https://img.freepik.com/free-vector/botanical-capital-letter-p-vector_53876-165798.jpg?size=626&ext=jpg",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Raj Pradeep",
          image:
            "https://media.licdn.com/dms/image/C5603AQHueqXkFOcDsw/profile-displayphoto-shrink_400_400/0/1620965792646?e=1701302400&v=beta&t=a1_g7ZFSjuOMuKeQA1TP2TVLr0LuCT56tQA40PFKV4k",
          chatlog: [],
        },
      ],
    },
  };