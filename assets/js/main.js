$(document).ready(function()
{
    // $("#sort").change(filterChange);
    // $("#search").keyup(filterChange);
    
    var header = document.querySelector("header");
    header.setAttribute("class", "container-fluid bg-dark position-fixed");
    //header.setAttribute("class", "container-fluid");

    let logo = document.querySelector("#logo"); //Fetch id logo with query selector
    let img = document.createElement("img"); //Making element img
    img.setAttribute("alt", "Logo"); //Setting attribute alt
    img.setAttribute("src", "assets/img/krigla.png"); //Setting attribute src
    img.setAttribute("width", "60"); //Setting attribute width
    img.setAttribute("id", "logo-src");

    //DEFAULTNA VREDNOST JE 40 sirine SLIKE

    logo.appendChild(img); //Adding element "img" to variable logo(#logo);

    //Hamburger
    var hamburger = document.getElementById("fa-bars");
    var mySideNav = document.getElementById("my-side-nav"); //Hamburger nav meni koji se otvara na klik

    document.addEventListener("scroll", function()
    {
        //console.log(window.scrollY);
        if(window.scrollY == 0)
        {
            img.setAttribute("width", "60");
            header.style.fontSize = "32px";
            header.style.height = "90px";
            hamburger.style.fontSize = "40px";
            mySideNav.style.top = "90px";
        }
        else if(window.scrollY > 0)
        {
            img.setAttribute("width", "40");
            header.style.fontSize = "24px";
            header.style.height = "63px";
            hamburger.style.fontSize = "25px";
            mySideNav.style.top = "63px";
        }
    })

    dohvatiPodatke("nav", addNav);
    dohvatiPodatke("beers", beerData);
    
    
    //jQuery hambruger
    $("#hamburger-btn").click(function(){
        $("#my-side-nav").css("display", "block");
        $(".nav-content").animate({
            marginRight : "0"
        }, 50);
    });

    $("#close").click(function(){
        $(".nav-content").animate({
            marginRight : "-350px"
        }, 50);
        setTimeout(changeDisplay, 400, "linear");
        
    })



    function changeDisplay()
    {
        $("#my-side-nav").css("display", "none");
    }

    
    // querySelector ne detektuje klik i kad je stavljena klasa i kad je stavljen tag.
    // querySelector wouldn't detect click, even if class or tag were added.

    let val = document.getElementById("value");
    let p_tag_value = document.getElementById("p-tag-value");
    let vrednostBrojacaPive = val.value;
    let increment = document.getElementById("increment");
    let decrement = document.getElementById("decrement");

    increment.addEventListener("click", function()
    {
        p_tag_value.innerHTML = ++vrednostBrojacaPive;
        console.log("klik plus");
    });
    decrement.addEventListener("click", function()
    {
        if(vrednostBrojacaPive <= 0)
        {
            vrednostBrojacaPive = 0;
        }
        else
        {
            p_tag_value.innerHTML = --vrednostBrojacaPive;
        }
        console.log("klik mins");
    });


    //Adding slider with jQuery
    slideShow();



    function returnDescription(el)
    {
        if(el.description1 == undefined)
        {
            return `<div class="col-lg-6">
            <h2 class="mb-3 border-bot">${el.title}</h2> <!-- H2 TAG -->
            <p class="text-left w-75 p-font-size">${el.description}</p>`;
        }
        else
        {
            return `<div class="col-lg-6">
                        <h2 class="mb-3 border-bot">${el.title}</h2> <!-- H2 TAG -->
                        <p class="text-left w-75 p-font-size">${el.description}</p>
                        <p class="text-left w-75 p-font-size">${el.description1}</p>
                    </div>`;
        }
    }

    var titleDescriptionID = document.getElementById("title-description");
    var titleDescription = 
    [
        {
            title: "What is BeerShop?",
            description: "Beershop is a web application for ordering beers. All you need is to select your beer and to cart. After that fill the form and in 1 hour you will get beers. If you have a problem, send us an e-mail or contact us on our Instagram page."
        },
        {
            title: "What we offer?",
            description: "We offer every kind of beer. Beer in a glass bottle, draft beer, craft beer, wheat beer. Also, we offer special beer like chocolate beer, honey beer, and strawberry beer",
            description1: "We have beer from every country. The most popular beer is BIP, from Belgrade, Serbia."
        }
    ]

    for(let element of titleDescription)
    {
        console.log(element.title)
        if(element.description1 == undefined)
        {
            titleDescriptionID.innerHTML += returnDescription(element);               
        }
        else
        {
            titleDescriptionID.innerHTML += returnDescription(element);
        }
    }
    
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "parallax-h3");
    h3.setAttribute("class", "text-white text-uppercase text-center h1 font-airside position-absolute");
    h3.innerText = "Explore our shop";
    document.getElementById("parallax").appendChild(h3);

    var niz = new Array(3);
    niz[0] = "Bottle";
    niz[1] = "Craft";
    niz[2] = "Wheat";
    console.log(niz);

    var ispis = "";
    var beerChoice = document.getElementById("beer-choice1"); //Overflow hidden omogucava mi da napravim granice na divu
    for(let i = 0; i < niz.length; i++)
    {
        if((i == 0) || (i == 2))
        {
            ispis += `<div id="hover${i}" class="col-4 overflow-hidden cursor">
                        <p class="text-center p-translate font-fjalla h1">${niz[i]}</p>
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid hover"/>
                    </div>`;
        }
        else
        {
            ispis += `<div id="hover${i}" class="col-4 border-left border-right overflow-hidden cursor">
                        <p class="text-center p-translate font-fjalla h1">${niz[i]}</p>
                        <img src="assets/img/${niz[i]}.png" alt="${niz[i]}" class="img-fluid hover"/>
                    </div>`;
        }
    }
    beerChoice.innerHTML += ispis;
    // console.log(ispis);
    // console.log(beerChoice);

    
    
    var quotesArr = ["Don't worry beer happy.", "Beer is not alcohol.", "Beer brate Brooklyn.", "BiP is the best Beer I've ever drank.", "On victory, you deserve beer.", "You can't drink all day if you don't start in the morning.", "Good people drink good beer.", "Wine is made by men, Beer by God", "Beer, beer and beer.", "Gimme a woman who loves beer and I'll conquer the world."];
    var authorQuoteArr = ["Albert Einstien", "Nikola Tesla", "FTP Cojkana", "Unknown hero", "Napoleon Bonaparte", "Ivan Zlatic", "Adam Sandler", "Martin Luther", "Michael Scofield", "Mickey Mouse"];
    var quotes = document.getElementById("quotes");
    let randomNum = Math.floor(Math.random() * quotesArr.length);
    quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    setInterval(getQuote, 7000);

    function getQuote()
    {
        randomNum = Math.floor(Math.random() * quotesArr.length);
        // console.log(randomNum);
        quotes.innerHTML = `<p class="ml-3 pt-3 pb-3">"${quotesArr[randomNum]}"</p><p class="ml-3 pt-3 pb-3">- ${authorQuoteArr[randomNum]}</p>`;
    }

    //Adding store

   
    //var store = document.getElementById("store");

    

    
    
    //Gallery

    //Forms - Regular expression
    var btn = document.getElementById("btn");

    btn.addEventListener("click", checkForm);

    //Useful links

    var tr = document.getElementsByClassName("tr");
    var trArr = ["Vanja Veapi", "vanja.veapi@gmail.com", "060 123 45 56"];

    for(let i = 0; i < tr.length; i++)
    {
        tr[i].innerHTML += `<td class="text-white pb-3">${trArr[i]}</td>`; 
    }
    
    var link = document.getElementsByClassName("link");
    var linkArr = ["Facebook", "Instagram", "LinkedIn", "Behance", "Sitemap", "RSS"];
    var linkArrHref = ["https://www.facebook.com/vanja.veapi/", "https://www.instagram.com/vanja.veapi/", "https://www.linkedin.com/in/vanjaveapi/", "https://www.behance.net/vanjaveapi99", "sitemap.xml",  "rss.xml"];

    for(let i = 0; i < link.length; i++)
    {
        link[i].innerHTML += `<a href="${linkArrHref[i]}"><p class="mt-1 ml-3 h3 font-fjalla">${linkArr[i]}</p></a>`;
    }

    $(".close").click(function()
    {
        $("#myModal").hide();
    })




    //jQuery PLUGIN
    let counter = 0;
    $(".show-more-text" ).hide("blind"); //Poziva se prvo hardkovoano da bi se zamenile pocetne pozicije, jer blind prvo uklanja tekst
    $("#show-more").on("click", function(e) 
    {
        if(counter === 1)
        {
            counter = 0;
            $(this).html("Show more");
        }
        else
        {
            counter = 1;
            $(this).html("Show less");
        }
        console.log("Brojac je " + counter);
        e.preventDefault();
        runEffect();
        return false;
    });
});

