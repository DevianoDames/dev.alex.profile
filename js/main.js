
function fetch_info(i) {
    let profilebox = ["images/alex3.jpg", "images/deviano3.jpg", "images/ethan3.jpg"];
    let name = ["Alex Huang", "Deviano Dames", "Ethan Jutila"];
    let status = ["Web Developer Specialist", "Motion Designer Specialist", "UI/UX Designer Specialist"];
    let bio = ["Alex Huang is CodeSphere's front-end developer. Alex Huang, who was born and raised in Taiwan, relocated to Canada in 2021 and enrolled at Fanshawe College to study interactive media and design.", "Deviano is CodeSphere's motion designer. Deviano Dames, who was born and raised in the Bahamas, relocated to Canada in 2020 and enrolled at Fanshawe College to study interactive media and design.</p>", "Ethan Jutila, CodeSphere's UI/UX Designer. Ethan Jutila, who was born and raised in the Canada, enrolled at Fanshawe College to study interactive media and design."]

    document.getElementById("profilebox").src = profilebox[i];
    document.getElementById("name").innerHTML = name[i];
    document.getElementById("status").innerHTML = status[i];
    document.getElementById("bio").innerHTML = bio[i];
    document.getElementById("name").style.color = "blue";


    console.log("change personal information")
  
}



