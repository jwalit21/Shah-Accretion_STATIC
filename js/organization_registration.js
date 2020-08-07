function submit_organization_registration() {
    var inf_div = document.getElementById("information_div");
    var succ_1 = document.getElementById("success_after_registration1");
    var succ_2 = document.getElementById("success_after_registration2");
    var name = document.getElementById("org_name");
    var dir_name = document.getElementById("dir_name");
    var email = document.getElementById("us");
    var mob = document.getElementById("mob");
    var web = document.getElementById("web_link");
    var face = document.getElementById("facebook_link");
    var link = document.getElementById("linkedin_link");
    var insta = document.getElementById("instagram_link");
    // if(name.value == '' || dir_name.value== '' || email.value=='' || mob.value=='' || web.value=='' || face.value=='' || insta.value=='' || link.value=='')
    // {
    //     alert("please fill out information")
    //     return;
    // }
    inf_div.style.display = 'block';
    succ_1.innerHTML = "Registered successfully go down for details";
    succ_1.style.color = "green";
    succ_2.innerHTML = "Registered successfully";
    succ_2.style.color = "green";
    document.getElementById("org_name_display").innerHTML = name.value;
    document.getElementById("dir_name_display").innerHTML = dir_name.value;
    document.getElementById("email_display").innerHTML = email.value;
    document.getElementById("mob_display").innerHTML = mob.value;
    document.getElementById("website_display").innerHTML = web.value;
    document.getElementById("linkedin_display").innerHTML = link.value;
    document.getElementById("facebook_display").innerHTML = face.value;
    document.getElementById("instagram_display").innerHTML = insta.value;
    name.value = '';
    dir_name.value= '';
    email.value = '';
    mob.value = '';
    web.value = '';
    face.value = '';
    link.value = '';
    insta.value = '';
    document.getElementById("pass").value = '';

    console.log(name.value);
}