function addNav(podaci)
{
    let navList = document.querySelector(".nav-list");
    let navList1 = document.getElementsByClassName("nav-list")[1];
    let ispis = "";
    let ispis1 = "";
    for(let podatak of podaci)
    {
        ispis += makeNav(podatak);
        ispis1 += makeNavHamburger(podatak);
    }
    navList.innerHTML = ispis;
    navList1.innerHTML += ispis1;

    let liTag = document.getElementsByTagName("li"); 
    let aTag = document.getElementsByTagName("a");
    liTag[0].classList.add("border-bot")
    aTag[0].classList.add("active");

    let activeLi = liTag[0]; // Li tag
    let activeA = aTag[0]; //A tag
    
    //console.log(liTag[0]);
    
    for(let i = 0; i < liTag.length; i++)
    {
        let li = liTag[i];
        let a = aTag[i];
        
        liTag[i].addEventListener("click", function()
        {
            //console.log(li.textContent);
            if (activeLi) activeLi.classList.remove("border-bot");
            li.classList.add("border-bot");
            activeLi = li;

            if (activeA) activeA.classList.remove("active")
            a.classList.add("active");
            activeA = a;
        })
    }

}
function makeNav(podatak)
{
    return `<li class="nav-items pl-1 pr-1"><a href="${podatak.putanja}"  class="${podatak.ime} nav-link text-uppercase d-inline-block mt-2">${podatak.ime}</a></li>`;
}
function makeNavHamburger(podatak)
{
    return `<li class="dropdown-item pl-1 pr-1"><a href="${podatak.putanja}"  class="${podatak.ime} nav-link text-uppercase d-inline-block mt-2">${podatak.ime}</a></li>`;
}
function addBeer(beers)
{
    // filterByInput(beers); // - 12K puta se pozvao odjednom
    // sortiranje(beers);

    let ispis = "";
    let store = document.querySelector("#store");
    for(let beer of beers)
    {
        ispis += makeBeer(beer);
    }
    store.innerHTML = ispis;
}
function makeBeer(beer)
{
    return `<div id=${beer.id} class="col-12 col-md-5 col-lg-3 border roundend mt-4 pb-2 shadow bg-white font-fjalla ml-1 d-block">
    <img src="${beer.img.src}" alt="${beer.img.alt}" class="img-fluid border-bottom pt-2 mb-2 col-12"/>
    <table class="table-responsive">
        <tr><td><p class="text-primary">Name:</p></td> <td><p class="ml-1">${beer.beerName}</p></td></tr>
        <tr><td><p class="text-primary">Type:</p></td> <td><p>${beer.typeBeer}</p></td></tr>
        <tr><td><p class="text-primary">Price:</p></td><td><p> ${beer.price} RSD</p></td></tr>
        </table>
        <input type="button" data-id="${(beer.dataid)}" class="dugme btn btn-warning add-to-cart w-100 text-white rounded display-1" value="Add to cart"/>
    </div>`;
}




