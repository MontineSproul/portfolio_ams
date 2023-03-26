import React, {useState} from 'react';
import photo from '../assets/sunselfie.jpeg';
// const me = new Image(100, 200);
// me.src = "./public/sunselfie.jpeg";
// document.getElementById("aboutMe").appendChild(me);

function AboutMe () {
    return (
        <div id="aboutMe">
            <h1>About Me</h1>
            <img width="150" height="200" src={photo}/>
            <p className="abMe">
            My name is Ashley Sproul, but everyone calls me Montine! I am so excited to be in this world of web development. I have a twin brother who is a web developer, and he, pushed me in this direction. I am so glad he did! It is so cool when you're working on something new, and it works. It gives me an empowered feeling. One of my favorite things about web development is the community. Yeah, that's right, you guys are awesome! I love the dependability and the flexibility a career in web development brings. The possibilities are endless and never boring! I am a single mom to a beautiful almost two year old. She is my driving force definitely makes life fun! I love being a mom, dogs, fall and coffee. When I'm not working, you can probably find us hiking, chasing waterfalls in North Georgia.
            </p>
        </div>
    )
}

export default AboutMe;