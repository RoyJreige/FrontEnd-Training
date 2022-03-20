const testimonial=[
    {
        name:"Maximilien V.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        text:"Your company is truly upstanding and is behind its product 100%. Apple is awesome! Nice work on your apple. I couldn't have asked for more than this."},
        {
        name:- "Corrie F.",
        photoUrl:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60",
        text:"We've seen amazing results already. I am completely blown away. I would gladly pay over 600 dollars for apple. I would like to personally thank you for your outstanding product."
    },
    {
        name:"Dorelia S.",
        photoUrl:"https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60",
        text:"I would also like to say thank you to all your staff. Very easy to use. It's really wonderful. I couldn't have asked for more than this."

    }
];
const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username");
updateTestimonial();

let idx=0;
function updateTestimonial(){
    const {name,photoUrl,text}=testimonial[idx];
    imgEl.src=photoUrl;
    textEl.innerHTML=text;
    usernameEl.innerHTML=name;
    idx++;
    if(idx===testimonial.length)
    {idx=0;}
    setTimeout(()=>{
        updateTestimonial();
    },5000)
}