function runEffect()
{
    $(".show-more-text").removeClass("d-none");
    $(".show-more-text" ).toggle("blind");
}

function aboutAuthor(e)
{
    e.preventDefault();
    $("#about-author").show();
    console.log("true");

    $(".close").click(function()
    {
        $("#about-author").hide();
    })
}
function prikaziKorpu(e)
{
    e.preventDefault();
    $("#add-to-cart").show();
    console.log("true");


    //Imam bag, svaki put kad udjem u KORPU brojac se poveca za jedan vise nego sto treba.
    //Znaci inicijalno na svaki dodati artikl treba da se poveca za 1, medjutim kada izadjem iz korpe i udjem u korpu i dodam artikl, on se povecava za 2
    //I svaki sledeci put se poveca za +1

    //Moja pretpostavka je da se to desava, zato sto svaki put kad pozovom funkciju prikaziKorpu ona prodje kroz for petlju.

    $(".close").click(function()
    {
        $("#add-to-cart").hide();
    })
}
function slideShow()
{
    var trenutni = $("#slider .d-block");
    trenutni.animate({transform: "translateX(200px)"}, 1000);
    var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');
    trenutni.removeClass('d-block');
    trenutni.addClass('d-none');
    sledeci.addClass('d-block');
    setTimeout(slideShow, 5000);
}

