const posts = [{
    dateAdded : setDate(),
    description: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
    title:'Blog 1 title',
    postId:1,
    imgUrl:"https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917",
    userId:1,
    userName:"dev"
  },
  {
    dateAdded : setDate(),
    description: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
    title:'Blog 2 title',
    postId:2,
    imgUrl:"https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917",
    userId:2,
    userName:"dev2"
  },
  {
    dateAdded : setDate(),
    description: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
    title:'Blog 3 title',
    postId:3,
    imgUrl:"https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917",
    userId:3,
    userName:"dev3"
  },{
    dateAdded : setDate(),
    description: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
    title:'Blog 4 title',
    postId:4,
    imgUrl:"https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?w=900&t=st=1699261850~exp=1699262450~hmac=cc3542758eef868965bd7dd0cd2724b90e367dc6cb82b282b156307b7d7ee917",
    userId:4,
    userName:"dev4"
  }
]

  function setDate(){
    var date = new Date();
    date.setDate(date.getDate() - 1)
    return date;
  }

  export default posts;