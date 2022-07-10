document.querySelector(".year-now").innerHTML = ["\xa9", new Date().getUTCFullYear(), document.title].join(" "), document.querySelectorAll(".sc").forEach(a => {
            a.addEventListener("click", function(b) {
                b.preventDefault(), this.classList.contains("list-element") && this.querySelector("svg").classList.toggle("tapped");
                let c = this.getAttribute("href").substring(1),
                    a = document.getElementById(c);
                a.classList.toggle("closed"), a.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            })
        })