function checkForm()
{
    let counter = 0; //Brojac koji ce ako bude sve validno da vrati broj 3

    let errName = document.getElementById("error-name");
    let name = document.getElementById("name");

    let regExpNameSurname = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,12}$/;
    let valid = true;
    if(name.value === "")
    {
        valid = false;
        name.style.border = "1px solid #ff0000";
        errName.innerHTML = '<p class="error">The field Name is empty.</p>';
    }
    else
    {
        if(!regExpNameSurname.test(name.value))
        {
            valid = false;
            name.style.border = "1px solid #ff0000";
            errName.innerHTML = '<p class="error">Name is not in valid format. Name must start with first capital letter and to have minimum 3 characters and maximum 14 characters.</p>';
        }
        else
        {
            name.style.border = "1px solid #00ff00";
            counter++;
            valid = true;
            errName.innerHTML = "";
        }
    }

    let errSurname = document.getElementById("error-surname");
    let surname = document.getElementById("surname");
    let regExpSurname = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,12}$/;

    errSurname.innerHTML = ""; //Bez ovoga ima bag da nece da restartuje inerhtml
    if(surname.value === "")
    {
        valid = false;
        surname.style.border = "1px solid #ff0000";
        errSurname.innerHTML = `<p class="error">Field surname is empty</p>`;
    }
    else
    {
        if(!regExpSurname.test(surname.value))
        {
            valid = false;
            surname.style.border = "1px solid #ff0000";
            errSurname.innerHTML = `<p class="error">Surname is not in valid format.</p>`;
        }
        else
        {
            counter++;
            valid = true;
            surname.style.border = "1px solid #00ff00"
            errSurname = "";
        }
    }
    console.log(surname);

    let errEmail = document.getElementById("error-email");
    let email = document.getElementById("email");

    let regExpMail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if(email.value === "")
    {
        valid = false;
        email.style.border = "1px solid #ff0000";
        errEmail.innerHTML = "<p class='error'>Email field can't be empty!</p>";
    }
    else
    {
        if(!regExpMail.test(email.value))
        {
            valid = false;
            email.style.border = "1px solid #ff0000";
            errEmail.innerHTML = "<p class='error'>Email must start with small leter and must have @ for example (test@gmail.com).</p>";
        }
        else
        {
            email.style.border = "1px solid #00ff00";
            counter++;
            valid = true;
            errEmail.innerHTML = "";
        }
    }

    let errAddress = document.getElementById("error-address")
    let address = document.getElementById("address");

    let regExpAdr = /[A-ZČĆŽŠĐ1-9]([a-zčćžšđ0-9]{2,80}\s)+([0-9]{1,4}[a-zžđ]*|bb)$/;

    if(address.value === "")
    {
        valid = false;
        address.style.border = "1px solid #ff0000";
        errAddress.innerHTML = "<p class='error'>Address field can't be empty</p>"
    }
    else
    {
        if(!regExpAdr.test(address.value))
        {
            valid = false;
            address.style.border = "1px solid #ff0000";
            errAddress.innerHTML = "<p class='error'>Address must have first capital letter and number of street.</p>"
        }
        else
        {
            counter++;
            valid = true;
            address.style.border = "1px solid #00ff00";
            errAddress.innerHTML = "";
        }
    }

    if(counter === 4)
    {
        document.cookie = `ime=${name.value}`;
        document.cookie = `prezime=${surname.value}`;
        document.cookie = `adresa=${address.value}`;
        document.cookie = `email=${email.value}`;

        document.getElementById("myModal").style.display = "block";
        let span = document.getElementsByClassName("close")[0];
        span.addEventListener("click", () => {
            document.getElementById("myModal").style.display = "none";
        })

        let message = document.getElementById("message");
        message.innerHTML = `<p>Your parameter sent to the server. This is your data:</p>
        <table class="table-responsive table table-center mt-3 d-flex justify-content-center">
        <tr>
            <td>Name: </td>
            <td class="text-blue">${name.value}</td>
        </tr>
            <td>Surame: </td>
            <td class="text-blue">${surname.value}</td>
        </tr>
        <tr>
            <td>E-mail: </td>
            <td class="text-blue">${email.value}</td>
        </tr>
        <tr>
            <td>Address: </td>
            <td class="text-blue">${address.value}</td>
        </tr>
        </table><br/>`
        console.log("jesteeee");
    }
    else
    {
        console.log("Nije bajo");
    }
}

function onReady(callback) 
{
    var intervalId = window.setInterval(function() 
    {
      if (document.getElementsByTagName('body')[0] !== undefined) 
      {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
}
  
function setVisible(selector, visible) 
{
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() 
{
    setVisible('.page', true);
    setVisible('#loading', false);
});

function filterByInput(beers)
{
    let search = document.getElementById("search");
    search.addEventListener("input", () => {
        let vrednost = search.value.toLowerCase(); //Ovako radi
        console.log(vrednost);

        searchQuery = vrednost;

        const filteredArray = filtriraj(beers, searchQuery, sortType);
        let proba1 = filteredArray.filter((beer) => 
        {
            let beerId = document.getElementById(beer.id);
            if(beer.beerName.toLowerCase().indexOf(vrednost) > -1)
            {
                beerId.classList.add("d-block");
            }
            else
            {
                beerId.classList.remove("d-block");
                beerId.classList.add("d-none");
            }
        });
        // let proba1 = beers.filter((beer) => beer.beerName.toLowerCase().includes(vrednost));
        // addBeer(proba1);
        console.log(proba1)
    });

    
    //console.log(filterByInput(beers)); 
}

function clearFilter(beers)
{
   let search = document.querySelector("#search");
   search.value = null;

   addBeer(beers);
}

function sortiranje(tipSortiranja, podatak)
{
    // const sortType = document.querySelector("#sort").value;
    switch(tipSortiranja)
    {
        case "asc":
            return podatak.sort((a, b) => a.price - b.price);
        case "desc":
            return podatak.sort((a, b) => b.price - a.price);
        case "beerNameAsc":
            podatak.sort((a, b) => {
                if(a.beerName < b.beerName)
                    return -1;
                else if(a.beerName > b.beerName)
                    return 1;
                else
                    return 0;
            });
            break;
        case "beerNameDesc":
            podatak.sort((a, b) => {
                if(a.beerName > b.beerName)
                    return -1;
                else if(a.beerName < b.beerName)
                    return 1;
                else
                    return 0;
            });
            break;

        default:
            console.log("Pocetno sortiranje");
    }
    // const filteredArray = filtriraj(podatak, searchQuery, sortType);
    // addBeer(filteredArray);
}

function ispisiKorpu(artikli)
{
    var ispis;
    var korpaTabela = document.querySelector("#korpaTabela");
    if(artikli.length === 0)
    {
        ispis = "<h1 class='w-100 text-center'>The cart is empty</h1>";
    }
    else
    {
        ispis = `<table id="korpaTabela" class="table table-striped">
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sum price</th>
            <th>Remove</th>
        </tr>`;
        
        for(let artikl of artikli)
        {
            ispis += napraviPorudzbinu(artikl);
        }
    }
    korpaTabela.innerHTML = ispis + "</table>";

    // ЛИСТЕНЕРИ
    
    // Брисанје
    const obrisi = korpaTabela.querySelectorAll(".remove");
    obrisi.forEach((el) => {
        el.addEventListener("click", function(){
            let dataId = Number($(this).attr("data-id"));

            obrisiIzKorpe(dataId);
            this.parentElement.parentElement.remove();
        });
    });
    
    const plus = korpaTabela.querySelectorAll(".plus");
    plus.forEach((el) => {
        el.addEventListener("click", function() {
            let dodajJosPiva = Number($(this).attr('data-id'));
            let proba = $(this.parentElement).find("p");
            let kolicina = Number(this.parentElement.innerText);
            let cenaJednogPiva = Number($(this.parentElement.parentElement).find(".cenaJednogPiva").html());
            let suma = $(this.parentElement.parentElement).find(".ukupnaCena");
            // console.log("Cena jednog piva je " + cenaJednogPiva);

            kolicina++;

            let ukupnaCena = kolicina * cenaJednogPiva;
            // console.log("Kolicina * cenaJednogPiva: " + ukupnaCena);

            suma.html(ukupnaCena);
            proba.html(kolicina);

            dodajJos(dodajJosPiva);
        });
    });

    const minus = korpaTabela.querySelectorAll(".minus");
    minus.forEach((el) => {
        el.addEventListener("click", function(){
            let oduzmi = Number($(this).attr('data-id'));
            
            let proba = $(this.parentElement).find("p");
            let kolicina = Number(this.parentElement.innerText);
            let cenaJednogPiva = Number($(this.parentElement.parentElement).find(".cenaJednogPiva").html());
            let suma = $(this.parentElement.parentElement).find(".ukupnaCena");

            let sumaKonvertovanaUBroj = Number(suma.html());
            
            kolicina--;

            let razlika = sumaKonvertovanaUBroj - cenaJednogPiva
            if(razlika <= 0)
            {
                this.parentElement.parentElement.remove();
            }
            suma.html(razlika);
            proba.html(kolicina);
            
            oduzmiPivo(oduzmi);
        });
    });
    
}

function napraviPorudzbinu(artikl)
{
    return `<tr>
    <td><img src="${artikl.img.src}" alt="${artikl.img.alt}" class="img-fluid w-25"/></td>
    <td>${artikl.beerName}</td>
    <td>${artikl.typeBeer}</td>
    <td><p class="cenaJednogPiva">${artikl.price}</td>
    <td><p>${artikl.quantity}</p><input type="button" value="+" data-id="${(artikl.dataid)}" class="plus btn bg-primary text-white kolicina"/><input type="button" value="-" data-id="${(artikl.dataid)}" class="minus btn btn-dark kolicina"/></td>
    <td><p class="ukupnaCena">${artikl.price * artikl.quantity}</p></td>
    <td><input type="button" value="Remove" class="btn btn-warning text-white remove" data-id="${(artikl.dataid)}"/></td>
    </tr>`;
}

function dodajUKorpu(param){

    function dohvatiArtikal(porudzbina, id)
    {
        return porudzbina.products.find(e => e.id === id)
    }

    const id = Number($(param).attr('data-id'));

    // Dohvati porudžbinu
    var porudzbina = getItemFromLS("porudzbineKorpa");

    // Ako ne postoji, napravi novu porudžbinu
    if(!porudzbina)
    {
        porudzbina = {
            products: []
        }
    }
    
    // Dohvati artikal iz porudžbine (ako postoji)
    const artikal = dohvatiArtikal(porudzbina, id);
    if (artikal) {
        artikal.quantity += 1;
    }
    else {
        // Ako artikal ne postoji, napravi novi
        porudzbina.products.push({
            id: id,
            quantity: 1
        });
    }
    
   
    // Snimi izmenjenu porudžbinu u local storage
    setItemToLS("porudzbineKorpa", porudzbina);
}

function dodajJos(param)
{
    function dohvatiArtikal(porudzbina, id)
    {
        return porudzbina.products.find(e => e.id === id)
    }

    const id = param;

    var porudzbina = getItemFromLS("porudzbineKorpa");

    if(!porudzbina)
    {
        porudzbina = {
            products: []
        }
    }
    
    const artikal = dohvatiArtikal(porudzbina, id);
    if (artikal) {
        artikal.quantity += 1;
    }
    else {
        // Ako artikal ne postoji, napravi novi
        porudzbina.products.push({
            id: id,
            quantity: 1
        });
    }
    
    setItemToLS("porudzbineKorpa", porudzbina);
}

function oduzmiPivo(param)
{
    function dohvatiArtikal(porudzbina, id)
    {
        return porudzbina.products.find(e => e.id === id)
    }

    const id = param;

    var porudzbina = getItemFromLS("porudzbineKorpa");

    if(!porudzbina)
    {
        porudzbina = {
            products: []
        }
    }
    
    const artikal = dohvatiArtikal(porudzbina, id);
    if (artikal) {
        artikal.quantity -= 1;
    }
    if(artikal.quantity <= 0)
    {
        let test = porudzbina.products.filter(e => e.id != artikal.id);
        porudzbina = {
            products: test
        }
        
    }
    setItemToLS("porudzbineKorpa", porudzbina);
}
function obrisiIzKorpe(param)
{
    function dohvatiArtikal(porudzbina, id)
    {
        return porudzbina.products.find(e => e.id === id)
    }

    const id = param;

    var porudzbina = getItemFromLS("porudzbineKorpa");
    const artikal = dohvatiArtikal(porudzbina, id);

    let test = porudzbina.products.filter(e => e.id != artikal.id)
    if(test.length === 0)
    {
        let ispis = "<h1 class='w-100 text-center'>The cart is empty</h1>";
        let korpaTabela = document.querySelector("#korpaTabela").innerHTML = ispis;
    }
    console.log(test)
    porudzbina = {
        products: test
    }
    setItemToLS("porudzbineKorpa", porudzbina);
}
function setItemToLS(naziv, porudzbine)
{
    localStorage.setItem(naziv, JSON.stringify(porudzbine));
}
function getItemFromLS(name)
{
    return JSON.parse(localStorage.getItem(name));
}
function productsInCart() 
{
    return JSON.parse(localStorage.getItem("porudzbineKorpa"));
}
function displayCartData(piva) 
{
    const zaIspis = [];
    let korpa = productsInCart();

    for (const pivo of piva) 
    {
        if(korpa == null)
        {
            break;
        }
        const prod = korpa.products.find(el => pivo.dataid === el.id);

        if (prod) {
            zaIspis.push({...pivo, ...prod});
        }
    }

    ispisiKorpu(zaIspis)
}


function filterChange()
{
    $.ajax({
        url: "assets/data/beers.json",
        method: "get",
        dataType: "json",
        success: function(data){

            let searchQuery = "";
            let sortType = "";
            // filterByInput(data);
            addBeer(data);
        },
        error: function(err){
            console.log(err);
        }
    });
}
function dohvatiPodatke(file, callback)
{
    $.ajax({
        url: "assets/data/" + file + ".json",
        method: "get",
        dataType: "json",
        success: function(response){
            callback(response);
        },
        error: function(err){
            console.log(err);
        }
    });
}
function beerData(data)
{
    //console.log(data);
    addBeer(data);
    setItemToLS("piva", data);
    var porudzbine = getItemFromLS("porudzbineKorpa");
    var svaPiva = getItemFromLS("piva");
    displayCartData(data);

    let clearFilterVar = document.getElementById("clear-filter");
    clearFilterVar.addEventListener("click", () => {
        clearFilter(data);
        refreshCartButton(data);
    });

    let searchQuery = "";
    let sortType = "";

    // addBeer(data);

    let search = document.querySelector("#search");
    search.addEventListener("input", function(){
        searchQuery = this.value.toLowerCase();
        
        const filtriranNiz = filtriraj(data, searchQuery, sortType);
        addBeer(filtriranNiz); //Ako kazem samo filter onda prilikom brisanja nista se ne vrati
        refreshCartButton(data);
    });

    let sort = document.querySelector("#sort");
    sort.addEventListener("change", function(){
        sortType = sort.value;

        const filtriranNiz = filtriraj(data, searchQuery, sortType);
        addBeer(filtriranNiz);
        refreshCartButton(data);
    });
    // filterByInput(data);
    //Translate Animation
    var hover = document.getElementsByClassName("hover");
    var pTranslate = document.getElementsByClassName("p-translate");

    for(let i = 0; i < hover.length; i++)
    {
        //Sa parent elementom pristupamom elemntu iznad u odnosu na onaj koji smo hteli da dohvatimo.font-fjalla
        //U ovom slucaju se koristi da kada se desi mouseover, da se automatski ne des mouseout, jer inicijalno kada bi se okinuo mouseover kako se pomeri slika na dole tako se okine mouseout, sa parentElement to sprecavamo.
        let container = hover[i].parentElement;

        pTranslate[i].style.transform = "translateY(-100px)";
        container.addEventListener("mouseover", function()
        {
            // var hoverID = document.getElementById(`hover${i}`);
            // hoverID.innerHTML = `<h1>PROBA</h1>`
            // console.log(hoverID);

            //Pristupam velicini diva pomocu clientHeight i delim sa dva da bih tag pozicionirao na sreidnu.
            const positionY = container.clientHeight / 2;
            pTranslate[i].style.transform = `translateY(${positionY}px)`;
            hover[i].style.transform = "translateY(100%)";
        })
        container.addEventListener("mouseout", function()
        {
            //hover[i].classList.remove("text");
            pTranslate[i].style.transform = "translateY(-100px)";
            hover[i].style.transform = "translateY(0px)";
        })
        container.addEventListener("click", function()
        {
            console.log(hover[i].alt);
            let rezultat = data.filter((element) => {
                let beerId = document.getElementById(element.id);
                if(element.typeBeer === hover[i].alt)
                {
                    beerId.classList.add("d-block");
                    //console.log(beerId);
                    return true;
                }
                else
                {
                    beerId.classList.remove("d-block");
                    beerId.classList.add("d-none");
                    return false;
                }
            });
            console.log(rezultat);
        });
    }
    refreshCartButton(data);

    $(".about").click(aboutAuthor);
    $(".cart").click(prikaziKorpu);
}

/**
 * Filtriraj i sortiraj proizvode
 * @param {Array<Object>} proizvodi - niz proizvoda
 * @param {string} query - search query
 * @param {string} sortType - sort type
 */
 function filtriraj(proizvodi, query, sortType) {
    const filtered = proizvodi.filter((beer) => beer.beerName.toLowerCase().includes(query));
    sortiranje(sortType, filtered);

    return filtered;
}

function refreshCartButton(podatak)
{
    //BROJAC KORPE
    let beerCartCounter = document.getElementById("cart-counter");
    let dugme = document.getElementsByClassName("dugme");
    //CART

    beerCartCounter.value = 0;
    for(let i = 0; i < dugme.length; i++)
    {
        dugme[i].addEventListener("click", function()
        {
            dodajUKorpu(dugme[i]);
            let roditelj = this.parentElement;

            var d = $('.dialog').dialog({
                dialogClass: "no-close",
                resizable: false
            });
            setTimeout(function(){$('.dialog').dialog('close');}, 2000);
            let konverzija = Number(beerCartCounter.value);
            beerCartCounter.value = konverzija + 1;


            //KORPA KORPA KORPA KORPA KORPA KORPA KORPA

            // rezultat = data.filter(e => e.id == roditelj.id);
            
            // dodajPorudzbinu(rezultat);
            
            displayCartData(podatak);
            
        })
        //console.log(beerCartCounter.value);
    }
}